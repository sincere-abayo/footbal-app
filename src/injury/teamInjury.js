export default function TeamInjury (props) {
    const {team} = props;
    return (
        <div className="each-team-injury">
            <div className="team-injury-container">
                <div className={`team-injury-heading ${team.color}`}>
                    <img src={team.image_url} alt="" />
                    <h2>{team.name}</h2>
                </div>
                <table className="team-injury-table">
                    <thead>
                        <tr>
                            <th>Player</th>
                            <th>Injury</th>
                            <th>Latest Updates</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            team.injuries.map((injury) => {
                                return(
                                    <tr>
                                        <td className="pl-name">{injury.name}</td>
                                        <td>{injury.injury}</td>
                                        <td>
                                            <a href="">
                                                Details
                                                <i className="fa-solid fa-arrow-up-right-from-square"></i>
                                            </a>
                                        </td>
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </table>

            </div>
        </div>
    )
}