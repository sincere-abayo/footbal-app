export default function LargeImage(props) {
    const {image_url, caption, title, subtitle} = props.container;
    return (
        <div className="large-img-container">
            <a href="#">
                <div className="img-cont">
                    <img className="large-img"  src={image_url} alt="imageThumbnail" />
                </div>
                <div className="img-content">
                    <div className="small-caption">{caption}</div>
                    <h4 className="img-title">{title}</h4>
                    <p className="img-subtitle">
                        {subtitle}
                    </p>
                </div>
            </a>
        </div>
    )

}