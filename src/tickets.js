import { useState } from "react";
import { pages, teams } from "./utils";
import Ads from "./fixtures/ads";
import FixtureHeader from "./fixtures/fixtureHeader";
import TeamTickets from "./tickets/teamTicket";

export default function Tickets () {
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
            <FixtureHeader container={pages.tickets.header}/>

            <div className="injury-section-wrapper">
                <section className="key-injury-news">
                    <h2 className="key-injury-news-heading">
                        Tickets – How and where to buy
                    </h2>
                    <p>
                        If you are interested in attending a Premier League match, we recommended following the links below, which will take you to buy tickets directly from Premier League Clubs. Further guidance is included below.
                    </p>
                    <p>
                        If you buy from unofficial sources, you run the risk of your ticket being voided, and you will not be able to access the match. See ‘Safe ticket buying’ above for more details.
                    </p>
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
                    {
                        allTeams.map((team) => {
                            return(

                                <TeamTickets team={team}/>
                            )
                        })
                    }
            </section>
        </main>
    )
}