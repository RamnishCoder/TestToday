import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
function Dashboard() {
  const [data, setData] = useState([]);
  const [data1, setData1] = useState([]);
  const [filter, setFilter] = useState([]);
  const [search, setSearch] = useState("");
  useEffect(() => {
    axios
      .get(
        `    https://jsonplaceholder.typicode.com/users
        `
      )
      .then((response) => {
        setData(response.data);
      });
  }, []);

  const searchData = (Value) => {
    setSearch(Value);
    if (search !== "") {
      const filter = data.filter((item) => {
        return Object.values(item)
          .join("")
          .toLowerCase()
          .includes(search.toLowerCase());
      });
      setFilter(filter);
    } else {
      setFilter(data);
    }
  };
const sorting =()=>{
    const sort=data.reverse()
    setData1(sort)
}

  return (
    <div style={{ padding: 20 }}>
        <h1>Search data...</h1>
      <input
        type="search"
        placeholder="Search..."
        onChange={(e) => searchData(e.target.value)}
      />
      <table style={{ marginTop: 20,marginLeft:"18%",color:"red" }}>
        {search.length > 1
          ? filter.map((item) => {
              return (
                <tr>

                  <td>{item.name}</td>
                  <td>{item.username}</td>
                  <td>{item.phone}</td>
                  <td>{item.website}</td>
                  <td>{item.email}</td>

                </tr>
              );
            })
          : data.map((item) => {
              return (
                <tr>

                  <td>{item.name}</td>
                  <td>{item.username}</td>
                  <td>{item.phone}</td>
                  <td>{item.website}</td>
                  <td>{item.email}</td>
                 

                  
                </tr>
              );
            })}
      </table>
      <br/>
      <Link to="/admin">
        <button style={{ backgroundColor: "red", marginRight: "74%",width:"108px" }}>
          Back
        </button>
        <br/>
        <br/>

      </Link>
      <button onClick={()=>sorting()} style={{width:"108px"}}>
          sorting
        </button>
    </div>
  );
}
export default Dashboard;
