'use client'
import React, { useCallback } from 'react'
import Particles from "react-tsparticles";
import type { Engine } from "tsparticles-engine";
import { loadFull } from "tsparticles";
import particlesOptions from "../particles.json";
import { ISourceOptions } from "tsparticles-engine";
import { Box, Button, ButtonGroup } from '@mui/material';
import styles from './page.module.css'
import Preview from './preview';
import KeyboardDoubleArrowLeftIcon from '@mui/icons-material/KeyboardDoubleArrowLeft';

function page() {

  const particlesInit = useCallback(async (engine: Engine) => {
    await loadFull(engine);
  }, []);

  return (
    <>
    
    
      <div 
      style={{
        display:'flex',
        flexDirection:'column', 
        alignItems:'center', 
        justifyContent:'flex-start' , 
        width:'100vw', 
        height:'100vh',
        }}>
          <div className={styles.titre}>small projects</div>
        <div className={styles.up}>
          <Preview 
          image='PythonWebScraper.png' 
          text="< Python > < selenium >" 
          title="google scraper" 
          description="scrap all the url" 
          href='https://github.com/khasey/googlescraper'
          />
          <Preview 
          image='goscrap.jpg' 
          text="< golang >" 
          title="gofinder" 
          description="find all comon vuln" 
          href='https://github.com/khasey/goFinder'
          />
          <Preview 
          image='javascrap.jpg' 
          text="< javascript >" 
          title="ultra" 
          description="vuln detector on urls" 
          href='https://github.com/khasey/ultra_finder'
          />
          <Preview 
          image='PythonWebScraper.png' 
          text="< python >" 
          title="onion search" 
          description="onion sites scraper" 
          href='https://github.com/khasey/onionsearch'
          />
        </div>
        <div className={styles.titre2}>big projects</div>
        <div className={styles.down}>
        <Preview 
          image='netflix.jpg' 
          text="< react >" 
          title="netflix_clone" 
          description="perfect clone of netflix" 
          href='https://github.com/khasey/Netflix_clone'
          />
          <Preview 
          image='smart_city.jpg' 
          text="< react-native >" 
          title="spot mobile app" 
          description="smart city project" 
          href='https://github.com/khasey/Spot_App'
          />
          <Preview 
          image='pomodoro.png' 
          text="< react-native >" 
          title="pomodoro app " 
          description="manage your worktime" 
          href='https://github.com/khasey/Pomodoro'
          />
          <Preview 
          image='42.png' 
          text="<nest.js >< nextjs >< postgres>" 
          title="Transcendence" 
          description="game, chat, oauth, 2fa" 
          href='https://github.com/khasey/Transcendence'
          />
        </div>  
        <div className={styles.descrip}>
          description<br/>
          A passionate developer is not just someone who writes code. They are an individual deeply<br/>
          invested in the art of problem-solving, always eager to face new challenges. Their eyes light <br/>
          up at the thought of untangling complex issues, and they dive into the intricacies of each <br/>
          task with enthusiasm and dedication. For them, every problem is a puzzle waiting to be <br/>
          solved, and every solution is a testament to their commitment and skill. They are not just <br/>
          looking for the quickest fix but the most efficient and elegant one. Their love for<br/>
          development goes beyond the screen; it's an intrinsic part of who they are.<br/>
        </div>
        <div className={styles.return}>
      <a href="/" className={styles.returning}>
      <KeyboardDoubleArrowLeftIcon/>
      <p>return to the main page</p>
      </a>
    </div>
      </div>
      <Particles options={particlesOptions as ISourceOptions} init={particlesInit}/>
    </>
  )
}

export default page