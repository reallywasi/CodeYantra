import React from 'react'
import LandingPage from '@/components/LandingPage'
function homepage() {
  return (
    <div className="relative h-screen -mt-24">
    
      <LandingPage className="absolute top-0 left-0 w-full h-full z-10" />
      <RankingList className="absolute top-0 left-0 w-full h-full z-20" />

    </div>
  )
}

export default homepage
