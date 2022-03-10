const db = require('../config/database');
const Gig = require('../model/gigModel');

const getAllGigs = (req, res) => {
  Gig.findAll()
    .then((gig) => {
      res.status(200).json(gig);
    })
    .catch((err) => {
      console.log(`err ; ${err}`);
    });
};
const addNewGig = (req, res) => {
  let { gigTitle, technologiesReq, budget, gigDescription, contact_email } =
    req.body;
  Gig.create({
    title: gigTitle,
    technologies: technologiesReq,
    budget: budget,
    contact_email: contact_email,
    description: gigDescription,
  })
    .then((gig) => {
      res.status(200);
    })
    .catch((err) => console.log(err));
};

module.exports = {
  getAllGigs,
  addNewGig,
};
