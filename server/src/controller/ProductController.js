const multer = require("multer")
const { Products } = require("../models/ProductModel");
const path = require('path')


const addProduct = async (req, res) =>{
    let info = {
        image: req.file.path,
        name: req.body.name,
        published: req.body.published ? req.body.published : false
    }

    const product = await Products.create(info)
    res.status(200).send(product)
    console.log(product)
} 

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, '../../../../project-food/server/src/Images');
    },
    filename: (req, file, cb) => {
        cb(null, Date.now() + path.extname(file.originalname));
    }
});

const upload = multer({
    storage: storage,
    limits: { fileSize: '1000000' },
    fileFilter: (req, file, cb) => {
        const fileTypes = /jpeg|jpg|png|gif/
        const mimType = fileTypes.test(file.mimetype);
        const extname = fileTypes.test(path.extname(file.originalname));

        if (mimType && extname) {
            return cb(null, true)
        }
        cb('Give proper files formate to upload');
    }
}).single('image')/* .array('image', 3) */

const postImage = (req, res) => {
    res.send("ok")
}

module.exports = {
    postImage,
    upload,
    addProduct
}