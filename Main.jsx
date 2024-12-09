import React from 'react'
import HeroSection from './HeroSection'
import FilterNav from './FilterNav';
import './Main.css';
import NewGames from './NewGames';
import Promotions from './Promotions';
import HomeWidget from './HomeWidget';
import HomeWinners from './HomeWinners';
import TopGames from './TopGames';
import OurPicks from './OurPicks';
import Popular from './Popular';
import Jackpot from './Jackpot';
import Mine from "./Mine"
import ProvidersHome from './ProvidersHome';
import VipSection from './VipSection';

function Main() {
  return (
    <>
     <div className="home pt-6">    
      <div class="container mt-0 ml-auto mr-auto mb-0">
         <HeroSection/> 
          <FilterNav/>
          <Promotions/>
          <TopGames/>
          <HomeWinners/>
          <HomeWidget/>
          <NewGames/>
          <OurPicks/>
          <Popular/>
          <Jackpot/>  
          <VipSection/>
          <ProvidersHome/>
      </div>
    </div>
    </>
  )
}

export default Main
