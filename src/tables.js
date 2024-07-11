import Ads from "./fixtures/ads";
import FixtureHeader from "./fixtures/fixtureHeader";
import HublotTimeAds from "./fixtures/hublotTimeAds";
import PageFiltersSection from "./fixtures/pageFiltersSection";
import Review from "./home/sidebar/review";
import { pages, teams } from "./utils"



export default function Tables() {
    return (
        <main >
            <Ads/>
            <FixtureHeader container={ pages.tables.header }/>
            <div className="fixtures-contents">
                <PageFiltersSection container={pages.tables}/>

                <HublotTimeAds />
    
                <section className="table-wrapper">
                    <div className="table-heading-logo">
                        <img src="images/fixtures/competition_1.png" alt="" />
                    </div>
                    <table className="standing-big">
                        <thead>
                            <tr>
                                <th className="pos">
                                    <span className="long">Position</span>
                                    <span className="short">Pos</span>
                                </th>
                                <th className="club">Club</th>
                                <th className="pl">
                                    <span className="long">Played</span>
                                    <span className="short">Pl</span>
                                </th>
                                <th className="won">
                                    <span className="long">Won</span>
                                    <span className="short">W</span>
                                </th>
                                <th className="drawn">
                                    <span className="long">Drawn</span>
                                    <span className="short">D</span>
                                </th>
                                <th className="last">
                                    <span className="long">Last</span>
                                    <span className="short">L</span>
                                </th>
                                <th className="gf">GF</th>
                                <th className="ga">GA</th>
                                <th className="gd">GD</th>
                                <th className="pts">
                                    <span className="long">Points</span>
                                    <span className="short">Pts</span>
                                </th>
                                <th className="table-form">Form</th>
                                <th className="next">Next</th>
                                <th className="more">More</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                teams.map((team) => {
                                    return(
                                        <tr>
                                            <td className="pos">{team.position}<i className="fa-solid fa-caret-up move-icon up"></i></td>
                                            <td className="club">
                                            <div className="club-cont">
                                                <div className="club-img-cont">
                                                    <img src={team.image_url} alt={`${team.name}-logo`} />
                                                </div>
                                                <a href="">
                                                    <span className="long">{team.name}</span>
                                                    <span className="short">{team.shortName}</span>
                                                </a>
                                            </div>
                                            </td>
                                            <td className="pl">{team.played}</td>
                                            <td className="won">{team.won}</td>
                                            <td className="drawn">{team.drawn}</td>
                                            <td className="last">{team.lost}</td>
                                            <td className="gf">{team.gf}</td>
                                            <td className="ga">{team.ga}</td>
            
                                            <td className="gd">+{team.gd}</td>
                                            <td className="pts">{team.points}</td>
            
                                            <td className="table-form">
                                                <ul>
                                                    {
                                                        team.form.map((m) => {
                                                            const element = m === true ? (<li className="win"><abbr title="win">W</abbr></li>) : (<li className="loose"><abbr title="loose">L</abbr></li>);
                                                            return element
                                                        })
                                                    }
                                                </ul>
                                            </td>
                                            <td className="next">
                                                <div>
                                                    <img src={teams[team.next].image_url} alt="" />
                                                </div>
                                            </td>
                                            <td className="more">
                                                <i className="fa-solid fa-chevron-down"></i>
                                            </td>
                                        </tr>
                                    )
                                })
                            }
                        </tbody>
                    </table>
                    <Review />
                </section>
            </div>
        </main>
    )
}