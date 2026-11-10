import { useState, useEffect} from "react"; 
import axios from 'axios';

function useFetch(url) 
{
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

   useEffect(() => 
    { fetchApi();
    }, [url]) 


        async function fetchApi()
            {
                try 
                {
                   // let res=await fetch(url, { method: "GET" });
                        let res=await axios.get(url);  
                        setData(res.data);
                    /* if(res.ok)
                    {
                        let data=await res.json();
                        setData(data);
                    }
                    else
                    {
                        throw new Error(res.statusText);
                    } */
                }
                catch(err)
                {
                    setError(err.message);
                }
                finally
                {
                    setLoading(false);
                }
            }
       

    return { products: data, loading, error , setProducts:setData};
}
export default useFetch;