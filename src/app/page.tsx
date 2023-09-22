'use client'
import Link from 'next/link';
import styles from './page.module.css'
import GitHubIcon from '@mui/icons-material/GitHub';
import { useCallback } from 'react';
import Particles from "react-tsparticles";
import type { Engine } from "tsparticles-engine";
import { loadFull } from "tsparticles";
import particlesOptions from "./particles.json";
import { ISourceOptions } from "tsparticles-engine";
import { FaReact} from 'react-icons/fa';
import { DiPython } from "react-icons/di";
import { BiLogoGoLang } from "react-icons/bi";
import { Tooltip } from '@mui/material';

export default function Home() {
  
  const particlesInit = useCallback(async (engine: Engine) => {
    await loadFull(engine);
  }, []);

  return (
    <>
    <main className={styles.main}>
      <div className={styles.navbar}>
        <a href="https://github.com/khasey" className={styles.github}>
          <GitHubIcon/>
          {/* <p>github</p> */}
        </a>
        <a href='https://www.linkedin.com/in/kevin-thierry-321695254/' className={styles.title}>KEVIN THIERRY</a>
        <Link href='/projects' className={styles.title2}>Projects</Link>
      </div>
      <img src='moi2.png'className={styles.image}>

      </img>
      <div className={styles.h}>
      
        <div className={styles.titre}>
          
          <p className={styles.text1}>
            Write less,
          </p>
          <p className={styles.text2}>
            runs faster
          </p>
          <p className={styles.text3}>
            react + react-native + golang + python + cyber security
          </p>
          
        </div>
       
      </div>
      <div className={styles.projet}>
            <div className={styles.pro1}>
            
              <a href="https://netflix-clone-4apw.vercel.app/" className="link">
              <Tooltip title="React" placement='top'>
              <FaReact style={{fontSize:'45px'}}/>
              </Tooltip>
              </a>
              
            </div>
            <div className={styles.pro3}>
              <a href="https://github.com/khasey/goFinder" className="link2">
              <Tooltip title="Golang" placement='top'>
              <BiLogoGoLang style={{fontSize:'80px'}}/>
              </Tooltip>
              </a>
            </div>
            <div className={styles.pro4}>
              <a href="https://github.com/khasey/googlescraper" className="link3">
              <Tooltip title="Python" placement='top'>
              <DiPython style={{fontSize:'65px'}}/>
              </Tooltip>
              </a>
            </div>
      </div>

    </main>
    <Particles options={particlesOptions as ISourceOptions} init={particlesInit}/>
    </>
  )
}
