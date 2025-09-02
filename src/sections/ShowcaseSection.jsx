import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef } from "react";
import { gsap } from "gsap";

gsap.registerPlugin(ScrollTrigger)

const ShowcaseSection = () => {

    const sectionRef = useRef(null);
    const Project1 = useRef(null);
    const Project2 = useRef(null);
    const Project3 = useRef(null);

    useGSAP(()=>{
        // animation for the main section
        gsap.fromTo(
            sectionRef.current,
            {opacity:0},
            {opacity:1,duration:1.5}
        );

        // animation for each app showcase
        const cards = [Project1.current,Project2.current,Project3.current];

        cards.forEach((card,index)=>{
            gsap.fromTo(
                card,
                {
                    y:50,
                    opacity:0
                },
                {
                    y:0,
                    opacity:1,
                    duration:1,
                    delay:0.3 * (index+1),
                    scrollTrigger: {
                        trigger:card,
                        start: "top bottom-=100"
                    }
                }
            );
        })

    },[]);


    return(
        <section id="work" ref={sectionRef} className="app-showcase">
            <div className="w-full">
                <div className="showcaselayout">
                    {/* Left */}
                    <div className="first-project-wrapper" ref={Project1}>
                        <div className="image-wrapper">
                            <img src="/images/project1.png" alt="Boom interface" />
                        </div>
                        <div className="text-content">
                             <a
                                href="https://fin-port.vercel.app"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="hover:underline"
                            >
                            <h2>
                                FinPort - Modern Banking Application
                            </h2>
                            </a>
                            <p className="text-white-50 md:text-xl">
                                FinPort is a full-stack banking application built with Next.js that provides users with a seamless digital banking experience, including account management, transactions, and payment transfers.
                            </p>
                            
                        </div>
                    </div>

                    {/* right */}
                    <div className="project-list-wrapper overflow-hidden">
                        <div className="project" ref={Project2}>
                            <div className="image-wrapper bg-[#FFEFDB]">
                                <img 
                                    src="/images/project2.png"
                                    alt="BOOM Streaming Platform"
                                />
                            </div>
                          <a
                                href="https://boom-53at.onrender.com/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="hover:underline"
                            >
                            <h2>BOOM Platform - Full-Stack Video Streaming Platform</h2>
                            </a>
                        </div>

                        <div className="project" ref={Project3}>
                            <div className="image-wrapper bg-[#FFE7EB]">
                                <img src="/images/project3.png" alt="GeoWords" />
                            </div>
                            <a
                                href="https://geo-words.vercel.app"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="hover:underline"
                            >
                                <h2>GeoWords – A What3Words-Inspired Location System for India</h2>
                             </a>   
                        </div>
                    </div>

                </div>
            </div>
        </section>
    )
}

export default ShowcaseSection;