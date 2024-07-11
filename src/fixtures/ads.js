import { useEffect } from "react";

export default function Ads () {
    // useEffect(() => {

    //     const mediaQuery = window.matchMedia('(min-width: 900px)');
    //     const ads = document.querySelector('.ads');

    //     const handleScroll = () => {
    //         if (window.scrollY > 64 && mediaQuery.matches) {
    //             ads.style.display = 'none';
    //         } else if (window.scrollY < 1 && mediaQuery.matches) {
    //             ads.style.display = 'flex';
    //         }

    //     };
    //     window.addEventListener('scroll', handleScroll);
    //     return () => {
    //         window.removeEventListener('scroll', handleScroll);
    //     };
    // }, []);
    return (
        <section className="ads">
            <div className="google-ads">

            </div>
        </section>
    )
}