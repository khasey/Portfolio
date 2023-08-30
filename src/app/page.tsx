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

export default function Home() {
  
  const particlesInit = useCallback(async (engine: Engine) => {
    await loadFull(engine);
  }, []);

  return (
    <>
    <main className={styles.main}>
      <div className={styles.navbar}>
        <a href="https://github.com/khasey" className="github">
          <GitHubIcon/>
        </a>
        <a href='https://www.linkedin.com/in/kevin-thierry-321695254/' className={styles.title}>KEVIN THIERRY</a>
        <Link href='/projects' className={styles.title2}>Projects</Link>
      </div>
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
      {/* <img src="moi.jpg" alt="photo" className={styles.img}
      // style={{
      //   position:'fixed', 
      //   marginTop:'235px', 
      //   opacity:'0.2',
      //   width:'300px',
      //    }}
         /> */}
      <div className={styles.projet}>
            <div className={styles.pro1}>
              <FaReact style={{fontSize:'45px'}}/>
            </div>
            <div className={styles.pro3}>
              <BiLogoGoLang style={{fontSize:'80px'}}/>
            </div>
            <div className={styles.pro4}>
              <DiPython style={{fontSize:'65px'}}/>
            </div>
      </div>

    </main>
    <Particles options={particlesOptions as ISourceOptions} init={particlesInit}/>
    </>
  )
}
