const mongoose = require('mongoose')

const TodoSchema = new mongoose.Schema({
  date: {
    type: Date,
    required: true,
  },
  todo: {
    type: String,
    required: true,
  },
  desc: {
    type: String,
    required: true,
  },
  status: {
    type: String,
    default: 'high',
    enum: ['high', 'medium', 'low'],
  },
  completed: {
    type: Boolean,
    required: true,
  },
  userId: {
    type: String,
    required: true
  }
})

module.exports = mongoose.model('Todo', TodoSchema)
