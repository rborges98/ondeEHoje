import mongoose from 'mongoose'

const placesSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true
  },
  geo: {
    lat: { type: Number, required: true },
    lon: { type: Number, required: true }
  },
  address: {
    street: { type: String },
    number: { type: String },
    neighborhood: { type: String }
  },
  rating: { type: Number, max: 5 },
  image: { type: String }
})

const Places = mongoose.models.places || mongoose.model('places', placesSchema)

export default Places
