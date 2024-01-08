const mongoose = require("mongoose")
const Schema = mongoose.Schema

const UserSchema = new Schema({
  name: { 
    type: String, 
    required:true 
  },
  username: { 
    type: String, 
    required:true 
  },
  email: { 
    type: String, unique:true 
  },
  date: { 
    type: Date, default: Date.now 
  },
  avatar: { 
    type: String, 
    required:true 
  },
  background: { 
    type: String, 
    required:true 
  }
});

const User = mongoose.model('User', UserSchema);

module.exports = User 