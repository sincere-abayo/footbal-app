import BelowLink from "../sidebar/belowLink";
import MediumImage from "./mediumImage";
import { latestNewsSection } from "../../utils";

export default function LatestNewsSection () {
    return (
        <section className="latest-news">
            <div className="editors-choice-container">

        
            <h2 className="section-title">Latest News<a href="#"><span>More News <i className="fa-solid fa-arrow-right"></i></span></a></h2>
        
            <div className="editors-choice-imgs">
            {
                latestNewsSection.map((container) => {
                    return (
                        <MediumImage 
                            container={container}
                        />
                    )
                })
            }
            </div>
            <BelowLink
                text="More News"
            />

            </div>
        </section>
    )
}