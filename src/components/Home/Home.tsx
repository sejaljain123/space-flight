import React from 'react';
import { useEffect, useState} from 'react';
import axios from 'axios';
import Cards from "../Card/Cards"
import "./Home.css"
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';


const Home=()=> {
    const [articles,setArticles] = useState([])
    const [limit,setLimit] = useState(5);
    const[page,setPage]=useState(1)
    const[count,setCount]= useState(1);
    const pageSizes = [5,10,15,20,25]

    useEffect(() => {
      
        getArticles(limit,page);
        
    },[limit,page])
    const handlePage = (event:any, value:any) => {
      setPage(value);
    };
   const handlePageSizeChange = (event:any)=>{
     setLimit(event.target.value)

   }
    const getArticles =  async (limit:number,page:number)=>{
      let start: number = limit * (page-1 )
      const size = await axios.get("https://api.spaceflightnewsapi.net/v3/articles/count")
     
      const data = await axios.get(
        `https://api.spaceflightnewsapi.net/v3/articles?_limit=${limit}&_start=${start}`
      )
     setCount(size.data)
      setArticles(data.data);
    }

  return (
      <div className ="main">
    
  
            <h1 className = "heading">Articles on Space Flight</h1>
          
    <div className="Home">
 
     {
         articles.map((i:any)=>(
             <Cards title = {i.title} image = {i.imageUrl} date = {i.publishedAt} summary={i.summary} url={i.url} launches={i.launches} id={i.id}/>
         ))
     }
   
    </div>
    <div className="limit">
            <p>Articles per Page: </p>
            <Select onChange={handlePageSizeChange} value={limit}>
              {pageSizes.map((size) => (
                <MenuItem key={size} value={size}>
                  {size}
                </MenuItem>
              ))}
            </Select>
            </div>
    <Stack spacing={2}>

  
      <Pagination count={Math.ceil(count/limit)} page={page} onChange={handlePage}  color="primary" />

    </Stack>
    </div>
    
  );
}

export default Home;
