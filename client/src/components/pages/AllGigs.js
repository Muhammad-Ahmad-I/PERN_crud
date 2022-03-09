import React from 'react';

const AllGigs = () => {
  return (
    <section id="gigs" class="container">
      <h1>All Gigs</h1>
      <div class="gig">
        <h3>Looking for a react developer</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero
          aspernatur tempora nisi quibusdam doloribus adipisci cumque quidem
          perferendis. Iusto, natus!
        </p>
        <ul>
          <li>Budget: $10,000</li>
          <li>
            <a href="#" class="btn btn-reverse">
              Apply Now
            </a>
          </li>
        </ul>
        <div class="tech">
          <small>
            Technologies Needed: <span>react, redux, javascript</span>
          </small>
        </div>
      </div>

      <div class="gig">
        <h3>Wordpress website needed</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero
          aspernatur tempora nisi quibusdam doloribus adipisci cumque quidem
          perferendis. Iusto, natus!
        </p>
        <ul>
          <li>Budget: $2,000</li>
          <li>
            <a href="#" class="btn btn-reverse">
              Apply Now
            </a>
          </li>
        </ul>
        <div class="tech">
          <small>
            Technologies Needed: <span>wordpress, php, html, css</span>
          </small>
        </div>
      </div>

      <div class="gig">
        <h3>Flutter mobile app</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero
          aspernatur tempora nisi quibusdam doloribus adipisci cumque quidem
          perferendis. Iusto, natus!
        </p>
        <ul>
          <li>Budget: $5,000</li>
          <li>
            <a href="#" class="btn btn-reverse">
              Apply Now
            </a>
          </li>
        </ul>
        <div class="tech">
          <small>
            Technologies Needed: <span>flutter, javascript, android</span>
          </small>
        </div>
      </div>
    </section>
  );
};

export default AllGigs;
