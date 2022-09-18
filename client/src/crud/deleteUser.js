import React, { useState, useEffect } from "react";
import { useQuery } from "@apollo/react-hooks";
import {  DELETE_USER } from "../Queries";
import { Card, CardBody, CardHeader, CardSubtitle, Spinner } from "reactstrap";


export default function DeleteUser() {
    const deleteUser = useQuery(DELETE_USER, {
        variables: {
          id: "6325fac061fdc1ef9b8cc4cb",
        },
      });
    
    
    
    
  return (
    <div> 
  
  </div>
  )
}
