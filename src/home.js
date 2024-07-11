import ClubNewsSection from "./home/sections/clubNewsSection";
import EditorsChoiceSection from "./home/sections/editorsChoicesection";
import FootballCommunitySection from "./home/sections/footballCommunitySection";
import HeadingSection from "./home/sections/headingSection";
import LatestFplNewsSection from "./home/sections/latestFplNewsSection";
import LatestNewsSection from "./home/sections/latestNewsSection";
import LatestVideoSection from "./home/sections/latestVideoSection";
import SponsorsSection from "./home/sections/sponsorsSection";



export default function Home () {
    return (
        <main>
            <HeadingSection />
            <SponsorsSection/>
            <EditorsChoiceSection />
            <LatestVideoSection />
            <LatestNewsSection />
            <LatestFplNewsSection />
            <FootballCommunitySection />
            <section className="nike-advert">
                <div className="nike-advert-container">
                    <svg  className="white-tria" viewBox="0 0 100 100">
                        <polyline points="0,0 0,100 100,100 45,0"></polyline>
                    </svg>
                    <div className="nike-ball">
                        <img src="images/combined_ball_image_Flight2324-Spring.webp" alt="" />
                    </div>
                    <div className="adv-content">
                        <div className="adv-title">NIKE BALL HUB</div>
                        <p className="adv">Discover the history of the Nike ball and its 24-year association with the Premier League, from the Nike Geo Merlin in 2000/01 to the Nike Flight in 2023/24.</p>
                        <div className="adv-link">
                            <a href="">
                                <p>Explore now <i className="fa-solid fa-arrow-right"></i></p>
                            </a>
                        </div>
                    </div>
                </div>
            
            </section>
            <ClubNewsSection />
           
        </main>
    )
}