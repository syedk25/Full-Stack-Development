 
import { useParams } from 'react-router-dom'

function Home() {
  let {name}=useParams();
  return (
    <>
     {name ? <h2 className="text-red-500 text-2xl">Welcome to Home, Mr. {name.toLocaleUpperCase()}</h2> : <h2 className="text-red-500 text-2xl">Welcome to Home...</h2>}
     </>
  )
}

export default Home    