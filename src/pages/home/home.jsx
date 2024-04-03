import './home.css'
import React, { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';
import { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from '@tsparticles/slim';
//import { loadAll } from '@tsparticles/all';
//import { loadFull } from 'tsparticles';
import Banner from '../../components/banner/banner';
import About from '../../components/about/about';
import Skills from '../../components/skills/skills';
import Projects from '../../components/projects/projects';
import Contact from '../../components/contact/contact';

gsap.registerPlugin(ScrollTrigger);
//ScrollTrigger.normalizeScroll(true);

function Home() {
    useEffect(() => {
        // GSAP
        setTimeout(() => { //permet de revérifier les ScrollTrigger une fois le DOM chargé (pour bug mobile)
            ScrollTrigger.refresh();
        }, 1000);

        const separators = gsap.utils.toArray(".separator");
        separators.forEach((that) => {
            gsap.fromTo(that, {
                width: 0,
                left: "47.5vw"
            }, {
                width: "40vw",
                left: "29.85vw",
                duration: 0.5,
                scrollTrigger: {
                    trigger: that,
                    start: "bottom bottom",
                    end: "bottom center",
                    toggleActions: "play pause none reverse",
                }
            });
        });

        // tsParticles
        initParticlesEngine(async (engine) => {
            // you can initiate the tsParticles instance (engine) here, adding custom shapes or presets
            // ex: await loadHyperspacePreset(engine);
            // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
            // starting from v2 you can add only the features you need reducing the bundle size
            //await loadAll(engine);
            //await loadFull(engine);
            await loadSlim(engine);
            //await loadBasic(engine);
        });
    }, []);

    return (
        <main>
            <Banner />
            <About />
            <div className='separator'></div>
            <Skills />
            <div className='separator'></div>
            <Projects />
            <div className='separator'></div>
            <Contact />
        </main>
    )
}

export default Home