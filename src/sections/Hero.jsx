import React from 'react';
import { words } from '../constants';
import Button from '../components/Button';
import HeroExperience from '../components/models/HeroModels/HeroExperience';
import {useGSAP} from '@gsap/react';
import gsap from 'gsap';
import AnimatedCounter from '../components/AnimatedCounter';

const Hero = () => {

    // when component mounts run this application
    useGSAP(()=>{
        gsap.fromTo(  
          ".hero-text h1", //who to animate (all h1 inside hero-text)
          {
            y:50,         //start: 50px down + invisible
            opacity:0
          },
          {
            y:0,          //end: original spot  
            opacity:1,    //end: fully visible      
            stagger:0.2,  //each h1 start after 0.2 sec
            duration:1,   //each animation last 1 sec
            ease:"power2.inOut" //smoth easing
          }
        );
    })

    return (
       <section id='hero' className='relative overflow-hidden'>

        <div className='absolute left-0 top-0 z-10'>
            <img src='/images/bg.png' alt='hero-bg'/>
        </div>

        <div className='hero-layout'>
            {/* Left hero content */}
            <header className='flex flex-col justify-center md:w-full w-screen md:px-20 px-5'>
                <div className='flex flex-col gap-7'>
                <div className='hero-text'>
                    <h1>
                        Shading
                        <span className='slide'>
                            <span className='wrapper'>
                                {words.map((word,index)=>(
                                    
                                    <span key={index} className='flex items-center md:gap-3 gap-1 pb-2'>
                                        <img 
                                            src={word.imgPath} 
                                            alt="person"
                                            className='xl:size-12 md:size-10 size-7 md:p-2 p-1 rounded-full bg-white-50' 
                                        />
                                        <span>{word.text}</span>
                                    </span>

                                ))}
                            </span>
                        </span>
                    </h1>
                    <h1>into Real Projects</h1>
                    <h1>that Deliver Results</h1>
                </div>

                <p className='text-white-50 md:text-xl relative z-10 pointer-events-none'>
                    Hi, I’m Chinmay, a developer based in India with a passion for crafting clean, modern code             
                </p>

                <Button
                    text="See My Work"
                    className="md:w-80 md:h-16 w-60 h-12"
                    id="counter"
                    
                />
                </div>
            </header>   
            
            {/* 3D modal */}
            <figure>
                <div className='hero-3d-layout'>
                    <HeroExperience/>
                </div>            
            </figure>
        </div>

        <AnimatedCounter/>

       </section>
    )
}

export default Hero;