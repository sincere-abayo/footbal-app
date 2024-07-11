import { teams } from "../../utils"

export default function SmallTable() {
    return (
        <table className="standing">
            <thead>
                <tr>
                    <th className="pos">Pos</th>
                    <th className="club">Club</th>
                    <th className="pl">Pl</th>
                    <th className="gd">GD</th>
                    <th className="pts">Pts</th>
                </tr>
            </thead>
            <tbody>
                {teams.map((team) => {
                    return (
                        <tr>
                            <td className="pos">{team.position}<i className="fa-solid fa-caret-up move-icon up"></i></td>
                            <td className="club">
                            <div className="club-cont">
                                <div className="club-img-cont">
                                    <img src={team.image_url} alt={`${team.name}-logo`} />
                                </div>
                                <a href="">{team.name}</a>
                            </div>
                            </td>
                            <td className="pl">{team.played}</td>
                            <td className="gd">+{team.gd}</td>
                            <td className="pts">{team.points}</td>
                        </tr>
                    )
                })}
            </tbody>
        </table>
    )
}