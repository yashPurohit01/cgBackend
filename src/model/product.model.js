const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    product_name: {type: String},
    description: {type: String},
    price: {type: String},
    image: {type: String},
})

module.exports = mongoose.model('Product', productSchema)