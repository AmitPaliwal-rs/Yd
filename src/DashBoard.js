import {
  Paper,
  Typography,
  Select,
  MenuItem,
} from "@mui/material";
import React, { useState } from "react";
import BoardData from "./BoardData";
import ChartData from "./ChartData";
import Navbar from "./Navbar";

const DashBoard = () => {
  const [city, setCity] = useState(2);
  const [days, setDays] = useState(14);
  const [bcity , setBCity] = useState(2);
  const [bdays , setBDays] = useState(14);

  const onSelectCity = (e) => {
    let val = e.target.value;
    setCity(val);
  };

  const onSelectDay = (e) => {
    let day = e.target.value;
    setDays(day);
  };

  const onSelectBCity = (e) => {
    let val = e.target.value;
    setBCity(val);
  };

  const onSelectBDay = (e) => {
    let day = e.target.value;
    setBDays(day);
  };

  


  return (
    <React.Fragment>
      <Paper
        elevation={1}
        style={{
          overflowX: "hidden",
        }}
      >
        <Navbar />
        {/* navbar end */}

        {/* data value rendering from BoardData */}

        <Paper
          elevation={1}
          style={{
            margin: "50px 50px 50px 50px",
            padding: "10px 30px 0px 30px",
            background:
              "transparent linear-gradient(180deg, rgba(255, 236, 215, 1) 0%, rgba(255, 201, 201, 1) 100%) 0% 0% no-repeat padding-box",
            border: "1px solid #F88A12",
            borderRadius: "15px",
          }}
        >
          <BoardData />
        </Paper>

        {/* Accept and Denied graph */}

        <Paper
          elevation={1}
          style={{
            width: "93%",
            minHeigh: "100vh",
            backgroundColor: "white",
            display: "flex",
            justifyContent: "center",
            margin: "0px 0px 10px 50px",
            borderRadius: "15px",
          }}
        >
          <Paper
            elevation={1}
            style={{
              width: "100%",
              border: "2px solid #00000029",
              borderRadius: "15px",
              padding: "20px 0 0 0 ",
            }}
          >
            <Typography
              style={{
                fontSize: "25px",
                marginLeft: "20px",
                color: "#777777",
                fontWeight: "500",
              }}
            >
              Accepted and denied bookings graph
            </Typography>

            <Paper
              elevation={0}
              style={{
                backgroundColor: "white",
                display: "flex",
                padding: "20px",
                margin: "5px 0px 5px 20px",
              }}
            >
              <Select value={city} displayEmpty onChange={onSelectCity}>
                <MenuItem value="">Select the City</MenuItem>
                <MenuItem value={1}>Delhi </MenuItem>
                <MenuItem value={2}>Mumbai</MenuItem>
                <MenuItem value={3}>Kolkata</MenuItem>
                <MenuItem value={4}>Uttarakhand</MenuItem>
                <MenuItem value={5}>Noida</MenuItem>
              </Select>

              {/* days */}

              <Select value={days} displayEmpty onChange={onSelectDay}>
                <MenuItem value="">Select the Days</MenuItem>
                <MenuItem value={7}>7 days</MenuItem>
                <MenuItem value={14}>14 days</MenuItem>
                <MenuItem value={21}>21 days</MenuItem>
                <MenuItem value={30}>30 days</MenuItem>
                <MenuItem value={60}>60 days</MenuItem>
              </Select>
            </Paper>
            <ChartData detail="AcceptDenied" acceptDays={days} />
          </Paper>
        </Paper>

        {/* Bookings (Now vs Scheduled) */}

        <Paper
          elevation={1}
          style={{
            width: "93%",
            minHeigh: "100vh",
            backgroundColor: "white",
            display: "flex",
            justifyContent: "center",
            margin: "0px 0px 10px 50px",
            borderRadius: "15px",
          }}
        >
          <Paper
            elevation={1}
            style={{
              width: "100%",
              border: "2px solid #00000029",
              borderRadius: "15px",
              padding: "20px 0 0 0 ",
            }}
          >
            <Typography
              style={{
                fontSize: "25px",
                marginLeft: "20px",
                color: "#777777",
                fontWeight: "500",
              }}
            >
              Bookings (Now vs Scheduled)
            </Typography>

            <Paper
              elevation={0}
              style={{
                backgroundColor: "white",
                display: "flex",
                padding: "20px",
                margin: "5px 0px 5px 20px",
              }}
            >
              <Select value={bcity} displayEmpty onChange={onSelectBCity}>
                <MenuItem value="">Select the City</MenuItem>
                <MenuItem value={1}>Delhi </MenuItem>
                <MenuItem value={2}>Mumbai</MenuItem>
                <MenuItem value={3}>Kolkata</MenuItem>
                <MenuItem value={4}>Uttarakhand</MenuItem>
                <MenuItem value={5}>Noida</MenuItem>
              </Select>

              {/* days */}

              <Select value={bdays} displayEmpty onChange={onSelectBDay}>
                <MenuItem value="">Select the Days</MenuItem>
                <MenuItem value={7}>7 days</MenuItem>
                <MenuItem value={14}>14 days</MenuItem>
                <MenuItem value={21}>21 days</MenuItem>
                <MenuItem value={30}>30 days</MenuItem>
                <MenuItem value={60}>60 days</MenuItem>
              </Select>
            </Paper>
            <ChartData detail="Booking"  bookingDays= {bdays} />
          </Paper>
        </Paper>
      </Paper>
    </React.Fragment>
  );
};

export default DashBoard;
