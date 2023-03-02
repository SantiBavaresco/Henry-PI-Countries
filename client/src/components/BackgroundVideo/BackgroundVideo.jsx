import React from 'react';
import style from './BackgroundVideo.module.css';

function BackgroundVideo() {
return (
    <div className={style.bg_video}>
        <video autoPlay muted loop>
            <source src="../../misc/fondo.jpg" type="video/mp4" />
        </video>
    <div className={style.content}>
        <h1>Welcome to my website!</h1>
        <p>Check out my portfolio and contact me for more information.</p>
    </div>
    </div>
  );
}

export default BackgroundVideo;