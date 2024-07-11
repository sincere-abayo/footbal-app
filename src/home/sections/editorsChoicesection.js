import { editorsChoiceSection } from "../../utils"
import BelowLink from "../sidebar/belowLink"
import MediumImage from "./mediumImage"

export default function EditorsChoiceSection () {
    return (
        <section className="editors-choice">
            <div className="editors-choice-container">
                <h2 className="section-title">Editor's Choice <a href="#"><span>More News <i className="fa-solid fa-arrow-right"></i></span></a></h2>
                <div className="editors-choice-imgs">
                    {editorsChoiceSection.map((container) => {
                        return (
                            <MediumImage 
                                container={container}
                            />
                        )
                    })}
                </div>
                <BelowLink 
                    text="More News"
                />
            </div>
        </section>
    )
}