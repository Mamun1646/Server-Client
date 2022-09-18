import React, { useState, useEffect } from "react";
import { useQuery } from "@apollo/react-hooks";
import {  VIEW_USERS } from "../Queries";
import { Card, CardBody, CardHeader, CardSubtitle, Spinner } from "reactstrap";


export default function OneUser() {
    const userInfo = useQuery(VIEW_USERS, {
        variables: {
          id: "6325fac061fdc1ef9b8cc4cb",
        },
      });
    
      const [person, setPerson] = useState([]);
    
      useEffect(() => {
       
        if (!!userInfo.data) {
          setPerson(userInfo.data.getPersonById);
        }
      }, [ userInfo.data]);
  return (
    <div> <Card>
    <CardHeader>Query - Displaying data with args</CardHeader>
    <CardBody>
      <CardSubtitle>Viewing a user by id</CardSubtitle>
      {Object.keys(person).length && <h1>{person.name}</h1>}
    </CardBody>
  </Card>
  
  </div>
  )
}
