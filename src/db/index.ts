import mongoose from 'mongoose'

const MONGODB_URI =
  'mongodb+srv://rborges98:OaK8jk2TWGsNggp3@tcc.mxovt.mongodb.net/tcc_database?retryWrites=true&w=majority&appName=tcc'

if (!MONGODB_URI) {
  throw new Error('Por favor, defina a variável de ambiente MONGODB_URI')
}

async function connectToDatabase() {
  return await mongoose.connect(MONGODB_URI)
}

export default connectToDatabase
