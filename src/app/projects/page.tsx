'use client'
import React, { useCallback } from 'react'
import Particles from "react-tsparticles";
import type { Engine } from "tsparticles-engine";
import { loadFull } from "tsparticles";
import particlesOptions from "../particles.json";
import { ISourceOptions } from "tsparticles-engine";
import { Box, Button, ButtonGroup } from '@mui/material';
import CodePreview from '../../component/codePreview';

function page() {

  const particlesInit = useCallback(async (engine: Engine) => {
    await loadFull(engine);
  }, []);

  return (
    <>
      <div style={{display:'flex',flexDirection:'column', alignItems:'center', justifyContent:'flex-start' , width:'100vw', height:'100vh', marginTop:'10px'}}>
      <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        '& > *': {
          m: 1,
        },
      }}
    >
      <ButtonGroup variant="outlined" aria-label="outlined button group">
        <Button sx={{color:'white'}}>React</Button>
        <Button sx={{color:'white'}}>React-Native</Button>
        <Button sx={{color:'white'}}>Golang</Button>
        <Button sx={{color:'white'}}>Python</Button>
        <Button sx={{color:'white'}}>Node</Button>
      </ButtonGroup>
      </Box>
      <div className="codeBlock">
        <CodePreview/>
      </div>
      </div>
      <Particles options={particlesOptions as ISourceOptions} init={particlesInit}/>
    </>
  )
}

export default page