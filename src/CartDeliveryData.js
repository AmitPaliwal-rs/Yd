import React, {useState , useEffect} from 'react';
import { Paper } from "@mui/material";

const CartDeliveryData = ({staffMember}) => {
  

    const token = localStorage.getItem("Token");
    const baseUrl = "http://yd-dev-elb-841236067.ap-south-1.elb.amazonaws.com";
    const StaffDetail = `api/store-manager/dashboard/staff/${staffMember}`;
    const [Cart , setCart] = useState(null);
  
    useEffect( ()=> {
      const loadData = async () => {
        let response = await fetch(`${baseUrl}/${StaffDetail}` , {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
            Authorization: token, 
          },
        });
        const res = await response.json();
        setCart(res);
      }
      loadData();
    } ,[token, StaffDetail]);
  
    let item = Cart?.map(x => {
      let now = new Date(x.regDate);
      if(!!x.regDate){
        let month = now.getMonth() + 1;
        let dt = now.getDate();
        let year = now.getFullYear();
        if(!! month || !!dt || !!year){
          x.regDate = `${dt}/${month}/${year} `;
        }
        else{
          x.regDate = "";
        }
        
      }
      
      return x;
    }) // this ? mark is used to check is previuos value is null or not
    console.log(item);
    
  
  
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
            {item?.map((item) => {
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
                    {item.name}
                  </td>
                  <td
                    style={{
                      height: "50px",
                      border: "2px solid #707070",
                      
                      textAlign: "center",
                      color: "#777777",
                    }}
                  >
                    {item.contact}
                  </td>
                  <td
                    style={{
                      height: "50px",
                      border: "2px solid #707070",
                      
                      textAlign: "center",
                      color: "#777777",
                    }}
                  >
                    {item.regDate}
                  </td>
                  <td
                    style={{
                      height: "50px",
                      border: "2px solid #707070",
                      
                      textAlign: "center",
                      color: "#F88A12",
                    }}
                  >
                    {item.totalOrders}
                  </td>
                  <td
                    style={{
                      height: "50px",
                      border: "2px solid #707070",
                      
                      textAlign: "center",
                      color: "#FF0000",
                    }}
                  >
                    {item.deniedOrders}
                  </td>
                  <td
                    style={{
                      height: "50px",
                      border: "2px solid #707070",
                      
                      textAlign: "center",
                      color: "#4612F8"
                    }}
                  >
                    {item.canceledOrders}
                  </td>
                  <td
                    style={{
                      height: "50px",
                      border: "2px solid #707070",
                      
                      textAlign: "center",
                      color: "#21F812",
                    }}
                  >
                    {item.totalAmount}
                  </td>
                  <td
                    style={{
                      height: "50px",
                      border: "2px solid #707070",
                      
                      textAlign: "center",
                      color: "#777777",
                    }}
                  >
                    {item.avgRating}
                  </td>
                  <td
                    style={{
                      height: "50px",
                      border: "2px solid #707070",
                      
                      textAlign: "center",
                      color: "#777777",
                    }}
                  >
                    {item.flagged}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </Paper>
    );



}

export default CartDeliveryData