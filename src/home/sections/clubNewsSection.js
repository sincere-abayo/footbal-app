import { clubNewsSection } from "../../utils";
import BelowLink from "../sidebar/belowLink";
import MediumImage from "./mediumImage";

export default function ClubNewsSection () {
    return (
        <section className="club-news">


            <div className="editors-choice-container">

        
                <h2 className="section-title">Club News <a href="#"><span>More News <i className="fa-solid fa-arrow-right"></i></span></a></h2>
            
                <div className="editors-choice-imgs">
                    {clubNewsSection.map((container) => {
                        return (
                            <MediumImage container={container}/>
                        )
                    })}
                </div>

                <BelowLink text="More clubs"/>
                
            </div>

        </section>
    )
}