import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import siteMap from '../../sitemap';
import { IoIosArrowForward } from "react-icons/io";
import "../../styles/globalComponents/sidebar/SideBar.css"

function SideBar() {
    const location = useLocation()
    const currentPath = location.pathname;

  return (
    <div className='dashboard-sidebar-main-div'>
        {siteMap.map((item, index) => (
        <>
            <Link 
                key={index}
                to={"/dashboard" + item.to}
                className={
                    (currentPath === ("/dashboard" + item.to))?
                    'link active' : "link"
                }
            >
                <p className='text'>
                    {item.title}
                </p>
                <IoIosArrowForward />
            </Link>
            {(item.subTab) && (item.subTab.length > 0) &&
            <div 
                className={(currentPath === ("/dashboard" + item.to))?
                    'dropdown-div-visible' : "dropdown-div"}
            >
                {item.subTab.map((subtab, id) => (
                <Link 
                    key={id}
                    to={"/dashboard"+ item.to + subtab.to}
                    className={
                        (currentPath === ("/dashboard" + item.to))?
                        'sub-link active-sub-link' : "sub-link"
                    }
                >
                    <p className='text'>--{subtab.title}</p>
                </Link>
                ))}
            </div>
            }
        </>
        ))}
    </div>
  )
}

export default SideBar