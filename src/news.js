import Ads from "./fixtures/ads";
import FixtureHeader from "./fixtures/fixtureHeader";
import PageFiltersSection from "./fixtures/pageFiltersSection";
import LargeImage from "./home/sections/largeImage";

import { pages } from "./utils";

export default function News() {
    return (
        <main>
            <Ads/>
            <FixtureHeader container={
                pages.news.header
            }/>
   
            <div className="fixtures-contents">
                <PageFiltersSection container={pages.news}/>
                <section className="news-container">
                    {
                        pages.news.news.map((img) => {
                            return (
                                <LargeImage container={img}/>
                            )
                        })
                    }
                </section>
            </div>

        </main>
    )
}