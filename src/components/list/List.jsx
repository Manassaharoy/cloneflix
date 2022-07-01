import React, { useRef, useState } from 'react'
import "./list.scss"
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import Listitems from '../listitems/Listitems';
import { Link } from 'react-router-dom';


const List = () => {


  const [isMoved, setisMoved] = useState(false);
  const [slideNumber, setslideNumber] = useState(0);

  const listRef = useRef();

  const handleClick = (direction) =>{
    setisMoved(true);
    let distance = listRef.current.getBoundingClientRect().x - 50
    if (direction === "left" && slideNumber >0){
          setslideNumber(slideNumber - 1)
          listRef.current.style.transform = `translateX(${230 + distance}px)`
    }
    if (direction === "right" && slideNumber < 5){
      setslideNumber(slideNumber + 1)
          listRef.current.style.transform = `translateX(${-230 + distance}px)`
    }
  }

  return (
    <div className='list'>
      <div className="listTitle">ChillFlix Originals</div>
      <div className="wrapper">
        <ArrowBackIosNewIcon 
          className='sliderArrow left' 
          onClick={()=>handleClick("left")} 
          style={{display: !isMoved && "none"}}
          />
        <div className="container" ref={listRef}>
          <Link to="/watch"><Listitems index={0}/></Link>
          <Link to="/watch"><Listitems index={1}/></Link>
          <Link to="/watch"><Listitems index={2}/></Link>
          <Link to="/watch"><Listitems index={3}/></Link>
          <Link to="/watch"><Listitems index={4}/></Link>
          <Link to="/watch"><Listitems index={5}/></Link>
          <Link to="/watch"><Listitems index={6}/></Link>
          <Link to="/watch"><Listitems index={7}/></Link>
          <Link to="/watch"><Listitems index={8}/></Link>
          <Link to="/watch"><Listitems index={9}/></Link>
          <Link to="/watch"><Listitems index={10}/></Link>
          <Link to="/watch"><Listitems index={11}/></Link>
          <Link to="/watch"><Listitems index={12}/></Link>
        </div>
        <ArrowForwardIosIcon className='sliderArrow right' onClick={()=>handleClick("right")}/>
      </div>
      </div>
  )
}

export default List