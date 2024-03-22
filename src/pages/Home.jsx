import React from "react";
import Sidenav from "../Sidenav";
import Box from "@mui/material/Box";

import Grid from "@mui/material/Grid";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import BarAnimation from "./graph/Bar";
import Product from "../components/product";

import ProgressComponent from "./graph/Meter";

import SimpleLineChart from "./graph/line";

import CommunityFeedback from "./graph/feedback";

import "../style/home.css";

export default function Home() {
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
                      Last Year <ArrowDropDownIcon></ArrowDropDownIcon>
                    </span>{" "}
                  </button>
                  <div class="dropdown-content">
                    <option value="option1">Option 1</option>
                    <option value="option2">Option 2</option>
                    <option value="option3">Option 3</option>
                  </div>
                </div>
              </div>

              <div class="cards-container">
                <div class="cards">
                  <p>Purchases</p>
                  <div class="price">4,294</div>
                </div>

                <div class="cards">
                  <p>Revenue</p>
                  <div class="price">$322k</div>
                </div>

                <div class="cards">
                  <p>Refunds</p>
                  <div class="price">$8,2k</div>
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
      <div style={{marginTop:"-45px", color:"black"}}><p>You're good!</p></div>
         <div><p>your sale performance score is better than 80% other users</p></div> 
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
