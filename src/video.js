import { useEffect, useState } from "react"
import { pages } from "./utils";
import MediumImage from "./home/sections/mediumImage";
import BelowLink from "./home/sidebar/belowLink";

export default function VideoPage() {
    const videos = [
        {
            title: "Watch Man City lift the 2023/24 Premier League Trophy",
            subtitle: "Enjoy Man City's celebrations as they are crowned champions for an unprecedented fourth successive season",
            image_url: "images/video/Bsawmrzz.webp"
        },
        {
            title: "FPL champion Jonas Sand Labakk on Fantasy Show",
            subtitle: "After beating almost 11m FPL managers to the 2023/24 title, the Norwegian chats about the secrets of his success",
            image_url: "images/video/4bgpUJkS.webp"   
        },
        {
            title: "Fantasy Show: Team of the Season 2023/24",
            subtitle: "How many of these players were big points scorers for your squad? It’s the highest-scoring FPL team of the season!",
            image_url: "images/video/sRGE3hpw.webp"
        }
    ]
    const [ index, setIndex] = useState(0);
    const [ displayVideo, setDisplayVideo ] = useState(videos[index]); 

    useEffect (() => {
        setDisplayVideo(videos[index])
    }, [index])
    function handleForward() {
        if (index < videos.length - 1){
            setIndex(index + 1)
            // setDisplayVideo(videos[index]);
        } else {
            setIndex(0);
            // setDisplayVideo(videos[index]); 
        }
    }
    function handleBackward() {
        if (index > 0){
            setIndex(index - 1);
            // setDisplayVideo(videos[index]);
        } else {
            setIndex(videos.length - 1);
            // setDisplayVideo(videos[index])
        }
    }
    return (
        <main>

            <section className="video-hero">
                <div className="video-hero-content-container">
                    <div className="video-hero-content">
                        <h3>
                            {displayVideo.title}
                        </h3>
                        <p>
                            {displayVideo.subtitle}
                        </p>
                        <button>
                            Watch Video
                        </button>
                        <div className="toggle-videos">
                            <button className="backward" onClick={handleBackward}>
                                <i className="fa-solid fa-arrow-right"></i>
                            </button>
                            <button className="forward" onClick={handleForward}>
                                <i className="fa-solid fa-arrow-right"></i>
                            </button>
                        </div>
                    </div>
                    <div className="video-hero-img-cont">
                        <img src={displayVideo.image_url} alt=""/>
                        <div className="video-pagination">
                            {
                                videos.map((video, idx) => {
                                    return(
                                        <div className={idx !== index ? "video-dot-pagination" : "video-dot-pagination active"}></div>
                                    )
                                })
                            }
                        </div>
                
                    </div>
                </div>
            </section>
            <div className="video-page-wrapper">
                <h2 className="section-title">Most Watched <a href="#"><span>More News <i className="fa-solid fa-arrow-right"></i></span></a></h2>
                
                <div className="editors-choice-imgs">
                    {
                        pages.video.mostWatched.map((container) => {
                            return (
                                <MediumImage
                                    container={container}
                                />
                            )
                        })
                    }
                </div>

                <h2 className="section-title">Interviews <a href="#"><span>More News <i className="fa-solid fa-arrow-right"></i></span></a></h2>
                
                <div className="editors-choice-imgs">
                    {
                        pages.video.interviews.map((container) => {
                            return (
                                <MediumImage
                                    container={container}
                                />
                            )
                        })
                    }
                </div>

                <h2 className="section-title">Fan Mail <a href="#"><span>More News <i className="fa-solid fa-arrow-right"></i></span></a></h2>
                <div className="editors-choice-imgs">
                    {
                        pages.video.fanMails.map((container) => {
                            return (
                                <MediumImage
                                    container={container}
                                />
                            )
                        })
                    }
                </div>
          
            </div>

            <section className="popular-playlist">
                    <h2 className="section-title">Popular Playlists <a href="#"><span>More News <i className="fa-solid fa-arrow-right"></i></span></a></h2>
                    <div className="playlists-wrapper">
                        <div className="playlist-cont">
                            <img src="images/video/GettyImages-1655561195.webp" alt=""/>
                            <div className="playlist-info">
                                <h3 className="playlist-title">2023/24 HIGHLIGHTS</h3>
                                <button>View All</button>
                            </div>
                        </div>
                        <div className="playlist-cont">
                            <img src="images/video/image.webp" alt=""/>
                            <div className="playlist-info">
                                <h3 className="playlist-title">FANTASY PREMIER LEAGUE</h3>
                                <button>View All</button>
                            </div>
                        </div>
                        <div className="playlist-cont">
                            <img src="images/video/GettyImages-1642641976.webp" alt=""/>
                            <div className="playlist-info">
                                <h3 className="playlist-title">BEST OF</h3>
                                <button>View All</button>
                            </div>
                        </div>
                        <div className="playlist-cont">
                            <img src="images/video/CommunitiesPLImage.webp" alt=""/>
                            <div className="playlist-info">
                                <h3 className="playlist-title">COMMUNITIES</h3>
                                <button>View All</button>
                            </div>
                        </div>
                    </div>
            </section>
            <div className="video-page-wrapper">
                <h2 className="section-title">Most Watched <a href="#"><span>More News <i className="fa-solid fa-arrow-right"></i></span></a></h2>
                
                <div className="editors-choice-imgs">
                    {
                        pages.video.mostWatched.map((container) => {
                            return (
                                <MediumImage
                                    container={container}
                                />
                            )
                        })
                    }
                </div>

                <h2 className="section-title">Interviews <a href="#"><span>More News <i className="fa-solid fa-arrow-right"></i></span></a></h2>
                
                <div className="editors-choice-imgs">
                    {
                        pages.video.interviews.map((container) => {
                            return (
                                <MediumImage
                                    container={container}
                                />
                            )
                        })
                    }
                </div>

                <h2 className="section-title">Fan Mail <a href="#"><span>More News <i className="fa-solid fa-arrow-right"></i></span></a></h2>
                <div className="editors-choice-imgs">
                    {
                        pages.video.fanMails.map((container) => {
                            return (
                                <MediumImage
                                    container={container}
                                />
                            )
                        })
                    }
                </div>
                <div className="personalised-video">
                    <div className="personalised-video-content">
                        <h3 className="personalised-video-title">All of Your Club’s Videos</h3>
                        <p>Login and confirm your favourite team to get access to more personalised video content, including iconic moments, match highlights and best ever goals.</p>
                        <a href="#"><span>Confirm Your Favorite Team <i className="fa-solid fa-arrow-right"></i></span></a>
                    </div>
                    <div className="personalised-video-img">
                    </div>
                </div>
                <h2 className="section-title">Things you may have missed <a href="#"><span>More News <i className="fa-solid fa-arrow-right"></i></span></a></h2>
                
                <div className="editors-choice-imgs">
                    {
                        pages.video.mostWatched.map((container) => {
                            return (
                                <MediumImage
                                    container={container}
                                />
                            )
                        })
                    }
                </div>

                <h2 className="section-title">Quickfire questions <a href="#"><span>More News <i className="fa-solid fa-arrow-right"></i></span></a></h2>
                
                <div className="editors-choice-imgs">
                    {
                        pages.video.interviews.map((container) => {
                            return (
                                <MediumImage
                                    container={container}
                                />
                            )
                        })
                    }
                </div>
          
            </div>
        
        </main>
  



    )
}