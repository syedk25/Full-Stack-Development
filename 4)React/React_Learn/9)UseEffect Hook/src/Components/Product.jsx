import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Outlet } from 'react-router-dom'
import Button from 'react-bootstrap/Button';

function Product() {
  const [count1, setCount1] = React.useState(0)
  const [count2, setCount2] = React.useState(0) 

  // step 1: useEffect is called after every render
  useEffect(() => {
    console.log("only one callBack function:useEffect is called after every render")
  })

  //step 2: useEffect is called only when count1/state changes
  useEffect(() => {
    console.log("callback function with state : useEffect is called only when count-1 changes")
  }, [count1])

  useEffect(() => {
    console.log("callback function with state : useEffect is called only when count-2 changes")
  }, [count2])

  // we  can also combine the above two useEffect into one useEffect as shown below
  // useEffect(() => {
  //   console.log("callback function with state : useEffect is called only when count-2 changes")
  // }, [count1, count2])

  // step 3: useEffect is called only once when the component is mounted
  useEffect(() => {
    console.log("callback function with empty dependency array : useEffect is called only once when the component is mounted")
  }, [])

  console.log("Product component is rendered")

  return (
    <div>
      <h1>Product</h1>
      <Button variant="primary" onClick={() => setCount1(count1 + 1)}>
        Count: {count1}
      </Button>

      <Button variant="primary" onClick={() => setCount2(count2 + 1)}>
        Count: {count2}
      </Button>
      
      <Link to='details'>Details</Link>
      <Link to='list'>List</Link>
      <Outlet />
    </div>
  )
}

export default Product