import LargeImage from "./largeImage";
import SmallImage from "./smallImage";
import { latestVideoSection } from "../../utils";
import BelowLink from "../sidebar/belowLink";

export default function LatestVideoSection() {
    return (
        <section className="latest-videos">
            <h2 className="section-title">Latest Videos <a href="#"><span>All Videos <i className="fa-solid fa-arrow-right"></i></span></a></h2>
            <div className="right-grid">
                <LargeImage container={latestVideoSection.largeImage}/>

                <div className="small-img-box">
                    {latestVideoSection.smallImages.map((container) => {
                        return (
                            < SmallImage
                                container={container} 
                            />
                        )
                    })}                
                </div>
                <BelowLink 
                    text="All videos"
                />
            </div>
            <div className="divider"></div>
        </section>
    )
}