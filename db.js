const mongoose = require('mongoose');
const server = '127.0.0.1:27017'; // REPLACE WITH YOUR DB SERVER
const database = 'myDB';      // REPLACE WITH YOUR DB NAME
class Database {
  constructor() {
    this.connect()
    
  }
connect() {
     mongoose.connect(`mongodb://${server}/${database}`)
       .then(() => {
         console.log('Database connection successfuly')
       })
       .catch(err => {
         console.error('Database connection error')
       })
       
  }
}
module.exports = new Database()


