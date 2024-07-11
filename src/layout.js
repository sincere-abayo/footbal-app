import Header from "./header";
import Footer from "./footer";
import { Outlet } from "react-router-dom";
import { useEffect } from "react";

export default function Layout () {
    useEffect(() => {
        const stickyElement = document.querySelector('.logo-white-back');
        const mediaQuery = window.matchMedia('(min-width: 900px)');
        const ads = document.querySelector('.ads');

        const handleScroll = () => {
            if (window.scrollY > 64 && mediaQuery.matches) {
                stickyElement.classList.add('unhide-logo-background');
                document.querySelector('.pr-logo').classList.add('medium');
            } else {
                stickyElement.classList.remove('unhide-logo-background');
                document.querySelector('.pr-logo').classList.remove('medium');
            }
            if(ads){
                if (window.scrollY > 64 && mediaQuery.matches) {
                    ads.style.display = 'none';
                } else if (window.scrollY < 1 && mediaQuery.matches) {
                    ads.style.display = 'flex';
                }
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);
    return (
    <>
        <Header/>
        <Outlet />
        <Footer/>
    </>
    )
}