import { useEffect, useState } from 'react';
import { useParams, useNavigate} from 'react-router-dom'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import axios from 'axios';

function UpdateProduct() {

  const [updateProduct, setUpdateProduct] = useState(null)

  let { id } = useParams();

  let navigate = useNavigate();

  useEffect(() => {
    axios.get(`http://localhost:3000/Products/${id}`)
      .then(res => setUpdateProduct(res.data))
      .catch(error => console.error('Error:', error));
  }, [id]);

  function handleChange(e) {
    const { name, value } = e.target;
    if (name === 'count') {
      setUpdateProduct({
        ...updateProduct,
        rating: {
          ...updateProduct.rating,
          [name]: value
        }
      });
    } else {
      setUpdateProduct({ ...updateProduct, [name]: value });
    }
  }

  function handleSubmit(e) {
    console.log("triggered");
    e.preventDefault();
    fetch(`http://localhost:3000/Products/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(updateProduct)
    })
      // .then(response => response.json())
      // .then(data => {
      //   console.log('Success:', data);
      //   alert('Product added successfully!');
      // })
      .then(() => {
        alert('Product updated successfully!')
        navigate('/products');

      }).catch((error) => {
        console.error('Error:', error);
      });
  }

  if (updateProduct !== null) {
    return (
      <div>

        <Paper elevation={20} style={{ padding: '20px', width: 300, margin: "20px auto" }}>
          <Typography variant="h5">Update Product</Typography>
          <form onSubmit={handleSubmit}>
            <Grid container spacing={2} style={{ marginTop: '10px' }}>
              <TextField id="outlined-basic" name='title' label="Title" variant="outlined" value={updateProduct.title} onChange={handleChange} />
              <TextField id="outlined-basic" name='category' label="category" variant="outlined" value={updateProduct.category} onChange={handleChange} />

              <Grid container spacing={2}>
                <Grid  >
                  <TextField id="outlined-basic" name='price' type='number' label="Price" variant="outlined" value={updateProduct.price} onChange={handleChange} />
                </Grid>
                <Grid  >
                  <TextField id="outlined-basic" name='count' type='number' label="Count" variant="outlined" value={updateProduct.rating.count} onChange={handleChange} />
                </Grid>
              </Grid>
              <Button type="submit" variant="contained">Update</Button>
            </Grid>
          </form>
        </Paper>
      </div>
    )
  } else {
    return <h2>Loading...</h2>
  }
}

export default UpdateProduct