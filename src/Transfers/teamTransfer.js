export default function TeamTransfer (props) {
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
                            <th>Transfer Type</th>
                            <th>Club</th>
                            <th>Full Details</th>
                        </tr>
                    </thead>
                    <tbody>
                        { 
                            team.transfers.map((transfer) => {
                                return(
                      
                                    <tr>
                                        <td className="pl-name">{transfer.name}</td>
                                        <td>{transfer.type}</td>
                                        <td>{transfer.club}</td>
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