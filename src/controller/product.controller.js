const product = require('../model/product.model');

const createProduct = (req, res) =>{
    let newProduct = new product ({
        product_name: req.body.product_name,
        description: req.body.description,
        price: req.body.price,
        image: req.body.image
    })
    newProduct.save()
    .then( result =>{
        return res.status(201).json({
            success: true,
            message: `created successfully`,
            result
        })
    }).catch(error =>{
        return res.ststus(500).json({
            success: false,
            message: `error in creating`
        })
    })
}

const updateProduct = (req, res) =>{
    let newProduct = {
        product_name: req.body.product_name,
        description: req.body.description,
        price: req.body.price,
        image: req.body.image
    }
    product.findOneAndUpdate({_id: req.params.id},newProduct,{new: true})
    .then(result =>{
        res.status(200).json({
            success: true,
            message: `Successfully updated`,
            result
        })
    }).catch (error =>{
        res.status(500).json({
            success: false,
            message: `error in updating`,
            error
        })
    })
}

const getAllProducts = async(req, res) =>{
    product.find()
    .then(result =>{
        res.json({
            success: true,
            message: ` getting all products`,
            result
        })
    }).catch (error =>{
        res.json({
            success: false,
            message:`An error occured`,
            error
        })
    })
}

const deleteProduct = async(req, res) =>{
    product.findByIdAndDelete({_id: req.params.id})
    .then(result =>{
        res.status(200).json({
            success: true,
            message: `Successfully Deleted`,
            result
        })
    }).catch (error =>{
        res.status(500).json({
            success: false,
            message: `error in Deleting`,
            error
        })
    })
}

module.exports = {
    createProduct,
    updateProduct,
    getAllProducts,
    deleteProduct
}