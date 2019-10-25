import mongoose from 'mongoose'

const Project = mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  tasks: {
    type: Array,
    required: false,
  },
})

export default new mongoose.model('Project', Project)
