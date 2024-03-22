import React from "react";
import Sidenav from "../Sidenav";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";

import BarAnimation from "./graph/Bar";
import Product from "../components/product";

import ProgressComponent from "./graph/Meter";

import SimpleLineChart from "./graph/line";
import { useState, useEffect } from 'react';


import CommunityFeedback from "./graph/feedback";

import "../style/home.css";

export default function Home() {
  const [purchases, setPurchases] = useState(null);
  const [revenue, setRevenue] = useState(null);
  const [refunds, setRefunds] = useState(null);


  const [title, setTitle] = useState(null);
  const [message, setMessage] = useState(null);
  // const [loading, setLoading] = useState(true);
  
  useEffect(() => {
    const fetchData1 = async () => {
      try {
        // Replace 'trial' and 'assignment123' with your actual username and password
        const response = await fetch('http://3.227.101.169:8020/api/v1/sample_assignment_api_1/', {
          headers: {
            'Authorization': 'Basic ' + btoa('trial:assignment123')
          }
        });
        if (!response.ok) {
          throw new Error('Failed to fetch data');
        }
        const responseData = await response.json();
        setPurchases(responseData.purchases);
        setRevenue(responseData.revenue);
        setRefunds(responseData.refunds);
      } catch (error) {
        console.error('Error fetching data:', error);
      } finally {

      }
    };


    const fetchData2 = async () => {
      try {
        const response = await fetch('http://3.227.101.169:8020/api/v1/sample_assignment_api_3/', {
          headers: {
            'Authorization': 'Basic ' + btoa('trial:assignment123')
          }
        });
        if (!response.ok) {
          throw new Error('Failed to fetch data');
        }
        const responseData = await response.json();
       
        setTitle(responseData.title);
    
        setMessage(responseData.message);
      } catch (error) {
        console.error('Error fetching data:', error);
      } finally {
        
      }
    };


    fetchData1();
    fetchData2();
  }, []); // Empty dependency array ensures this effect runs only once after initial render

  return (
    <div>
      <Box sx={{ display: "flex" }}>
        <Sidenav></Sidenav>

        <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
          <Grid container spacing={1}>
            <Grid item xs={8} class="home-main">
              <div class="head-top">
                <div class="heading">
                  {" "}
                  <h1>Dashbord</h1>
                </div>
                <div class="dropdown">
                  compare to
                  <button class="dropdown-btn">
                    <span>
                      Last Year 
                      
                    </span>{" "}
                  </button>
                  <div class="dropdown-content">
                    <option value="option1">Last Year</option>
                    <option value="option2">Previous Year</option>
                   
                  </div>
                </div>
              </div>

              <div class="cards-container">
                <div class="cards">
                  <p>Purchases</p>
                  <div class="price">{purchases}</div>
                </div>

                <div class="cards">
                  <p>Revenue</p>
                  <div class="price">${revenue}K</div>
                </div>

                <div class="cards">
                  <p>Refunds</p>
                  <div class="price">${refunds}k</div>
                </div>
              </div>

              <div class="graph">
                Comparison
                <BarAnimation></BarAnimation>
              </div>

              <div>
                <Product />
              </div>
            </Grid>

            <Grid item xs={4}>
              <div class="home-section-second">
                <div class="prgressbar">
                  <ProgressComponent></ProgressComponent>
      <div style={{marginTop:"-45px", color:"black"}}><p>{title}</p></div>
         <div><p>{message}</p></div> 
                </div>
              </div>
              
               <div class="home-section-third">
        <p  style={{marginLeft:"40px"}}> Customer by device</p>
           <div style={{marginTop:"-110px"}}>

          <SimpleLineChart></SimpleLineChart>
          </div>
              </div>

               <div class="home-section-fourth">

<CommunityFeedback></CommunityFeedback>

               </div>

            </Grid>
          </Grid>
        </Box>
      </Box>
    </div>
  );
}
