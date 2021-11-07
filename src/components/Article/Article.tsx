import React from "react";
import { useParams, useNavigate } from 'react-router-dom';
import { useEffect,useState } from "react";
import axios from "axios"
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import ListSubheader from '@mui/material/ListSubheader';
import "./Article.css"
import moment from 'moment'


const Article = ()=>{
    const { id } = useParams();
    const[title,setTitle]= useState("")
    const[image,setImage] = useState("")
    const [date,setDate]= useState("")
    const [summary,setSummary] =useState("")
    const[url,setUrl] =useState("")
    useEffect(()=> {
        getArticle();
    
    }, [])
    let navigate = useNavigate()
    const getArticle = async () =>{
        const data=  await axios.get(`https://api.spaceflightnewsapi.net/v3/articles/${id}`)
        console.log(data)
        setTitle(data.data.title)
        setImage(data.data.imageUrl)
        setDate(data.data.publishedAt)
        setSummary(data.data.summary)
        setUrl(data.data.url)
    }
    const back =()=>{
        navigate("/");
    }
    return(
        <div className="article">
            <ImageListItem className="list" key={id}>
          <img
            src={`${image}?&fit=cover&auto=format`}
            srcSet={`${image}?&fit=crop&auto=format&dpr=2 2x`}
            alt={title}
            loading="lazy"
            className="img"
          />

          <ImageListItemBar
            className="itembar"
            title={title}
            subtitle={`Published at : ${moment(`${date}`).format("MMMM Do YYYY, h:mm:ss a")}` }
        />
        </ImageListItem>
        <div className="Summary">
            <h1>{title}</h1>
            <div className="content">
        <p>{summary}</p>
        </div>
      <div className="continue"> <a className="link" href={url} target="_blank">Continue Reading</a>
      <img src="https://img.icons8.com/material-outlined/24/000000/circled-right-2.png"/>
      </div>
      <div className="continue">
      <img src="https://img.icons8.com/material-outlined/24/000000/circled-left--v2.png"/>
           <a className="link" href=""onClick={back} >Back</a>
      
        </div>


        </div>
        </div>
    )

}


export default Article;  