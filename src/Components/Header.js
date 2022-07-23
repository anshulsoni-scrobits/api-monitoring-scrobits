import React from 'react'
import Logo1 from '../Images/Logo1.png'
import Logo2 from '../Images/Logo2.png'

export default function Header() {
  return (
    <> 
    <div className='Scrobits'>
    {/* <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
    <link
        href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0
        ,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap"
        rel="stylesheet"/> */}
    <img src={Logo1}/>
    </div>
     <div className='Header'>
      <h2 id="API">API Monitoring Web-app</h2>
    </div>
    <div className='ScrobitsLogo'>
         <img src={Logo2}/>
    </div>
    </>
  )
}
