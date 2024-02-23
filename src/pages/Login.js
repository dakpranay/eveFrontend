import React from 'react';
import styled from 'styled-components';
import bgImg from './5starvenue.jpg';
import { useForm } from 'react-hook-form';
import '../styles/Login.css'

const StyledSection = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

const StyledRegisterDiv = styled.div`
  display: flex;
  
  justify-content: center;
`;

const StyledCol1Div = styled.div`
  text-align: center;
`;

const StyledForm = styled.form`
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const StyledInput = styled.input`
  padding: 10px;
  margin: 5px;
  border-radius: 5px;
  border: 1px solid #ccc;
  width:100%;
`;


const StyledButton = styled.button`
  padding: 10px 30px;
  margin: 5px;
  border-radius: 5px;
  background-color: #007bff;
  color: #fff;
  border: none;
  cursor: pointer;
  

  &:hover {
    background-color: #0056b3; /* New button color on hover */
  }
`;
export default function Login(){
    const { register, handleSubmit } = useForm();
    const onSubmit = data => console.log(data);
    return (
        <StyledSection style={{backgroundColor:'#6CA6CD'}}>
        <StyledRegisterDiv className="register">
          <div className="col-2" >
            <img src={bgImg} alt=""  />
          </div>
          <StyledCol1Div className="col-1">
            <h2>Login</h2>
            
  
            <StyledForm id='form' className='flex flex-col' onSubmit={handleSubmit(onSubmit)}>
              <StyledInput type="text" {...register("username")} placeholder='Username' required />
              <StyledInput type="password" {...register("password")} placeholder='password'  required/>
              <label>
          <input
            type="checkbox"
            style={{marginRight:"10px"}}
          />
           I agree to the terms and conditions
        </label>
              <StyledButton type="submit" className='btn' 
              
              >Login</StyledButton>
            </StyledForm>
                
          </StyledCol1Div>
        </StyledRegisterDiv>
      </StyledSection>

    )
}