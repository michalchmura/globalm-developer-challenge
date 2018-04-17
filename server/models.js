import Mongoose from 'mongoose';
Mongoose.Promise = require('bluebird');

let CandidateSchema  = new Mongoose.Schema({
  fullname: { type: String, trim: true },
  firstname: { type: String, trim: true },
  lastname: { type: String, trim: true },
  email: { type: String, trim: true, index: true, sparse: true, trim: true },
  avatar_path: { type: String, trim: true },
  phone_mobile: String,
  location: String,
  country: String,
  locations_interested_in: [String],
  countries_interested_in: [String],
  skills: [String],
  github_profile: Object,
  linkedin_profile: Object,
});

let db = {};
db.Candidate = Mongoose.model('Candidate', CandidateSchema);

export default db;