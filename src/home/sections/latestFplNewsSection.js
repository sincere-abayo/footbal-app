import BelowLink from "../sidebar/belowLink";
import { latestFplNewsSection } from "../../utils";
import MediumImage from "./mediumImage";

export default function LatestFplNewsSection() {
    return (
        <section className="latest-fpl-news">
            <div className="editors-choice-container">

        
                <h2 className="section-title">Latest FPL News <a href="#"><span>More News <i className="fa-solid fa-arrow-right"></i></span></a></h2>
            
                <div className="editors-choice-imgs">
                    {
                        latestFplNewsSection.map((container) => {
                            return (
                                <MediumImage
                                    container={container}
                                />
                            )
                        })
                    }
                </div>
                <BelowLink text="More News"/>

            </div>
        </section>
    )
}