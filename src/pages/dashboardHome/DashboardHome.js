import React from 'react'
import { Routes, Route } from "react-router-dom"
import NavBar from '../../GlobalComponents/navbar/NavBar'
import SideBar from '../../GlobalComponents/sidebar/SideBar'
import UsersPage from "../users/UsersPage"
import OrganisationPage from '../organisation/OrganisationPage'
import IndustryPage from '../industry/IndustryPage'
import RolesPage from '../roles/RolesPage'
import WordsPage from '../words/WordsPage'
import CompetencyPage from '../competency/CompetencyPage'
import SeanPage from '../sean/SeanPage'
import "../../styles/pages/dashboardHome/DashboardHome.css"

function DashboardHome() {
  return (
    <div className='dashboard-home-main-div'>
        <nav>
            <NavBar />
        </nav>
        <div className='content'>
            <aside>
                <SideBar />
            </aside>
            <main>
                <Routes>
                    <Route path='/user' element={<UsersPage />} />
                    <Route path='/org' element={<OrganisationPage />} />
                    <Route path='/industry' element={<IndustryPage />} />
                    <Route path='/roles' element={<RolesPage />} />
                    <Route path='/words' element={<WordsPage />} />
                    <Route path='/competency' element={<CompetencyPage />} />
                    <Route path='/sean' element={<SeanPage />} />
                </Routes>
            </main>
        </div>
    </div>
  )
}

export default DashboardHome