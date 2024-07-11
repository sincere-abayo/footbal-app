export default function InjuryContainer (props) {
    const {title, image_url, team_logo} = props.container;
    return (
        <div className="injury-container">
            <div className="injury-img-container">
                <img src={image_url} alt="" />
            </div>
            <h3 className="injury-item-title">
                {title}
                <img src={team_logo} alt="" />
            </h3>
            <p>
                <a href="">
                    More detail
                    <i className="fa-solid fa-arrow-up-right-from-square"></i>
                </a>
            </p>
        </div>
    )
}