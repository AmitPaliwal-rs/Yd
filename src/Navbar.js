import { AppBar, Container, IconButton } from "@mui/material";
import {Link } from "react-router-dom";
import image1 from "./logo.png";
import PersonAddAltIcon from '@mui/icons-material/PersonAddAlt';
import LogoutIcon from '@mui/icons-material/Logout';
import { useLocation , useNavigate } from "react-router";

const Navbar = () => {

  let location = useLocation();
  const navigate = useNavigate();
  console.log(location);

  const token = localStorage.getItem("Token");
  const LogOut = () => {
    console.log(token);
    localStorage.setItem("Token","");
    console.log(token);
    navigate("/" , {replace :true});
  }

  return (
    <AppBar position="static" style={{
        background: "rgba(248, 138, 18, 1) 0% 0% no-repeat padding-box"
    }}>
      <Container maxWidth="xl" style={{ display: "flex" }}>
        <img src={image1} style={{ height: "80px", width: "200px" }} />
        <p
          style={{
              fontSize: "25px",
            font: "normal normal normal 24px/17px Museo Sans 700",
            color: "rgba(255, 255, 255, 1)",
            opacity: "1",
            paddingLeft: "20px",
            fontWeight: "700",
          }}
        >
          DashBoard
        </p>
        
        <Container style={{
            display: "flex",
            justifyContent: "flex-end",
            padding: " 25px 40px 0px 0px ",
        }}>

        <IconButton>
        <Link to='/dashboard/persondata' >
          <PersonAddAltIcon style={{
                fontSize: "35px",
                marginRight: "30px",
                color: "white",
                
            }} />
          </Link>
        </IconButton>
          
            
            <IconButton onClick={LogOut}>
            <LogoutIcon style={{
              position: "relative",
                fontSize: "35px",
                marginLeft: "10px",
                top: "-2px",
                color: "white"
            }} />
            </IconButton>

            
        </Container>
      </Container>
    </AppBar>
  );
};

export default Navbar;
