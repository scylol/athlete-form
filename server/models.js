const mongoose = require('mongoose');

const athleteSchema = mongoose.Schema({
  name: { type: String, required: true },
  sports: { type: String, required: true },
  nationality: { type: String, required: true },
  gender: { type: String, required: true },
  dateOfBirth: { type: String, required: true },
  description: { type: String },
  location: { type: String },
  team: { type: String },
  instagram: { type: String },
  twitter: { type: String },
  facebook: { type: String }
});

athleteSchema.methods.apiRepr = function() {
  return {
    name: this.name,
    sports: this.sports,
    nationality: this.nationality,
    gender: this.gender,
    dateOfBirth: this.dateOfBirth,
    description: this.description,
    location: this.location,
    team: this.team,
    instagram: this.instagram,
    twitter: this.twitter,
    facebook: this.facebook
  };
};

const Athlete = mongoose.model('Athlete', athleteSchema);

module.exports = { Athlete };
