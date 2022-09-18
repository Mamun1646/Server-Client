import React, { useState, useEffect } from "react";
import { useQuery } from "@apollo/react-hooks";
import { GET_USERS } from "../Queries/index";
import './styles.css'
const Read = () => {
  const getAllUsers = useQuery(GET_USERS);

  const [data, setData] = useState([]);

  useEffect(() => {
    if (!!getAllUsers.data) {
      setData(getAllUsers.data.getAllPerson);
    }
  }, [getAllUsers]);
  return (
   <div className="card">
     
      {data.map((d) => (
       
          <div className="container card">
            <h4>{d.name}</h4>
            <h6>{d.country}</h6>
            <p>{d.Description}</p>
          </div>
         

      ))}
    </div>
  );
};
export default Read;
