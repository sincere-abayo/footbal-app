export default function FixtureHeader (props) {
    const {title, filters, pageType} = props.container;
    return (
        <section className={pageType ? `fixtures-header ${pageType}` : "fixtures-header"}> 
        { !pageType ? (
                    <ul className="fixtures-ul">
                    <h1>{title}</h1>
                    {
                        filters.map((filter) => {
                            return (
                                <a href="">
                                    <li>{filter}</li>
                                </a>
                            )
                        })
                    }
                </ul>) :
                (<h1>{title}</h1>)
        }
        </section>
    )
}