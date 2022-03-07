import React from 'react'
import ProjectDashboard from "../components/ProjectDashboard"
import Opportunity from "../components/Opportunity"
import TopFeed from "../components/TopFeed"
import Footer from "../components/Footer"

function Home() {
  return (
    <div>
        <TopFeed />
        <ProjectDashboard />
        <div id="opp">
            <Opportunity/>
        </div>
        <Footer />
    </div>
  )
}

export default Home




