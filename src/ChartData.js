import React, { useState, useEffect } from "react";

import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";

const ChartData = ({ detail, acceptDays ,bookingDays }) => {

  const link1 = "http://yd-dev-elb-841236067.ap-south-1.elb.amazonaws.com/api/store-manager/dashboard/adg";
  const link2 = "http://yd-dev-elb-841236067.ap-south-1.elb.amazonaws.com/api/store-manager/dashboard/nsg";

  const [graph1, setgraph1] = useState([]);
  const [graph2 , setgraph2] = useState([]);


  useEffect(() => {
    const token = localStorage.getItem("Token");
    const loadData = async () => {
      let response = await fetch(
        detail === "AcceptDenied"
          ? `${link1}/${acceptDays}`
          : `${link2}/${bookingDays}`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
            Authorization: token,
          },
        }
      );

      console.log(response);
      const res = await response.json();
      if(detail === "AcceptDenied"){
      setgraph1(res);
    }
      else{
        setgraph2(res);
      }
    };

    loadData();
  }, [acceptDays, bookingDays, detail]);

  // const data = graph1;
  const [data, setdata] = useState(null);
  const [data2 , setdata2] = useState(null);


  useEffect(() => {
    graph1.map((x) => {
      let now = new Date(x.date);
      if (x.date) {
        let month = now.getMonth() + 1;
        let dt = now.getDate();

        x.date = `${dt}/${month}`;
        return x;
      }
    });
    setdata(graph1);
    // console.log(data);
  }, [graph1 ,]);

  useEffect(() => {
    graph2.map((x) => {
      let now = new Date(x.date);
      if (x.date) {
        let month = now.getMonth() + 1;
        let dt = now.getDate();

        x.date = `${dt}/${month}`;
        return x;
      }
    });
    setdata2(graph2);
  }, [graph2]);

  

  if (detail === "AcceptDenied") {
    return (
      <>
        <BarChart
          width={1250}
          height={500}
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <Bar dataKey="acceptedOrders" fill="#6AFF6A" />
          <Bar dataKey="declinedOrders" fill="#FF8383" />
          <CartesianGrid strokeDasharray="0 3" />
          <XAxis
            dataKey="date"
            style={{
              color: "#777777",
              fontWeight: "500",
              font: "normal normal normal 20px/24px Museo Sans 500",
            }}
          />
          <YAxis
            style={{
              color: "#777777",
              fontWeight: "500",
              font: "normal normal normal 20px/24px Museo Sans 500",
            }}
          />
          <Tooltip />
          <Legend
            wrapperStyle={{
              top: -50,
              right: 60,
            }}
          />
        </BarChart>
      </>
    );
  } 
  else {
    return (
      <>
        <BarChart
          width={1250}
          height={500}
          data={data2}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <Bar dataKey="scheduledOrders" fill="#6AFF6A" />
          <Bar dataKey="nowOrders" fill="#FF8383" />
          <CartesianGrid strokeDasharray="0 3" />
          <XAxis
            dataKey="date"
            style={{
              color: "#777777",
              fontWeight: "500",
              font: "normal normal normal 20px/24px Museo Sans 500",
            }}
          />
          <YAxis
            style={{
              color: "#777777",
              fontWeight: "500",
              font: "normal normal normal 20px/24px Museo Sans 500",
            }}
          />
          <Tooltip />
          <Legend
            wrapperStyle={{
              top: -50,
              right: 60,
            }}
          />
        </BarChart>
      </>
    );
  }
};

export default ChartData;
