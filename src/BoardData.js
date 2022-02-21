import React, { useState, useEffect } from "react";
import {
  Card,
  CardContent,
  Paper,
  Typography,
  Grid,
  Button,
  Link,
} from "@mui/material";
import { useNavigate } from "react-router";

const data = [
  {
    id: "cartBoyCount",
    tag: "Total Cart Person",
    number: "12",
    details: true,
    URL: "cart-boy"
  },
  {
    id: "deliveryBoyCount",
    tag: "Total Delivery Boy",
    number: "23",
    details: true,
    URL: ""
  },
  {
    id: "userCount",
    tag: "Total User",
    number: "1234",
    details: true,
    URL: ""
  },
  {
    id: "unassignedOrders",
    tag: "Unassigned Order",
    number: "14",
    details: true,
  },
  {
    id: "totalItems",
    tag: "Total Items",
    number: "45",
    details: true,
  },
  {
    id: "activeUsers",
    tag: "Total Active User",
    number: "768",
    details: false,
  },
  {
    id: "onGoingOrder",
    tag: "Total Ongoing Bookings",
    number: "321",
    details: false,
  },
  {
    id: "bookingForLastWeek",
    tag: "Past Week Bookings",
    number: "170",
    details: false,
  },
  {
    id: "deniedOrder",
    tag: "Denied/Disputed order",
    number: "9999/9999",
    details: true,
  },
  {
    id: "scheduledOrder",
    tag: "Scheduled Order",
    number: "14",
    details: true,
  },
];

const BoardData = ({staff}) => {
  // const [loading , setLoading] = useState(false);
  const [temp, setTemp] = useState([]);
  const [Data, setData] = useState(data);
  const navigate = useNavigate();
  const stafftype = staff;

  useEffect(() => {
    const token = localStorage.getItem("Token");
    const loadData = async () => {
      let response = await fetch(
        "http://yd-dev-elb-841236067.ap-south-1.elb.amazonaws.com/api/store-manager/dashboard/stats",
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
            Authorization: token,
          },
        }
      );
      const res = await response.json();
      setTemp(res);
    };

    loadData();
  }, []);

  useEffect(() => {
    const flag = data.map((item, index) => {
      for (const prop in temp) {
        if (item.id === prop) {
          item.number = temp[prop];
        }
      }
    });
    setData(flag);
  }, [temp]);

  for (const prop in temp) {
    console.log(prop);
  }

  const OnButtonClick = (e, item)=> {
    console.log(item.URL);
    navigate(`/dashboard/persondata/${item.URL}` , {replace :true});
  }

  return (
    <Paper
      elevation={0}
      style={{
        padding: "20px 20px 20px 20px",
        background:
          "transparent linear-gradient(180deg, rgba(255, 236, 215, 1) 0%, rgba(255, 201, 201, 1) 100%) 0% 0% no-repeat padding-box",
      }}
    >
      <Grid container spacing={2}>
        {data.map((item, index) => {
          return (
            <Grid item xs={3} md={2.4}>
              <Card
                style={{
                  borderRadius: "20px",
                  background: "rgba(255, 255, 255, 1)",
                }}
              >
                <CardContent
                  style={{
                    minHeight: "180px",
                    textAlign: "center",
                    width: "85%",
                  }}
                >
                  <div
                    style={{
                      height: "60px",
                    }}
                  >
                    <Typography
                      style={{
                        fontSize: "23px",
                        letterSpacing: "0px",
                        fontWeight: "650",
                        font: "normal normal normal 22px/27px Museo Sans 700",
                        color: "rgba(29, 29, 29, 1)",
                      }}
                    >
                      {item.tag}
                    </Typography>
                  </div>

                  <div
                    style={{
                      height: "35px",
                      marginBottom: "30px",
                    }}
                  >
                    <Typography
                      style={{
                        color: "rgba(248, 138, 18, 1)",
                        font: "normal normal normal 70px/84px Museo Sans 500",
                        fontSize: "45px",
                        textAlign: "center",
                        marginBottom: "10px",
                      }}
                    >
                      {item.number}
                    </Typography>
                  </div>
                </CardContent>
              </Card>
              {item.details ? (
                
                <Button value={item.id} onClick={(e)=>{OnButtonClick(e, item)}}
                  variant="contained"
                  style={{
                    position: "realtive",
                    top: "-49px",
                    width: "100%",
                    height: "50px",
                    borderRadius: "0px 0px 20px 20px",
                    background:
                      "transparent linear-gradient(180deg, rgba(248, 138, 18, 1) 0%, rgba(205, 45, 5, 1) 100%) 0% 0% no-repeat padding-box",
                  }}
                >
                  <Link to={`/dashboard/persondata/${staff}`} >
                  View Details
                  </Link>
                </Button>
                
              ) : (
                ""
              )}
            </Grid>
          );
        })}
      </Grid>
    </Paper>
  );
};

export default BoardData;
