import React from "react";

import { logo } from "../assets";

const Hero = () => {
  return (
    <header className='w-full flex justify-center items-center flex-col'>
      <nav className='flex justify-between items-center w-full mb-10 pt-3'>
        <img src="SummAIze.png" alt='logo' className='w-28 object-contain' />

        <button
          type='button'
          onClick={() =>
            window.open("https://github.com/NakardaRichards/summaize", "_blank")
          }
          className='git_btn'
        >
          GitHub
        </button>
      </nav>

      <h1 className='head_text'>
      Effortlessly Summarize Lengthy Articles with <b style={{color:"#84D0FF"}}>SummAIze</b>
      </h1>
  
    </header>
  );
};

export default Hero;
