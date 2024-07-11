import Ads from "./fixtures/ads"
import FixtureHeader from "./fixtures/fixtureHeader"
import StatsContainer from "./stats/statsContainer"
import { pages} from "./utils"


export default function Stats() {
    return (
        <main>
            <Ads/>
            <FixtureHeader container={
                pages.stats.header
            }/>
            <div className="stats-wrapper">
                <h2>2023/24 Player Stats</h2>
                <section className="stats-containers-wrapper">
                    {
                        pages.stats.statistics.players.map((category) => {
                            return (
                                <StatsContainer container={category}/>
                            )
                        })
                    }
                </section>
                <h2>2023/24 Club Stats</h2>
                <section className="stats-containers-wrapper">
                    {
                        pages.stats.statistics.clubs.map((category) => {
                            return (
                                <StatsContainer container={category}/>
                            )
                        })
                    }
                </section>
            </div>
        </main>
    )
}