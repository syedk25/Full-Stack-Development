import { Paper } from '@mui/material'
import React from 'react'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useForm } from 'react-hook-form';

import * as Yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';

const validationSchema = Yup.object().shape({
  Name: Yup.string().required('Name is required').matches(/^[A-Z][a-z]+$/, 'Name can only contain letters and spaces'),
  Email: Yup.string().email('Invalid email').required('Email is required').matches(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/, 'Email must be a valid email address'),
  Age: Yup.number().positive('Age must be a positive number').required('Age is required').min(18, 'You must be at least 18 years old'),
  Password: Yup.string().min(6, 'Password must be at least 6 characters').required('Password is required'),
  "Confirm Password": Yup.string()
    .oneOf([Yup.ref('Password'), null], 'Passwords must match')
    .required('Please confirm your password')
});

let counter = 0; //to check how many times page reloads

function SignUp() 
{
  let { register, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(validationSchema)
  });

  counter++;

  let handleData = (data) => {
    console.log(data)
  }
  return (
    <Paper elevation={3} style={{ width: '300px', margin: '50px auto', padding: '20px',display:'flex', flexDirection:'column', gap:'20px' }}
      component="form"
      onSubmit={handleSubmit(handleData)}
    >
      <h1>Sign Up-{counter}</h1>
      <TextField label="Name"  {...register("Name" ,{required: "Name is required"})} error={!!errors.Name} helperText={errors.Name?.message} /> 
      <TextField label="Email"     {...register("Email" ,{required: "Email is required"})} error={!!errors.Email} helperText={errors.Email?.message} /> 
      <TextField label="Age"       {...register("Age" ,{required: "Age is required"})} error={!!errors.Age} helperText={errors.Age?.message} />
      <TextField label="Password"     {...register("Password" ,{required: "Password is required"})} error={!!errors.Password} helperText={errors.Password?.message} /> 
      <TextField label="Confirm Password"     {...register("Confirm Password" ,{required: "Please confirm your password"})} error={!!errors["Confirm Password"]} helperText={errors["Confirm Password"]?.message} />
      <Button variant="contained" type="submit"> Sign Up</Button>
    </Paper>
  )
}

export default SignUp