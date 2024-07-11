import SideBar from "../sidebar/sidebar";
import LargeImage from "./largeImage";
import MediumImageContainer from "./mediumImageContainer";
import { headingSection } from "../../utils";

export default function HeadingSection () {
    return (
        <section className="news-headings">
            
            <div className="right-grid">
                <SideBar />
                <LargeImage container={headingSection.largeImage}/>
                <MediumImageContainer container={headingSection.mediumImages} />
            </div>
            <div className="news-headings-bottom">
                <div className="playlist">
                    <div>
                        <a href="#">
                            <div className="aside-logo-container"><i className="fa-solid fa-play"></i></div>
                            <p>Watch: How the title race swung Man City's way in Matchweek 33</p>
                        </a>  
                    </div>
                    <div>
                        <a href="#">
                            <div className="aside-logo-container"><i className="fa-solid fa-bars"></i></div>
                            <p>Why the Premier League title race is NOT over yet</p>
                        </a> 
                    </div>
                    <div>
                        <a href="#">
                            <div className="aside-logo-container"><i className="fa-solid fa-bars"></i></div>
                            <p>Newcastle ‘unsilence the crowd’ by helping deaf fans feel the noise</p>
                        </a> 
                    </div>
                </div>
            </div>
        </section>
    )
}