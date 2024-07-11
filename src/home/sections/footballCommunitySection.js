import { footballCommunitySection } from "../../utils"
import LargeImage from "./largeImage"
import SmallImage from "./smallImage"

export default function FootballCommunitySection () {
    return (
        <section className="no-room-for-racism">
            <h2 className="section-title">No Room For Racism <a href="#"><span>All Videos <i className="fa-solid fa-arrow-right"></i></span></a></h2>
            <div className="right-grid">
                <LargeImage container={footballCommunitySection.largeImage}/>
                <div className="small-img-box">
                    {footballCommunitySection.smallImages.map((img) => {
                        return(
                            <SmallImage container={img}/>
                        )
                    })}                
                </div>
            </div>
        </section>
    )
}