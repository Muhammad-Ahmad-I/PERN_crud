const db = require('../config/database');
const Gig = require('../model/gigModel');

const getAllGigs = (req, res) => {
  Gig.findAll()
    .then((gig) => {
      console.log(gig);
      res.sendStatus(200);
    })
    .catch((err) => {
      console.log(`err ; ${err}`);
    });
  //   return res.status(200).json('postgress with MVC');
};
const addNewGig = (req, res) => {
  let data = {
    title: 'React Developer',
    technologies: 'HTML,Css,JavaScript,ReactJs',
    budget: 90000,
    contact_email: 'ahmadmuhammad494@gmail.com',
    description:
      'need a two year experience reactjs developer that have a command on hooks,redux e t c',
  };
  let { title, technologies, budget, contact_email, description } = data;
  Gig.create({
    title,
    technologies,
    budget,
    contact_email,
    description,
  })
    .then((gig) => {
      res.redirect('/gigs');
    })
    .catch((err) => console.log(err));
};

module.exports = {
  getAllGigs,
  addNewGig,
};
