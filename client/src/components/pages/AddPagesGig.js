import React from 'react';

const AddPagesGig = () => {
  return (
    <section id="add" class="container">
      <div class="form-wrap">
        <h1>Add A Gig</h1>
        <p>
          Your contact email will be shared with registered users to apply to
          your gig
        </p>
        <form>
          <div class="input-group">
            <label for="title">Gig Title</label>
            <input
              type="text"
              name="title"
              id="title"
              class="input-box"
              placeholder="eg. Small Wordpress website, React developer"
              maxlength="100"
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
