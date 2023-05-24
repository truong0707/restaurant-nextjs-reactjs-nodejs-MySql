const { Foods, CategoryFood } = require("../models/FoodModel");
const db = require("../models/index");

/* Tạo đồ ăn */
const createFood = async (req, res) => {
  try {
    const {
      food_name,
      description,
      price,
      image,
      quantity,
      type,
      category_id, // this is id table category (relation) one(cate) - many(food)
      user_id,
    } = req.body;

    if (!food_name) {
      return res.status(400).json({ message: "Món ăn phải có tên!" });
    } else if (!description) {
      return res.status(400).json({ message: "Mô tả về món ăn!" });
    } else if (!price) {
      return res.status(400).json({ message: "Hãy để giá cho món ăn!" });
    } else if (!image) {
      return res.status(400).json({ message: "Món ăn phải có ảnh!" });
    } else if (!quantity) {
      return res.status(400).json({ message: "Món ăn phải có ảnh!" });
    } else if (!type) {
      return res.status(400).json({
        message: "Hãy nhập loại sản phẩm, đó là thức ăn hay đồ uống!",
      });
    } else if (!category_id) {
      return res
        .status(400)
        .json({ message: "Hãy thêm nó voà loại danh mục sản phẩm!" });
    } else {
      const checkCate = await db.categorys.findOne({
        where: {
          category_id: category_id,
        },
      });

      if (!checkCate) {
        res
          .status(404)
          .json({ message: "Không tìm thấy category sản phẩm này! Hãy tạo category cho sản phẩm." });
      } else {
        const food = await db.foods.create({
          food_name,
          description,
          price,
          image,
          user_id,
          quantity,
          type,
          category_id,
        });

        res.status(200).json({
          data: food,
          code: 0,
          message: "Create product completed",
        });
      }
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
};

/* get Food */
const getFood = async (req, res) => {
  const { foodId } = req.query;
  let lowercaseStr = foodId.toLowerCase();
  let foods = null;

  try {
    if (lowercaseStr === "all") {
      const ALLfoods = await db.foods.findAll({
        attributes: [
          "food_id",
          "food_name",
          "price",
          "image",
          "quantity",
          "category_id",
        ],
      });

      return res.status(200).json({
        message: "Lấy sản phẩm thành công!",
        data: ALLfoods,
      });
    } else {
      foods = await db.foods.findOne({
        where: { food_id: foodId },
      });
    }

    if (!foods) {
      return res.status(404).json({ message: "Không tìm thấy sản phẩm!" });
    } else {
      return res.status(200).json({
        code: 0,
        message: "Get Course completed",
        data: foods,
      });
    }
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "Lỗi server!" });
  }
};

/* deleteFoodById */
const deleteFoodById = async (req, res) => {
  // try {
  //   const paramIdFood = req.params.foodId;
  //   const productFood = await Foods.findOne(paramIdFood);
  //   if (!productFood) {
  //     res.status(404).json({ message: "Không tìm thấy thức ăn!" });
  //   } else {
  //     await productFood.destroy();
  //     res.status(200).json({ message: "Xoá thức ăn thành công!" });
  //   }
  // } catch (err) {
  //   console.error(err);
  //   res.status(500).json({ message: "Server error" });
  // }
};

// /* Lấy các danh mục thức ăn  */
// const getCateProduct = (req, res) => {
//   CategoryFood.findAll({
//     attributes: ["categoryId", "cateName", "cateImage"],
//   })
//     .then((category) => {
//       res.json(category);
//     })
//     .catch((err) => {
//       console.log(err);
//     });
// };

/* Tạo và thêm thức ăn vào danh mục */
const postAddFoodCate = async (req, res) => {
  const infoFood = req.body;
  const typeCate = req.query.type;

  const findCateFood = await CategoryFood.findOne({
    where: { cateName: `${typeCate}` },
  });

  if (findCateFood) {
    try {
      const newFood = await Foods.create({
        FoodName: infoFood.FoodName,
        description: infoFood.description,
        cateId: findCateFood.categoryId,
        price: infoFood.price,
        quantity: infoFood.quantity,
      });

      res.json({ newFood });
    } catch (error) {
      console.log(error);
    }
  } else {
    res.json({
      message: "Không tìm thấy Category của loại thức ăn này!",
    });
  }
  // CategoryFood.findOne({ where: { cateName: `${typeCate}` } }).then(category => {
  //     Foods.create({
  //         FoodName: infoFood.FoodName,
  //         description: infoFood.description,
  //         cateId: category.categoryId,
  //         price: infoFood.price,
  //         quantity: infoFood.quantity
  //     }).then(food => {
  //         console.log(food);
  //     }).catch(err => {
  //         console.error('Unable to create food:', err);
  //     });
  // }).catch(err => {
  //     console.error('Unable to find category:', err);
  // });
};

/* lấy tất cả sản phâm theo danh mục */
const getAllCateFood = async (req, res) => {
  try {
    const queryTypeCaye = req.query.type;
    const limitFood = req.query.limit || "15";

    if (queryTypeCaye) {
      const FoodCategory = await CategoryFood.findOne({
        where: { cateName: `${queryTypeCaye}` },
      });

      if (FoodCategory) {
        console.log(limitFood);
        const allFood = await Foods.findAll({
          where: { cateId: FoodCategory.categoryId },
          limit: parseInt(limitFood),
        });

        res.json({
          message: "Lấy các món ăn thành công!",
          data: allFood,
        });
      } else {
        res.json({
          error: "Không tim thấy sản phẩm!",
          data: [],
        });
      }
    }
  } catch (error) {
    console.log(error, "lỗi server");
  }
};

/* hàm này  sẽ trả về true or false nếu nó thành công hoặc là thất bại */
async function checkCreateUploadsFolder(uploadFolder) {
  try {
    await fs.statAsync(uploadFolder);
  } catch (error) {
    if (error && error.code == "ENOENT") {
      try {
        await fs.mkdirAsync(uploadFolder);
      } catch (error) {
        console.error("Lỗi tạo folder upload");
        return false;
      }
    } else {
      console.log("Lỗi đọc folder upload");
      return false;
    }
  }
  return true;
}

/* post ảnh food */
const postImageFood = async (req, res) => {};

module.exports = {
  createFood,
  getFood,
  deleteFoodById,
  postAddFoodCate,
  getAllCateFood,
  postImageFood,
};
