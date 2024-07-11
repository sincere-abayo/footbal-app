import { tableReview } from "../../utils"
export default function Review() {
    return (
        <div className="review">
           {tableReview.map((review) => {
                return(
                    <p>{review}</p>
                )
           })}
        </div>
    )
}