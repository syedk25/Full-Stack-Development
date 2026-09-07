import React from 'react'
import { Paper, Typography, Grid, TextField, Button } from '@mui/material';

function NewProduct() {


  const [newProduct, setNewProduct] = React.useState({
    "title": '',
    "category": '',
    "price": 0,
    "description": 'lorem 20',
    "image": 'https://www.clothingstore.com/shoes/running-sneakers-blue',
    "rating": {
      rate: 0,
      count: 0
    }
  })

  function handleChange(e) {
    const { name, value } = e.target;

    if (name === 'price' || name === 'count') {
      setNewProduct({...newProduct,rating: {...newProduct.rating,[name]: value }});
    } else {
      setNewProduct({ ...newProduct, [name]: value });
    }
  }
  // console.log(newProduct);

  function handleSubmit(e) {
    console.log("triggered");

    e.preventDefault();
    fetch('http://localhost:3000/Products', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(newProduct)
    })
      // .then(response => response.json())
      // .then(data => {
      //   console.log('Success:', data);
      //   alert('Product added successfully!');
      // })
      .then(() => { 
        alert('Product added successfully!')
        setNewProduct({
            "title": '',
            "category": '',
            "price": 0,
            "description": 'lorem 20',
            "image": 'https://www.clothingstore.com/shoes/running-sneakers-blue',
            "rating": {
              rate: 0,
              count: 0
            }
          })
        }).catch ((error) => {
    console.error('Error:', error);
  });
}

return (
  <div>

    <h2>This is New Product Page</h2>

    <Paper elevation={20} style={{ padding: '20px', width: 300, margin: "20px auto" }}>
      <Typography variant="h5">Create New Product</Typography>
      <form onSubmit={handleSubmit}>
        <Grid container spacing={2} style={{ marginTop: '10px' }}>
          <TextField id="outlined-basic" name='title' label="Title" variant="outlined" value={newProduct.title} onChange={handleChange} />
          <TextField id="outlined-basic" name='category' label="category" variant="outlined" value={newProduct.category} onChange={handleChange} />

          <Grid container spacing={2}>
            <Grid item xs={6}>
              <TextField id="outlined-basic" name='price' type='number' label="Price" variant="outlined" value={newProduct.rating.price} onChange={handleChange} />
            </Grid>
            <Grid item xs={6}>
              <TextField id="outlined-basic" name='count' type='number' label="Count" variant="outlined" value={newProduct.rating.count} onChange={handleChange} />
            </Grid>
          </Grid>
          <Button type="submit" variant="contained">Add</Button>
        </Grid>
      </form>
    </Paper>
  </div>
)
}

export default NewProduct