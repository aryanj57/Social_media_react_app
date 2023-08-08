import React from "react";
import { Box } from "@mui/material";
import Post from "./Post";

const details = [
  {
    title: "Aryan Jaiswal",
    img: "https://images.pexels.com/photos/17838732/pexels-photo-17838732/free-photo-of-nature-field-animal-farm.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    date: "12 June,2023",
    look: "red",
  },
  {
    title: "Pratynash Srivastava",
    img: "https://images.pexels.com/photos/848573/pexels-photo-848573.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    date: "15 June,2023",
    look: "cyan[200]",
  },
  {
    title: "Kailash Saran",
    img: "https://images.pexels.com/photos/10046550/pexels-photo-10046550.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    date: "1 August,2023",
    look: "yellow[200]",
  },
  {
    title: "Yadvendra Singh",
    img: "https://images.pexels.com/photos/15549329/pexels-photo-15549329/free-photo-of-fountain-in-front-of-a-building.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    date: "5 August,2023",
    look: "green[200]",
  },
  {
    title: "Garvit Gupta",
    img: "https://images.pexels.com/photos/2422256/pexels-photo-2422256.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    date: "13 August,2023",
    look: "purple[200]",
  },
];

const Feed = () => {
  return (
    <Box flex={4} p={2}>
      {details.map((item, index) => (
        <Post
          key={index}
          title={item.title}
          img={item.img}
          date={item.date}
          look={item.look}
        />
      ))}
    </Box>
  );
};

export default Feed;
