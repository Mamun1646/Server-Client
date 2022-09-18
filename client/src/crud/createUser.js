/* eslint-disable */
import React, { useState } from 'react';
import { gql } from 'apollo-boost';
import { useMutation } from '@apollo/react-hooks';
import styled from 'styled-components';
import { CREATE_USER_MUTATION } from '../Queries/index';
import './form.css'

const StyledForm = styled.form`
  margin: 20px 0;
`;

const StyledLabel = styled.label`
  display: block;
  margin: 5px 0;
  input {
    margin-left: 20px;
  }
`;


const UserForm = ()=> {
const [addPerson] = useMutation(CREATE_USER_MUTATION);
  // const [user, setUser] = useState({});
  
  const[name, setName] =useState("");
  const[country, setCountry] =useState("");
  const[Description, setDescription] =useState("");



//   const handleOnChange = (event)=> {
//     setUser(event.target.value);
//     console.log(event.target.value)
//   }
const createName = (e) => {
    setName(e.target.value);
  };

  const createCountry = (e) => {
    setCountry(e.target.value);
  };
  const createDescription = (e) => {
    setDescription(e.target.value);
  };


  const handleSubmit = (event)=> {
    // createUser({variables: { ...user }});
    event.preventDefault();
    addPerson({variables: {
        createPersonDto: {
            name,
    country,
    Description
        }
    }})
  }
  

  return<div> <StyledForm onSubmit={handleSubmit}>
    <StyledLabel>
      name:
      <input onChange={createName} type="text" name="name" />
    </StyledLabel>
    <StyledLabel>
     country
      <input onChange={createCountry} type="text" name="country" />
    </StyledLabel>
    <StyledLabel>
    Description
      <input onChange={createDescription} type="text" name="Description" />
    </StyledLabel>
 
    <input type="submit" value="Create" />
  </StyledForm>
  </div>
  
}

export default UserForm;