import React, { useState } from 'react';
import { MdPictureAsPdf } from 'react-icons/md';
import { SiGmail } from 'react-icons/si';
import { CgDarkMode } from 'react-icons/cg';
import { TiArrowBack } from 'react-icons/ti';
import { DiAtom } from 'react-icons/di';
import '../style/btnLOgo.css';

const BtnLOgo = ({handleTheme}) => {
  const [expand, setExpand] = useState(false);

  let handleBtn = () => {
    setExpand(!expand);
  };

  let handleResume=()=>{
    window.open("https://docs.google.com/document/d/1Wyzk0vGeB7WvWOrvgKzoH63qwoRiZifPXVk4j_yKCp4/edit")
  }
  return (
    <div className='btnContainer'>
      <button className='togglebtn'
        style={{
          fontSize: '1rem',
          textAlign: 'center',
          marginRight:'10px'
        }}
        onClick={handleBtn}
      >
       {expand ? <TiArrowBack/>:<DiAtom />}
      </button>
      <div className={expand ? 'show' : 'hide'}>
          <button className='resume'
            onClick={handleResume}>
            <MdPictureAsPdf />
          </button>
          <button className='gmail'>
            <SiGmail />
          </button>
          <button className='darkmode'
           onClick={handleTheme}>
            <CgDarkMode />
          </button>
      </div>
    </div>
  );
};

export default BtnLOgo;
