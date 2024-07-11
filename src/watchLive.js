import Ads from "./fixtures/ads";
import FixtureHeader from "./fixtures/fixtureHeader";
import HublotTimeAds from "./fixtures/hublotTimeAds";

import Match from "./home/sidebar/match";
import { matches } from "./utils";

import { pages } from "./utils";

import PageFiltersSection from "./fixtures/pageFiltersSection";



export default function WatchLive () {
    return (
        <main>
            <Ads/>
            <FixtureHeader container={
                pages.watchLive.header
            }/>
            <div className="fixtures-contents">
                <PageFiltersSection container={pages.watchLive}/>
                <HublotTimeAds/>
                <div className="broadcasters">
                    <h3>Broadcasters</h3>
                    <div className="broadcaster-cont">
                        <a className="broadcaster" href="">
                            <img src="images/watchlive/fracanal@x2.png" alt=""/>
                            <span>
                                SuperSport <i className="fa-solid fa-arrow-up-right-from-square"></i>
                            </span>
                        </a>
                        <a className="broadcaster" href="">
                            <img src="images/fixtures/Supersport2012.jpg" alt="" />
                            <span>
                                Canal + Afrique  <i className="fa-solid fa-arrow-up-right-from-square"></i>
                            </span>
                        </a>
                    </div>
                </div>
                <section className=".fixtures-container-all">
                    
                    {
                        matches.pre.map((day) => {
                            return(
                                <div className="fixtures-day">
                                    <div className="date-container">
                                        <h3>{day.date}</h3>
                                        <img src="images/fixtures/competition_1.png" alt="" />
                                    </div>
                                    {day.dateMatches.map((match) => {
                                        return (
                                            <div className="fixture-match-container">

                                                <Match team1={match.team1} team2={match.team2} time={match.time} />
                    
                                                <div className="fixture-end-container">
                                                    <img src="images/watchlive/fracanal@x2.png" alt="" />
                                                    <img src="images/fixtures/Supersport2012.jpg" alt="" />
                                                </div>
                                                <div className="match-external-link">
                                                    <i className="fa-solid fa-arrow-right-long"></i>
                                                </div>
                    
                                            </div>
                                        )})
                                    }
                                </div>
                            )}
                        )
                    }
                </section>
            </div>
        </main>
    )
}