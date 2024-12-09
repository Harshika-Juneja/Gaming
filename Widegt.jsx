import React from 'react'
import soccer from "../../assets/widget/soccer.svg";
import team1 from "../../assets/widget/team1.png";
import team2 from "../../assets/widget/team2.png";
import team3 from "../../assets/widget/team3.png";
import team4 from "../../assets/widget/team4.png";
import team5 from "../../assets/widget/team5.png";
import team6 from "../../assets/widget/team6.png";

function HomeWidget() {
  return (
    <>
    <div className="home-sports-widget">
        <div className='container'>
            {/* <div className='widget-bg-text'>Sport</div> */}
            <div className='widget-content'>
                <h3 className='widget-title'>Top events with top odds. 
                    <span>Pick your game!</span></h3>
                <a className="btn link-btn widget-btn" href="/sports">Place Bet</a>
            </div>
            <div className='widget-slider'>
                <div className='base-slider'>
                    <div className='base-slider-header'>
                        <div className='base-slider-controls'>
                          
                        </div>                       
                    </div>               
                    <div className='widget-slick-slider'>
                      <div className='widget-card'>
                        <div className='widget-slider-card'>
                            <div className='widget-card-header'>
                              <div className='widget-card-details'>
                              <img className='widget-icon-img' src={soccer}/>
                              <span className=''>Germany,Bundesliga</span>
                              </div>
                              <span className='widget-card-date'>Aug 28,01:00</span>
                            </div>
                            <div className='widget-card-teams'>
                              <div className='team-details'>
                              <div className='team-img-wrapper'>
                                <img src={team1} className='team-img'/>
                              </div>
                                <span className='team-title'>VfB Stuttgart</span>
                              </div>
                              <div className="team-vs">VS</div>
                              <div className='team-details'>
                              <div className='team-img-wrapper'>
                                <img src={team2} className=' team-img'/>
                              </div>
                                <span className='team-title'>FSV Mainz 05</span>
                              </div>
                            </div>
                            <div className='widget-card-bets'>
                              <a className='widget-card-bet-links'>
                                <span>1</span>
                                <span className='card-coefficient'>1.6</span>
                              </a>
                              <a className='widget-card-bet-links'>
                                <span>X</span>
                                <span className='card-coefficient'>4.1</span>
                              </a>
                              <a className='widget-card-bet-links'>
                              <span>2</span>
                              <span className='card-coefficient'>4.9</span>
                              </a>
                            </div>
                        </div>
                      </div>
                      <div className='widget-card'>
                        <div className='widget-slider-card'>
                            <div className='widget-card-header'>
                              <div className='widget-card-details'>
                              <img className='widget-icon-img' src={soccer}/>
                              <span className=''>Germany,Bundesliga</span>
                              </div>
                              <span className='widget-card-date'>Aug 28,01:00</span>
                            </div>
                            <div className='widget-card-teams'>
                              <div className='team-details'>
                              <div className='team-img-wrapper'>
                                <img src={team3} className='team-img'/>
                              </div>
                                <span className='team-title'>VfB Stuttgart</span>
                              </div>
                              <div className="team-vs">VS</div>
                              <div className='team-details'>
                              <div className='team-img-wrapper'>
                                <img src={team4} className=' team-img'/>
                              </div>
                                <span className='team-title'>FSV Mainz 05</span>
                              </div>
                            </div>
                            <div className='widget-card-bets'>
                              <a className='widget-card-bet-links'>
                                <span>1</span>
                                <span className='card-coefficient'>1.6</span>
                              </a>
                              <a className='widget-card-bet-links'>
                                <span>X</span>
                                <span className='card-coefficient'>4.1</span>
                              </a>
                              <a className='widget-card-bet-links'>
                              <span>2</span>
                              <span className='card-coefficient'>4.9</span>
                              </a>
                            </div>
                        </div>
                      </div>
                      <div className='widget-card'>
                        <div className='widget-slider-card'>
                            <div className='widget-card-header'>
                              <div className='widget-card-details'>
                              <img className='widget-icon-img' src={soccer}/>
                              <span className=''>Germany,Bundesliga</span>
                              </div>
                              <span className='widget-card-date'>Aug 28,01:00</span>
                            </div>
                            <div className='widget-card-teams'>
                              <div className='team-details'>
                              <div className='team-img-wrapper'>
                                <img src={team5} className='team-img'/>
                              </div>
                                <span className='team-title'>VfB Stuttgart</span>
                              </div>
                              <div className="team-vs">VS</div>
                              <div className='team-details'>
                              <div className='team-img-wrapper'>
                                <img src={team6} className=' team-img'/>
                              </div>
                                <span className='team-title'>FSV Mainz 05</span>
                              </div>
                            </div>
                            <div className='widget-card-bets'>
                              <a className='widget-card-bet-links'>
                                <span>1</span>
                                <span className='card-coefficient'>1.6</span>
                              </a>
                              <a className='widget-card-bet-links'>
                                <span>X</span>
                                <span className='card-coefficient'>4.1</span>
                              </a>
                              <a className='widget-card-bet-links'>
                              <span>2</span>
                              <span className='card-coefficient'>4.9</span>
                              </a>
                            </div>
                        </div>
                      </div>
                    </div>
                
                </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default HomeWidget
