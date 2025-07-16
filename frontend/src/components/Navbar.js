import React, { useState } from 'react'
import axios from "axios"
import UpdateMenu from './UpdateMenu';

const Navbar = () => {
    const handleCurrentMenu=async()=>{
        try{
            const menu=await axios.get("http://localhost:5000/db/get_current_menu");
            console.log(menu);
        }
        catch(err){
            console.log(err);
        }

    }
    const [menu,setMenu]=useState({});
    const [isUpdatingMenu,setIsUpdatingMenu]=useState(false);
    const handleIsUpdatingMenu = ()=>{
        setIsUpdatingMenu(false);
    }
    const handleUpdateMenu=()=>{
        setIsUpdatingMenu(true);
    }
    return (
        <>
        <div className="nav-bar">
            <p style={{fontSize:"4rem"}}>Transactions Log and Insights</p>
            <div className="menu-div">
                <button className="menu-btn" onClick={handleCurrentMenu}>Current Menu</button>
            <button className="menu-btn" onClick={handleUpdateMenu}>Update Menu</button>
            </div>
        </div>
        {isUpdatingMenu && <UpdateMenu sendUpdateComplete={handleIsUpdatingMenu}/>}
        </>
        
    );
    
};



export default Navbar