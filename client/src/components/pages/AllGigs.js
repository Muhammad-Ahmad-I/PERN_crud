import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { serverURL } from '../../environment';

const AllGigs = () => {
  const [apiData, setApiData] = useState([]);

  useEffect(() => {
    const apiData = async () => {
      await axios.get(`${serverURL}/gigs`).then((res) => {
        setApiData(res.data);
      });
    };
    apiData();
  }, []);
  return (
    <section id="gigs" class="container">
      <h1>All Gigs</h1>
      {apiData.map((data) => {
        return (
          <div class="gig">
            <h3>{data.title}</h3>
            <p>{data.description}</p>
            <ul>
              <li>Budget: ${data.budget}</li>
              <li>
                <a href="#" class="btn btn-reverse">
                  Apply Now
                </a>
              </li>
            </ul>
            <div class="tech">
              <small>
                Technologies Needed: <span>{data.technologies}</span>
              </small>
            </div>
          </div>
        );
      })}
    </section>
  );
};

export default AllGigs;
