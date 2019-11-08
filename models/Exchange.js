var mongoose = require('mongoose')
const ExchangeSchema = mongoose.Schema(
    {   username: String,
        contact:String,
        name: String,
        author: String,
        genre: String, 
        description: String,
        photo: String,
        available: String,
        exchangegenre:String,
        imagename: String,
         createdDate: {
              type: Date,
               default: Date.now
             } 
            });
 module.exports = mongoose.model('Exchange', ExchangeSchema);