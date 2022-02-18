import React, { useState} from "react";
import image from "./logo.png";
import image2 from "./svg.png";
import Paper from "@mui/material/Paper";
import { Button, Grid } from "@mui/material";
import { Box } from "@mui/system";
import TextField from "@mui/material/TextField";
import PersonIcon from "@mui/icons-material/Person";
import {Link } from 'react-router-dom';
import {useLocation , useNavigate} from 'react-router-dom'

const LoginPage = () => {

  let location = useLocation();
  const navigate = useNavigate();
  console.log(location);
  
  const paperStyle = {
    height: "100vh",
    width: "100%",
    background:
      "transparent linear-gradient(180deg, rgba(255, 236, 215, 1) 0%, rgba(255, 201, 201, 1) 100%) 0% 0% no-repeat padding-box",
    opacity: "1",
    overflowX: "hidden",
  };
  const image1Style = {
    position: "relative",
    top: "24px",
    left: "100px",
    width: "288px",
    height: "106px",
    background:
      "transparent url('img/Wihite BG horizontal .png') 0% 0% no-repeat padding-box",
    opacity: "1",
  };

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function login() {
    console.log(email, password);
    

    let item = { email, password };
    let result = await fetch(
      "http://yd-dev-elb-841236067.ap-south-1.elb.amazonaws.com/api/sm-login",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(item),
      }
    );
    const auth = await result.json();
    console.log(auth.Authorization);
    localStorage.setItem("Token", auth.Authorization);

    if (auth.Authorization) {
      navigate("/dashboard" , {replace :true});
    }
  }



  return (
    <div>
      <Paper elevation={10} style={paperStyle}>
        {/* header of Logo */}
        <Grid container>
          <Grid item xs={12} md={12} lg={12} xl={12} style={image1Style}>
            <img src={image} />
          </Grid>

          {/* main content */}
          <Grid
            container
            spacing={2}
            style={{
              marginTop: "30px",
              minHeight: "100%",
              padding: "10px 20px 20px 116px",
              height: "80vh",
            }}
          >
            <Grid container xs={8}>
              <Paper
                elevation={0}
                style={{
                  width: "100%",
                  padding: "10px",
                  background:
                    " transparent url('img/Wihite BG horizontal .png') 0% 0% no-repeat padding-box",
                }}
              >
                <img src={image2} style={{ height: "530px", width: "100%" }} />
              </Paper>
            </Grid>
            <Grid container xs={4} style={{ padding: "125px 10px 10px 50px" }}>
              <Paper
                elevation={10}
                style={{
                  height: "400px",
                  width: "80%",
                  padding: "5px 20px 5px 20px",
                  borderRadius: "20px",
                }}
              >
                <h1
                  style={{
                    textAlign: "left",
                    font: "normal normal normal 28px/17px Museo Sans 700",
                    letterSpacing: "0px",
                    color: "rgba(29, 34, 38, 1)",
                    textTransform: "uppercase",
                    opacity: "1",
                  }}
                >
                  LOGIN
                </h1>
                <p
                  style={{
                    textAlign: "left",
                    font: "normal normal normal 18px/17px Museo Sans 100",
                    letterSpacing: "0px",
                    color: "rgba(29, 34, 38, 1)",
                    opacity: "0.6",
                  }}
                >
                  Please login to your account
                </p>
                <Box
                  style={{
                    marginTop: "20px",
                    marginBottom: "20px",
                  }}
                >
                  <TextField
                    id="outlined-basic"
                    label="User ID"
                    variant="outlined"
                    placeholder="enter your user id"
                    onChange={(e) => {
                      setEmail(e.target.value);
                    }}
                    style={{ width: "100%" }}
                  >
                    <PersonIcon />
                  </TextField>
                </Box>
                <Box
                  style={{
                    marginTop: "20px",
                    marginBottom: "20px",
                  }}
                >
                  <TextField
                    id="outlined-password-input"
                    label="Password"
                    type="password"
                    autoComplete="current-password"
                    placeholder="enter your password"
                    onChange={(e) => {
                      setPassword(e.target.value);
                    }}
                    style={{ width: "100%" }}
                  >
                    <PersonIcon />
                  </TextField>
                </Box>
                <Box>
                  <Button
                    variant="contained"
                    onClick={login}
                    style={{
                      width: "100%",
                      height: "50px",
                      background:
                        "transparent linear-gradient(180deg, rgba(248, 138, 18, 1) 0%, rgba(205, 45, 5, 1) 100%) 0% 0% no-repeat padding-box",
                    }}
                  >
                    LOGIN
                      
                    
                  </Button>
                </Box>
                <Box
                  style={{
                    position: "relative",
                    float: "right",
                  }}
                >
                  <p
                    style={{
                      color: "rgba(248, 138, 18, 1)",
                      font: "normal normal normal 14px/17px Museo Sans 500",
                    }}
                  >
                    Forgot Password?
                  </p>
                </Box>
              </Paper>
            </Grid>
          </Grid>
        </Grid>
      </Paper>
    </div>
  );
};

export default LoginPage;

