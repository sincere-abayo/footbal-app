export default function BelowLink(props) {
    return (
        <div className="fixtures">
            <a href="">
                <p>{props.text} <i className="fa-solid fa-arrow-right"></i></p>
            </a>
        </div>
    )
}