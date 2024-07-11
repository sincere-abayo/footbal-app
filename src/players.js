import Ads from "./fixtures/ads";
import FixtureHeader from "./fixtures/fixtureHeader";
import PageFiltersSection from "./fixtures/pageFiltersSection";

import { pages, players, teams } from "./utils"



export default function Players() {
    return (
        <main >
            <Ads/>
            <FixtureHeader container={ pages.players.header }/>
            <div className="fixtures-contents">
                <PageFiltersSection container={pages.players}/>
                <section className="table-wrapper">
                    <table className="standing-big clubs players">
                        <thead>
                            <tr>
                                <th>Player</th>
                                <th>Position</th>
                                <th>Nationality</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                players.map((player) => {
                                    return (
                                        <tr>
                                            <td className="club">
                                                <div className="club-cont">
                                                    <div className="club-img-cont">
                                                        <img src={player.image_url} alt={`${teams[0].name}-logo`} />
                                                    </div>
                                                    <p>{player.firstname} {player.lastname}</p>
                                                </div>
                                            </td>
                                            <td className="stadium-cell">
                                                <p>{player.position}</p>
                                            </td>
                                            <td className="arrow-cell">
                                                <div className="club-cont">
                                                    <div className="club-img-cont">
                                                        <img src={player.country.flag_url} alt={`${teams[0].name}-logo`} />
                                                    </div>
                                                    <p>{player.country.name} </p>
                                                </div>
                                            </td>
                                        </tr>
                                    )
                                })
                            }
                        
                        </tbody>
                    </table>
                </section>
            </div>
        </main>
    )
}