import { useEffect } from "react";
import PageFilter from "./pageFilter"
import ResetFilter from "./resetFilter"

export default function PageFiltersSection (props) {
    useEffect(() => {
        const filters = document.querySelectorAll('.filter');

        filters.forEach(filter => {
            filter.addEventListener('click', handleFilterClick);
        })

        function handleFilterClick(event) {
            filters.forEach(filter => {
                if (filter !== this){
                    filter.querySelector('ul').style.display = 'none';
                }
            })
            const ul = this.querySelector('ul');
            ul.style.display = (ul.style.display === 'flex' ? 'none' : 'flex');
        }
        function handleClickOutside(event) {
                if (filters) {
                    filters.forEach(filter => {
                        if(!filter.contains(event.target)){
                            filter.querySelector('ul').style.display = "none";
                        }
                    })
                }
        }
        document.addEventListener('click', handleClickOutside);
        return () => {
            document.removeEventListener('click', handleClickOutside);
            filters.forEach(filter => {
                filter.removeEventListener('click', handleFilterClick);
            })
        };
    }, []);
    const {filters, standingPage} = props.container;
    return (
        <section className="page-filters">
            {
                filters.map((filter) => {
                    return (
                        <PageFilter container={
                            filter
                        } />
                    )
                })
            }
            {standingPage && (<ResetFilter standingPage={true}/>)}
            {!standingPage && (
                <>
                    <ResetFilter />
                    <div className="fixture-calendar">
        
                            <i className="fa-regular fa-calendar-plus"></i>
                            <p>Add fixtures to calendar</p>
                    </div>
                </>
            )}
        </section>
    )
}