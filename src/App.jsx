import React from 'react'
import TiltCard from './component/TiltCard'

const App = () => {
  const img1Url="/codeCrusade.png"
  const img2Url="/Among.png"
  return (
   <>
<div className="flex flex-col sm:flex sm:flex-row justify-center items-center gap-10 h-[100%] sm:h-screen sm:w-screen cardCont" >
  <TiltCard imgSrc={img1Url} time="11:00 AM-02:00 PM" date="21 MARCH" />
  <TiltCard imgSrc={img2Url} time="11:00 AM-02:00 PM" date="22 MARCH" />
</div>


   </>
  )
}

export default App

// style={{ background: '#160e2a' }}