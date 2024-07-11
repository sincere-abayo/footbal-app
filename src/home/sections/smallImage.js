export default function SmallImage(props) {
    const {image_url, caption, subtitle} = props.container;
    return (
        <div className="small-img-container">
            <a href="#">
                <div className="img-cont">
                    <img className="small-img" src={image_url} alt="" />
                </div>
                <div className="img-content">
                    <p className="small-caption">{caption}</p>
                    <p className="img-subtitle">
                        {subtitle}
                    </p>
                </div>
            </a>
        </div>
    )
}