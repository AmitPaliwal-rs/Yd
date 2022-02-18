import { Paper } from "@mui/material";
import React from "react";

const Cart = [
  {
    Name: "Rakesh",
    Contact: "8279991133",
    RDate: "04/05/2021",
    TotalOrder: "30",
    Denied: "03",
    Cancle: "02",
    Total: "Rs.3012",
    Average: "4.0",
    Flagged: "12",
  },
  {
    Name: "Rakesh",
    Contact: "8279991133",
    RDate: "04/05/2021",
    TotalOrder: "30",
    Denied: "03",
    Cancle: "02",
    Total: "Rs.3012",
    Average: "4.0",
    Flagged: "12",
  },
  {
    Name: "Rakesh",
    Contact: "8279991133",
    RDate: "04/05/2021",
    TotalOrder: "30",
    Denied: "03",
    Cancle: "02",
    Total: "Rs.3012",
    Average: "4.0",
    Flagged: "12",
  },
  {
    Name: "Rakesh",
    Contact: "8279991133",
    RDate: "04/05/2021",
    TotalOrder: "30",
    Denied: "03",
    Cancle: "02",
    Total: "Rs.3012",
    Average: "4.0",
    Flagged: "12",
  },
  {
    Name: "Rakesh",
    Contact: "8279991133",
    RDate: "04/05/2021",
    TotalOrder: "30",
    Denied: "03",
    Cancle: "02",
    Total: "Rs.3012",
    Average: "4.0",
    Flagged: "12",
  },
  {
    Name: "Rakesh",
    Contact: "8279991133",
    RDate: "04/05/2021",
    TotalOrder: "30",
    Denied: "03",
    Cancle: "02",
    Total: "Rs.3012",
    Average: "4.0",
    Flagged: "12",
  },
  {
    Name: "Rakesh",
    Contact: "8279991133",
    RDate: "04/05/2021",
    TotalOrder: "30",
    Denied: "03",
    Cancle: "02",
    Total: "Rs.3012",
    Average: "4.0",
    Flagged: "12",
  },
  {
    Name: "Rakesh",
    Contact: "8279991133",
    RDate: "04/05/2021",
    TotalOrder: "30",
    Denied: "03",
    Cancle: "02",
    Total: "Rs.3012",
    Average: "4.0",
    Flagged: "12",
  },
  {
    Name: "Rakesh",
    Contact: "8279991133",
    RDate: "04/05/2021",
    TotalOrder: "30",
    Denied: "03",
    Cancle: "02",
    Total: "Rs.3012",
    Average: "4.0",
    Flagged: "12",
  },
  {
    Name: "Rakesh",
    Contact: "8279991133",
    RDate: "04/05/2021",
    TotalOrder: "30",
    Denied: "03",
    Cancle: "02",
    Total: "Rs.3012",
    Average: "4.0",
    Flagged: "12",
  },
  {
    Name: "Rakesh",
    Contact: "8279991133",
    RDate: "04/05/2021",
    TotalOrder: "30",
    Denied: "03",
    Cancle: "02",
    Total: "Rs.3012",
    Average: "4.0",
    Flagged: "12",
  },
  {
    Name: "Rakesh",
    Contact: "8279991133",
    RDate: "04/05/2021",
    TotalOrder: "30",
    Denied: "03",
    Cancle: "02",
    Total: "Rs.3012",
    Average: "4.0",
    Flagged: "12",
  },
  {
    Name: "Rakesh",
    Contact: "8279991133",
    RDate: "04/05/2021",
    TotalOrder: "30",
    Denied: "03",
    Cancle: "02",
    Total: "Rs.3012",
    Average: "4.0",
    Flagged: "12",
  },
];

const UserData = () => {
  return (
    <Paper>
      <table style={{ width: "100%", borderCollapse: "collapse",fontSize:"22px"  }}>
        <thead style={{
          color: "#777777",
          height: "50px",
                border: "2px solid #707070",

        }}>
          <tr >
            <th
              style={{
                height: "50px",
                border: "2px solid #707070",
                
                textAlign: "center",
                
              }}
            >
              Name
            </th>
            <th
              style={{
                height: "50px",
                border: "2px solid #707070",
                
                textAlign: "center",
                color: "#777777",
              }}
            >
              Contact
            </th>
            <th
              style={{
                height: "50px",
                border: "2px solid #707070",
                
                textAlign: "center",
                color: "#777777",
              }}
            >
              Registration Date
            </th>
            <th
              style={{
                height: "50px",
                border: "2px solid #707070",
                
                textAlign: "center",
              }}
            >
              Total Order
            </th>
            <th
              style={{
                height: "50px",
                border: "2px solid #707070",
                
                textAlign: "center",
              }}
            >
              Denied
            </th>
            <th
              style={{
                height: "50px",
                border: "2px solid #707070",
                
                textAlign: "center",
              }}
            >
              Cancle
            </th>
            <th
              style={{
                height: "50px",
                border: "2px solid #707070",
                
                textAlign: "center",
              }}
            >
              Total Business
            </th>
            <th
              style={{
                height: "50px",
                border: "2px solid #707070",
                
                textAlign: "center",
              }}
            >
              Average Rating
            </th>
            <th
              style={{
                height: "50px",
                border: "2px solid #707070",
                
                textAlign: "center",
              }}
            >
              Flagged
            </th>
          </tr>
        </thead>
        <tbody>
          {Cart.map((item) => {
            return (
              <tr>
                <td
                  style={{
                    height: "50px",
                    border: "2px solid #707070",
                    
                    textAlign: "center",
                    color: "#F88A12",
                  }}
                >
                  {item.Name}
                </td>
                <td
                  style={{
                    height: "50px",
                    border: "2px solid #707070",
                    
                    textAlign: "center",
                    color: "#777777",
                  }}
                >
                  {item.Contact}
                </td>
                <td
                  style={{
                    height: "50px",
                    border: "2px solid #707070",
                    
                    textAlign: "center",
                    color: "#777777",
                  }}
                >
                  {item.RDate}
                </td>
                <td
                  style={{
                    height: "50px",
                    border: "2px solid #707070",
                    
                    textAlign: "center",
                    color: "#F88A12",
                  }}
                >
                  {item.TotalOrder}
                </td>
                <td
                  style={{
                    height: "50px",
                    border: "2px solid #707070",
                    
                    textAlign: "center",
                    color: "#FF0000",
                  }}
                >
                  {item.Denied}
                </td>
                <td
                  style={{
                    height: "50px",
                    border: "2px solid #707070",
                    
                    textAlign: "center",
                    color: "#4612F8"
                  }}
                >
                  {item.Cancle}
                </td>
                <td
                  style={{
                    height: "50px",
                    border: "2px solid #707070",
                    
                    textAlign: "center",
                    color: "#21F812",
                  }}
                >
                  {item.Total}
                </td>
                <td
                  style={{
                    height: "50px",
                    border: "2px solid #707070",
                    
                    textAlign: "center",
                    color: "#777777",
                  }}
                >
                  {item.Average}
                </td>
                <td
                  style={{
                    height: "50px",
                    border: "2px solid #707070",
                    
                    textAlign: "center",
                    color: "#777777",
                  }}
                >
                  {item.Flagged}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </Paper>
  );
};

export default UserData;
