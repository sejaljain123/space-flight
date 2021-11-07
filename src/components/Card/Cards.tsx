import React from "react";
import {useEffect,useState} from "react"
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography"
import "./Card.css";
import moment from 'moment'
import { Link } from "react-router-dom";

const Cards=(props:any)=> {


  return (
   
      <Card sx={{ maxWidth: 500, maxHeight:600 }} className="card">
        <Link to={`/articles/${props.id}`}>
    <CardHeader
    className="header"
    title={props.title}/>
  </Link>
  <p>{`Published at : ${moment(`${props.date}`).format("MMMM Do YYYY, h:mm:ss a")}`}</p>
  <CardMedia
    component="img"
    height="194"
    image={props.image}
    alt="Paella dish"
  />  
  <CardContent>
    <Typography variant="body2" color="text.secondary">
     {props.summary}
    </Typography>
  </CardContent>
</Card>

  );
}

export default Cards;
