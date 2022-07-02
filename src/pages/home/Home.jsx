
import React from 'react'
import Navbar from '../../components/navbar/Navbar'
import Featured from '../../components/featured/Featured'
import "./home.scss"
import List from '../../components/list/List'
import Row from '../../components/row/Row'
import requests from '../../request'

const Home = () => {
  return (
    <div className='home'>
        <Navbar/>
        <Featured/>
        <List/>
        <Row
        title="CHILLFLIX FEATURED"
        fetchUrl={requests.fetchTopRated}
        isLargeRow
        />
        <Row
        title="TRENDING"
        fetchUrl={requests.fetchTrending}
        isLargeRow
        />
       
    </div>
  )
}

export default Home