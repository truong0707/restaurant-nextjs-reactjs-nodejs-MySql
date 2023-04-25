const { Products } = require("../models/ProductModel");
const db = require('../models/index')



const createCategoty = async (req, res) => {
    const { category_name, category_image } = req.body;

    console.log(req.body)

    if (!category_name) {
        return res.status(400).json({ message: "Vui lòng nhập tên danh mục sản phẩm!" });
    } else if (!category_image) {
        return res.status(400).json({ message: "Vui lòng ảnh danh mục sản phẩm!" });
    }

    /* check category exists */
    const categoryExist = await db.categorys.findOne({
        where: {
            category_name: category_name,
        },
    });

    if (categoryExist) {
        return res.status(400).json({ message: "Category này đã có!" });
    } else {
        /* create category */
        try {
            await db.categorys.create({
                category_name: category_name,
                category_image: category_image,
            });

            res.status(200).json({ message: "Tạo tài danh mục công!" });
        } catch (error) {
            console.log("err", error);
            res.status(500).json({ message: "Lỗi server!" })
        }
    }
}

const getCategoty = async (req, res) => {
    try {
        const category = await db.categorys.findAll({
            attributes: ['category_id', 'category_name', 'category_image']
        });
        res.status(200).json({
            message: "Lấy danh mục thành công!",
            data: category
        });
    } catch (err) {
        console.log(err);
        res.status(500).json({ message: "Lỗi server!" })
    }
}

const deleteCategory = async (req, res) => {
    try {
     
    } catch (err) {
        console.log(err);
        res.status(500).json({ message: "Lỗi server!" })
    }
}

module.exports = {
    createCategoty,
    getCategoty,
    deleteCategory
}