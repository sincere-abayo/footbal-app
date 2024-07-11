import { useState } from "react";
import InjuryContainer from "./injury/InjuryContainer";
import { keyTransfers, pages, teams } from "./utils";
import Ads from "./fixtures/ads";
import FixtureHeader from "./fixtures/fixtureHeader";
import TeamTransfer from "./Transfers/teamTransfer";

export default function Transfers () {
    const [allTeams, setAllTeams] = useState(teams)

    function handleClubFilter (event) {
        const teamName = event.target.textContent;
        setAllTeams(teams.filter(team => team.shortName === teamName));
    }
    function resetFilter () {
        setAllTeams(teams);
    }
    return (
        <main >
            <Ads/>
            <FixtureHeader container={pages.transfers.header}/>

            <div className="injury-section-wrapper">
                <section className="key-injury-news">
                    <h2 className="key-injury-news-heading">
                        Key Transfers
                    </h2>
                    <div className="key-injury-content">
                        {
                            keyTransfers.map((container) => {
                                return (
                                    <InjuryContainer container={container}/>
                                )
                            })
                        }
                    </div>
                </section>
                
            </div>
            <section className="injury-filter-wrapper">
                <div className="injury-filter">
                    <div className="injury-filter-heading">
                        <p className="fb">Filter by Club</p>
                        <div className="reset-filter" onClick={resetFilter}>
                            <i className="fa-solid fa-arrow-rotate-left"></i>
                            <p>RESET FILTERS</p>
                        </div>
                    </div>
                </div>
                <div className="clubs-short-names">
                    {
                        teams.map((team) => {
                            return (
                                <div className="club-container" onClick={handleClubFilter}>
                                    <img src={team.image_url} alt="logo" />
                                    <span>{team.shortName}</span>
                                </div>
                            )
                        })
                    }
                </div>
            </section>
            <section className="each-team-injury-wrapper">
        
                    <p>
                        See all the players injured for each of the 20 Premier League clubs, with key news for managers in Fantasy Premier League ahead of the next Gameweek.
                    </p>
                    <em>Last updated: 16:00 BST 1 May</em>
                    
                    <h3>All Injury News</h3>
                    {
                        allTeams.map((team) => {
                            return(
                                <TeamTransfer team={team}/>
                            )
                        })
                    }
            </section>
        </main>
    )
}