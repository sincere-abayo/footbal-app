import Ads from "./fixtures/ads";
import FixtureHeader from "./fixtures/fixtureHeader";
import { players, sponsors } from "./utils";


import { pages } from "./utils";

import PageFiltersSection from "./fixtures/pageFiltersSection";
import AwardContainer from "./awards/awardContainer";

const player = players[0]

export default function Awards () {
    return (
        <main>
            <Ads/>
            <FixtureHeader container={
                pages.awards.header
            }/>
            <div className="fixtures-contents">
                <PageFiltersSection container={pages.awards}/>

            <section className="award-page-wrapper">
                <h2 className="section-title">April 2024</h2>

                <div className="award-container-wrapper">
                   <AwardContainer 
                        sponsor={sponsors[1]}
                        player={player}
                    />
                      <AwardContainer 
                        sponsor={sponsors[1]}
                        player={player}
                    />
                      <AwardContainer 
                        sponsor={sponsors[1]}
                        player={player}
                    />
                  
                </div>
          
                
            </section>

            </div>
        </main>
    )
}