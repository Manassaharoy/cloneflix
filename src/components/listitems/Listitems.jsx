import React from 'react'
import "./listitems.scss"
import PlayCircleIcon from '@mui/icons-material/PlayCircle';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import ThumbDownAltIcon from '@mui/icons-material/ThumbDownAlt';
import { useState } from 'react'



const Listitems = ({ index }) => {
  const [isHovered, setIsHovered] = useState(false);
  const trailer =
    "https://vod-progressive.akamaized.net/exp=1656667209~acl=%2Fvimeo-prod-skyfire-std-us%2F01%2F3616%2F24%2F618080157%2F2869141051.mp4~hmac=58e26309032c8e3b317c4190c0018989cfa54f785898d72cac32971167f35683/vimeo-prod-skyfire-std-us/01/3616/24/618080157/2869141051.mp4?download=1&filename=pexels-kelly-lacy-9722139.mp4";
  return (
    <div className='listItem' 
      style={{ left: isHovered && index * 225 - 50 + index * 2.5 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}>
      <img src="https://www.joblo.com/wp-content/uploads/2022/05/chip-n-dale-poster.jpg" alt="" />
      {isHovered && (
        <>
          <video src={trailer} autoPlay={true} loop />
      <div className="itemInfo">
        <div className="icons">
            <PlayCircleIcon/>
            <AddCircleIcon/>
            <ThumbUpIcon/>
            <ThumbDownAltIcon/>
        </div>
        <div className="itemInfoTop">
              <span>1 hour 14 mins</span>
              <span className="limit">+16</span>
              <span>1999</span>
            </div>
            <div className="desc">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Praesentium hic rem eveniet error possimus, neque ex doloribus.
            </div>
            <div className="genre">Action</div>
      </div>
      </>
  )}
    </div>
  );
}

export default Listitems