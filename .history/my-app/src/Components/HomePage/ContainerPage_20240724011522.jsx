import React from 'react'
import { AiFillHeart,AiFillBug,AiFillCarryOu,AiFillFileAdd,AiFillRocket } from "react-icons/ai";

export const ContainerPage = () => {

  const topCategories = [
    {
      id:1,
      name:'Art & Design',
      icon:AiFillBug,
    },
    {
      id:2,
      name:'Accountant',
      icon:AiFillBug,
    },
    {
      id:3,
      name:'Auditor',
      icon:AiFillHeart,
    },
    {
      id:4,
      name:'Greengrocer',
      icon:AiFillHeart,
    },
    {
      id:5,
      name:'Journalist',
      icon:AiFillCarryOu,
    },
    {
      id:6,
      name:'Plumber',
      icon:AiFillCarryOu,
    },
    {
      id:7,
      name:'Sea captain',
      icon:AiFillFileAdd,
    },
    {
      id:8,
      name:'Translator',
      icon:AiFillFileAdd,
    },
    {
      id:9,
      name:'Office worker',
      icon:AiFillRocket,
    },
    {
      id:10,
      name:'IT',
      icon:AiFillRocket,
    },
  ]
  return (
    <div className='ContainerPage'>
       <div className='categories'>
          <div className='textCategories'>
            <div className='topCategories'>
              <h3>Top Categories</h3>
              <p>Bạn không nên bỏ qua!!!</p>
            </div>
            <div className='btnCategories'> <p>Xem tất cả</p></div>
          </div>
          <div className='boxCategories'>
           
              {topCategories.map((items)=>(
                <div className='miniBox'>
                  <AiFillHeart className='iconBox'/>
                  <h4>{items.name}</h4>
                  <h5>38K</h5>
                </div>
              ))}
          </div>
       </div>
    </div>
  )
}
