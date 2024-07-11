export default function Match(props) {
    const {team1, team2, time, link, sidebar} = props;
    return (
        <div className="match">
            <div className="team">
                {sidebar ? (  <p>{team1.shortName}</p> ) : ( <p>{team1.name}</p>)}
                <img src={team1.image_url} alt={team1.name} />
            </div>
            <div className="time"><p>{time}</p></div>
            <div className="team">
                <img src={team2.image_url} alt={team2.name} />
                {sidebar ? (  <p>{team2.shortName}</p> ) : ( <p>{team2.name}</p>)}
            </div>
            {link && (<div className="match-link"><i className="fa-solid fa-arrow-right match-link"></i></div>)}
        </div>
    )
}