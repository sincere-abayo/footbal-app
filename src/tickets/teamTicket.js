export default function TeamTickets (props) {
    const {team} = props;
    return (
        <div className="each-team-injury">
            <div className="team-injury-container">
                <div className={`team-injury-heading ${team.color}`}>
                    <img className="team-ticket-logo" src={team.image_url} alt="" />
                    <h2>{team.name}</h2>
                </div>
                <div className="promo-content">
                    <h3>Typically, tickets at Villa Park for Aston Villa fans are released in 3 stages.</h3>
                    <p>These will go on sale to Silver Members two calendar months prior to each home fixture. Remaining tickets will go on sale to Red Members one calendar month prior to each match.</p>
                    <p>For more information, use the Arsenal club website links below.</p>
                    <div className="promo-content-btn">
                        <button>Club Tickets
                        <i className="fa-solid fa-arrow-up-right-from-square"></i>
                        </button>
                        <button>Club Membership
                        <i className="fa-solid fa-arrow-up-right-from-square"></i>
                        </button>
                        <button>More Information
                        <i className="fa-solid fa-arrow-right"></i>
                        </button>
                    </div>
               
                </div>
            </div>
        </div>
    )
}