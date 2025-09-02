import { useEffect, useState } from "react";
import { navLinks } from "../constants";


const NavBar = () =>{

    // track if the user has scrolled down the page
    const [scrolled , setScrolled] = useState(false);

    useEffect(()=>{
        // create a event listener for when a user scroll
        const handleScroll = () =>{
            // check if the user has scrolled down atleast 10px
            // if so set the state true
            const isScrolled = window.scrollY > 10;
            setScrolled(isScrolled);
        };

        // add the event listned to the window
        window.addEventListener("scroll",handleScroll);

        // cleanup the event listener when component is unmounted
        return () => window.removeEventListener("scroll",handleScroll);

    },[]);

    return(
        <header className={`navbar ${scrolled ? "scrolled":"not-scrolled"}`}>
            <div className="inner">
                <a href="#hero" className="logo">
                    Chinmay Daroliya
                </a>

                <nav className="desktop">
                    <ul>
                        {
                            navLinks.map(({link,name})=>(
                                <li key={name} className="group">
                                    <a href={link}>
                                        <span>{name}</span>
                                        <span className="underline"/>
                                    </a>
                                </li>
                            ))
                        }
                    </ul>
                </nav>

{/* Buttons */}

            <div className="flex items-center gap-3">            
                <a href="#contact" className="contact-btn group">
                    <div className="inner">
                        <span>Contact me</span>
                    </div>
                </a>

                {/* Resume button */}
                <a
                    href="/Chinmay-Resume.pdf" 
                    target="_blank" // open in new tab
                    rel="noopener noreferrer"
                    className="contact-btn group "
                    download // optional: forces download
                >
                    <div className="inner">
                        <span>Resume</span>
                    </div>
                </a>
                </div>
            </div>
        </header>
    )
}

export default NavBar;