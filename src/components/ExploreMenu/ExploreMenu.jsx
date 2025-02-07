import React, { useContext } from 'react'
import './ExploreMenu.css'
import { StoreContext } from '../../Context/StoreContext'

const ExploreMenu = ({category,setCategory}) => {

  const {menu_list} = useContext(StoreContext);
  
  return (
    <div className='explore-menu' id='about-us'>
      <h1>About Us</h1>
      <p className='explore-menu-text'>  
      Welcome to our Elderly Care Web App, a platform dedicated to enhancing the well-being and safety of senior citizens. We provide a comprehensive solution that allows elderly individuals to manage their medical information seamlessly, ensuring quick access during emergencies through unique QR-coded ID cards. Our platform goes beyond basic care, offering machine learning-based recommendations for personalized exercise and diet plans, as well as real-time location monitoring to detect and alert relatives or caretakers of any abnormal activity. Our mission is to empower elderly individuals and their families with tools that foster independence, security, and peace of mind.</p>
      {/* <div className="explore-menu-list">
        {menu_list.map((item,index)=>{
            return (
                <div onClick={()=>setCategory(prev=>prev===item.menu_name?"All":item.menu_name)} key={index} className='explore-menu-list-item'>
                    <img src={item.menu_image} className={category===item.menu_name?"active":""} alt="" />
                    <p>{item.menu_name}</p>
                </div>
            )
        })}
      </div> */}
      <hr />
    </div>
  )
}

export default ExploreMenu
