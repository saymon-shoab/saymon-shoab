import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import MenuIcon from '../../../image/bars-solid.svg'
import CloseIcon from '../../../image/window-close-regular.svg'
// import { GrDocumentDownload } from 'react-icons/gr';
//  


  

export default function Header  () {
  //We will use react hooks for toggling the menu
  const [isSideMenuOpen, setisSideMenuOpen] = useState(false)

  const showSideMenu = () => {
      (isSideMenuOpen) ? setisSideMenuOpen(false) : setisSideMenuOpen(true)
  }

    return (
        <>
            <div className="fixed w-full h-14 bg-gray-900 text-gray-100 flex flex-row justify-between font-extrabold items-center">
            <div className="brand-logo text-lg font-bold px-8"><i>MD Saymon Shoab</i></div>
            <ul className="hidden menu-list lg:flex lg:flex-row text-md space-x-4 px-8 font-bold">
                <li className="menu-list-item px-3"><Link to="#">About</Link> </li>
                <li className="menu-list-item px-3"><Link to="#">Projects</Link></li>
                <li className="menu-list-item px-3"><Link to="#">Blogs</Link></li>
                <li className="menu-list-item px-3"><Link to="#">Contact</Link></li>
                <button className="menu-list-item px-3 flex font-semibold hover:bg-red-500 bg-red-700 rounded-md" type="">
                <a href="https://drive.google.com/file/d/1UoIz18v9F6j4-bMDYAnBF5vBB-0i0mMO/view" target="blank" alt="/"> Resume</a>
                </button>
            </ul>
            
            <button onClick={()=>{showSideMenu()}} className="lg:hidden menu-button">
                {(isSideMenuOpen) ? <img src={CloseIcon} className="w-8 h-8 px-2" alt="close"></img> : <img src={MenuIcon} className="w-8 h-8 px-2" alt="menu"></img>}
            </button>
            {(isSideMenuOpen) ? SideMenu() : ''}
        </div>
        </>
    );
};

function SideMenu(){
  return(
      <div className="fixed h-screen w-1/2 sm:w-1/4 lg:hidden bg-gray-900 top-14">
          <ul className="menu-list flex flex-col text-md font-bold">
              <li className="menu-list-item py-2 px-10 hover:bg-white hover:text-blue-700"><Link to="#">About</Link></li>
              <li className="menu-list-item py-2 px-10 hover:bg-white hover:text-blue-700"><Link to="#">Projects</Link></li>
              <li className="menu-list-item py-2 px-10 hover:bg-white hover:text-blue-700"><Link to="#">Blogs</Link></li>
              <li className="menu-list-item py-2 px-10 hover:bg-white hover:text-blue-700"><Link to="#">Contact us</Link></li>
              <button className="menu-list-item px-3 font-semibold hover:bg-red-500 bg-red-700 rounded-md" type=""> 
              <a href="https://drive.google.com/file/d/1UoIz18v9F6j4-bMDYAnBF5vBB-0i0mMO/view" target="blank" alt="/"> Resume</a>
              </button>
          </ul>
      </div>
  )
}