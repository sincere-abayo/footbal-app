import {teams, navinationPages, navBar} from "./utils";
import {NavLink} from "react-router-dom"

export default function Header() {
    return (
        <>
            <div className="logo-container">
                <h4 className="sites">Club Sites <i className="fa-solid fa-arrow-up-right-from-square"></i></h4>
                <div className="logos">
                    {
                        teams.map((team) => {
                            return (
                                <a className="logo-link" href="#">
                                    <div className="image-container">
                                        <img className="logo-img" src={team.image_url} alt={`${team.image_url}-logo`} />
                                    </div>
                                </a>
                            )
                        })
                    }
                </div>
            </div>
            <nav className="nav-sticky">
                <div className="nav-main">
                    <img id="pr-logo" className="pr-logo" src="images/logos/pl-main-logo.png" alt="" />
                    <div className="logo-white-back"></div>
                    <div className="nav-link-container">
                        {
                            navBar.map((link) => {
                                return (
                                    <div className="nav-link">
                                        <h2>{link.name} <i className="fa-solid fa-caret-down"></i></h2>
                                        <div className="drop-down">
                                            <i className="fa-solid fa-caret-up caret"></i>
                                            <ul className="menu-drop-down">
                                                {
                                                    link.dropdown.map((page) => {
                                                        return(
                                                            <a href="">
                                                                <li>{page.name}</li>
                                                            </a>
                                                        )
                                                    })
                                                }
                                            </ul>
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>
                    <div className="nav-main-right">
                        <div className="login-container">
                            <div className="nav-link">
                                <h2>No Room For Racism</h2>
                            </div>
                            <a className="login-link" href="#"><button className="btn-login"><h2>Sign in</h2></button></a>
                        </div>
                        <div className="search-icon">
                            <i className="fa-solid fa-magnifying-glass icon"></i>
                        </div>
                        <div className="hamburger-menu">
                            <a href="">
                                <i className="fa-solid fa-bars"></i>
                            </a>
                        </div>
                    </div>
                </div>
                <ul className="ul-nav">
                    {
                        navinationPages.map((page) => {
                            return (
                                <li>
                                    <NavLink className={({isActive}) => isActive ? "active" : null} to={page.path}>
                                        <h4>{page.name}</h4>
                                        <div className="nav-bottom-bar visible"></div>
                                    </NavLink>
                                </li>
                            )
                  
                        })
                    }
                </ul>
            </nav>
            <div className="latest-match">
                <ul>
                    <li>
                        <a href="">Latest</a>
                    </li>
                    <li>
                        <a href="">Matches</a>
                    </li>
                </ul>
            </div>
        </>
    )
}