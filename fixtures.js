const filters = document.querySelectorAll('.filter');
const dropdown = document.querySelector('.filter ul');

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

    // Toggle the display of the list
    ul.style.display = (ul.style.display === 'flex' ? 'none' : 'flex');

    // Prevent the click event from bubbling up
    event.stopPropagation();
}
document.body.addEventListener('click', (event) => {
    filters.forEach(filter => {
        filter.querySelector('ul').style.display = 'none';
    })
    event.stopPropagation();
})