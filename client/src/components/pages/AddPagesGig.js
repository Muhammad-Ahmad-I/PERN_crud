import React, { useState, useEffect } from 'react';
import { serverURL } from '../../environment';
import axios from 'axios';

const AddPagesGig = () => {
  const [gigTitle, setGigTitle] = useState('');
  const [technologiesReq, setTechnologiesReq] = useState('');
  const [budget, setBudget] = useState('');
  const [gigDescription, setGigDescription] = useState('');
  const [contact_email, setContact_email] = useState('');

  const CreateGigHandler = (e) => {
    e.preventDefault();
    RegisterNewGigHandler();
  };
  const RegisterNewGigHandler = async () => {
    await axios
      .post(`${serverURL}/gigs/add`, {
        gigTitle,
        technologiesReq,
        budget,
        gigDescription,
        contact_email,
      })
      .then((res) => {
        console.log('NewGigCreated');
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <section id="add" class="container">
      <div class="form-wrap">
        <h1>Add A Gig</h1>
        <p>
          Your contact email will be shared with registered users to apply to
          your gig
        </p>
        <form onSubmit={(e) => CreateGigHandler(e)}>
          <div class="input-group">
            <label for="title">Gig Title</label>
            <input
              type="text"
              name="title"
              id="title"
              class="input-box"
              placeholder="eg. Small Wordpress website, React developer"
              maxlength="100"
              onChange={(e) => {
                setGigTitle(e.target.value);
              }}
              required
            />
          </div>
          <div class="input-group">
            <label for="technologies">Technologies Needed</label>
            <input
              type="text"
              name="technologies"
              id="technologies"
              class="input-box"
              placeholder="eg. javascript, react, PHP"
              maxlength="100"
              onChange={(e) => setTechnologiesReq(e.target.value)}
            />
          </div>
          <div class="input-group">
            <label for="budget">Budget (Leave blank for unknown)</label>
            <input
              type="number"
              name="budget"
              id="budget"
              class="input-box"
              placeholder="eg. 500, 5000, 10000"
              onChange={(e) => setBudget(e.target.value)}
            />
          </div>
          <div class="input-group">
            <label for="description">Gig Description</label>
            <textarea
              name="description"
              id="description"
              class="input-box"
              placeholder="Describe the details of the gig"
              rows="10"
              required
              onChange={(e) => setGigDescription(e.target.value)}
            ></textarea>
          </div>
          <div class="input-group">
            <label for="budget">Contact Email</label>
            <input
              type="email"
              name="contact_email"
              id="contactemail"
              class="input-box"
              placeholder="Enter an email"
              onChange={(e) => setContact_email(e.target.value)}
              required
            />
          </div>
          <input type="submit" value="Add Gig" class="btn btn-reverse" />
        </form>
      </div>
    </section>
  );
};

export default AddPagesGig;
