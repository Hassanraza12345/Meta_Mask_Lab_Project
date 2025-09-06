import React from 'react'
import hero_video from '../../assets/hero background.mp4'
import ParticleCanvas from '../others/ParticleCanvas'
function Herobackground() {
  return (
   <div className="w-full h-full absolute top-0 left-0 -z-10 overflow-hidden">
  <video
    src={hero_video}
    autoPlay
    loop
    muted
    playsInline
    className="w-full h-full object-cover"
  />
   <ParticleCanvas />
</div>

  )
}

export default Herobackground
