var mongoose = require('mongoose');

var productSchema = mongoose.Schema({
    product_name: {
        type: String,
        required: true
    },
    product_description: {
        type: String,
        required: true
    },
    product_price: {
        type: Number,
        required: true
    },
    updated_at:{
        type: Date,
        default: Date.now
    }

})

module.exports = mongoose.model('Product',productSchema);