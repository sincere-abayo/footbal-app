import MediumImage from "./mediumImage"

export default function MediumImageContainer(props) {
    const {container} = props
    return (
        <div className="medium-imgs">
            {
                container.map((img) => {
                    return(
                        <MediumImage container={img} />
                    )
                })
            }
        </div>
    )
} 