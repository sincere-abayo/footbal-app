export default function ResetFilter(props) {
    const {standingPage} = props 
    return (
        <div className={!standingPage ? "reset-filter": "reset-filter standing-page"}>
            <i className="fa-solid fa-arrow-rotate-left"></i>
            <p>RESET FILTERS</p>
        </div>
    )
}