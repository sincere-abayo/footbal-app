import BelowLink from "../home/sidebar/belowLink"


export default function StatsContainer (props) {
    const {title, statList, type} = props.container;
    const {leading} = statList;
    const {stats} = statList;

    const element =  type === "player" ? (
        <div className="stats-container">
            <h3>{title}</h3>
            <div className="leading">
                <div className="leading-content">
                    <span className="leading-position">1</span>
                    <span className="leading-firstname">{leading.firstname}</span>
                    <span className="leading-lastname">{leading.lastname}</span>
                    <div className="leading-team">
                        <div className="leading-team-img-cont">
                            <img src={leading.team.image_url} alt=""/>
                        </div>
                        <span className="leading-team-name">{leading.team.name}</span>
                    </div>
                    <span className="leading-goals">{leading.wins}</span>
                </div>
                <div className="leading-img-cont">
                    <img src={leading.image_url} alt=""/>
                </div>
            </div>
            <ul className="stats-ul">
                {
                    stats.map((stat) => {
                        return(
                            <li>
                                <div>
                                <span className="stats-pos">2</span>
                                <div className="stats-img-cont">
                                    <img src={stat.team.image_url} alt=""/>
                                </div>
                                <div className="stats-team-container">
                                        <span className="stats-name">{stat.fullname}</span>
                                        <span className="stats-team-name">{stat.team.name}</span>
                                </div>
                                </div>
                                <span className="stats-goal">
                                    {stat.wins}
                                </span>
                            </li>
                        )
                    })
                }
        
                <BelowLink text="View Full List"/>
            </ul>
        </div>) : 
        (<div className="stats-container">
            <h3>{title}</h3>
            <div className="leading">
                <div className="leading-content">
                    <span className="leading-position">1</span>
                    <span className="leading-lastname">{leading.name}</span>
                    <span className="leading-team-name">{leading.stadium}</span>
                    <div className="leading-team">
                    </div>
                    <span className="leading-goals">{leading.won}</span>
                </div>
                <div className="leading-img-cont">
                    <img src={leading.image_url} alt=""/>
                </div>
            </div>
            <ul className="stats-ul">
                {
                    stats.map((stat) => {
                        return(
                            <li>
                                <div>
                                <span className="stats-pos">2</span>
                                <div className="stats-img-cont">
                                    <img src={stat.image_url} alt=""/>
                                </div>
                                <div className="stats-team-container">
                                        <span className="stats-name">{stat.name}</span>
                                        <span className="stats-team-name">{stat.stadium}</span>
                                </div>
                                </div>
                                <span className="stats-goal">
                                    {stat.won}
                                </span>
                            </li>
                        )
                    })
                }
        
                <BelowLink text="View Full List"/>
            </ul>
        </div>)
    return element  
}