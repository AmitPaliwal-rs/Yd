import React, { useState } from "react";
import Navbar from "./Navbar";
import { Paper, Tab, Tabs } from "@mui/material";
import UserData from "./UserData";

const PersonData = () => {
  const [userChoice, setUserChoice] = useState("Cart");

  const onClickCart = () => {
    setUserChoice("Cart");
  };

  const onClickDelivery = () => {
    setUserChoice("Delivery");
  };
  const onClickUser = () => {
    setUserChoice("User");
  };

  const [value, setValue] = useState(0);

  const handleTabs = (e, val) => {
    console.log(e);
    setValue(val);
  };

  return (
    <React.Fragment>
      <Navbar />
      <Paper
        elevation={10}
        style={{
          minHeight: "100vh",
          width: "100%",
        }}
      >
        <Paper
          elevation={1}
          style={{
            boxSizing: "border-box",
            width: "100%",
            minHeight: "500px",
            backgroundColor: "white",
            padding: "0px 50px 0px 50px",
          }}
        >
          <Paper
            elevation={0}
            style={{
              backgroundColor: "white",
              display: "flex",
              justifyContent: "space-between",
              padding: "5px 50px 5px 50px",
              fontSize: "22px",
              color: "#777777",
            }}
          >
            <p>Back</p>
            <p style={{ color: "#F88A12" }}>+ Add New Cart Person</p>
          </Paper>

          <Paper elevation={1}>
            <Tabs value={value} onChange={handleTabs} style={{
              width: "100%",
            }} >
              <Tab label="Cart Person Details" />
              <Tab label="Delivery Boy" />
              <Tab label="User" />
            </Tabs>
            <TabPanel value={value} index={0} onClick={onClickCart}>
              <Paper
                elevation={0}
                style={{
                  minHeight: "110vh",
                }}
              >
                <UserData userChoice={userChoice} />
              </Paper>
            </TabPanel>
            <TabPanel value={value} index={1} onClick={onClickDelivery} >
              <Paper
                elevation={0}
                style={{
                  minHeight: "110vh",
                }}
              >
                <UserData userChoice={userChoice} />
              </Paper>
            </TabPanel>
            <TabPanel value={value} index={2} onClick={onClickUser} >
              <Paper
                elevation={0}
                style={{
                  minHeight: "110vh",
                }}
              >
                <UserData userChoice={userChoice} />
              </Paper>
            </TabPanel>
          </Paper>
        </Paper>
      </Paper>
    </React.Fragment>
  );
};

function TabPanel(props) {
  const { children, value, index } = props;
  return <div>{value === index && <h1>{children}</h1>}</div>;
}

export default PersonData;
