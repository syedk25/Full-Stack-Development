import React, { useEffect,useState } from 'react'

function Timer() 
{
    const [count, setCount] = React.useState(0)

    useEffect(() => {
        const timer = setInterval(() => {
            setCount(prevCount => prevCount + 1)
        }, 1000)
        return () => clearInterval(timer)
    }, [])

  return (
    <div>Timer: {count}</div>
  )
}

export default Timer