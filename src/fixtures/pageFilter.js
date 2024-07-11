
export default function PageFilter (props) {

    const  {currentFilter, filterType, filters} =  props.container;

    return (
        <div className="filter">
            <span>{filterType}</span>
            <p>{currentFilter}</p>
            <svg xmlns="http://www.w3.org/2000/svg" width="6" height="11" viewBox="0 0 6 11" fill="none">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M3 9.5L6 6.5H0L3 9.5Z"/>
                <path fill-rule="evenodd" clip-rule="evenodd" d="M3 1.5L0 4.5L6 4.5L3 1.5Z" />
            </svg>
            <ul>
                {filters.map((filter) => {
                    return (
                        <a href="">
                            <li>{filter}</li>
                        </a>
                    )
                })}
            </ul>
        </div>
    )
}