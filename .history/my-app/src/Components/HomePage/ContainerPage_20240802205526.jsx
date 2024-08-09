import React from 'react'
import { AiFillRocket, AiOutlineUserAdd, AiOutlineClockCircle   } from "react-icons/ai";
import img04 from '../img/img04.png'

export const ContainerPage = () => {

  const topCategories = [
    {
      id:1,
      name:'Art & Design',
    },
    {
      id:2,
      name:'Accountant',

    },
    {
      id:3,
      name:'Auditor',

    },
    {
      id:4,
      name:'Greengrocer',

    },
    {
      id:5,
      name:'Journalist',

    },
    {
      id:6,
      name:'Plumber',

    },
    {
      id:7,
      name:'Sea captain',

    },
    {
      id:8,
      name:'Translator',
   
    },
    {
      id:9,
      name:'Office worker',
     
    },
    {
      id:10,
      name:'IT',

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
                <div className='miniBox' key={items.id}>
                  <AiFillRocket className='iconBox'/>
                  <h4>{items.name}</h4>
                  <h5>38K</h5>
                </div>
              ))}
          </div>
       </div>
       <div className='categories'>
          <div className='textCategories'>
            <div className='topCategories'>
              <h3>Featured courses</h3>
              <p>Ưu đãi đang chờ bạn !!!</p>
            </div>
            <div className='btnCategories'> <p>Xem tất cả</p></div>
          </div>
          <div className='boxCategories'>
              <div className='boxFeaturedCourses'>
                  <div className='boxFeaturedCoursesImg'>
                      <img src={img04}/>
                  </div>

                  <div className='boxFeaturedCoursesContent'>
                      <div className='boxFeaturedCoursesContentText'>
                        <p>By <span>Determined-Poitras</span></p> 
                        <h4>Create an LMS Website with LearnPress</h4>
                      </div>
                      <div className='boxFeaturedCoursesContentMeta'>
                          <span><AiOutlineClockCircle style={{fontSize:'20px', marginRight:'5px', color:'rgba(241, 152, 34, 0.979)'}}/>2 Weeks</span>
                          <span><AiOutlineUserAdd style={{fontSize:'20px', marginRight:'5px', color:'rgba(241, 152, 34, 0.979)'}}/> 50 students </span>
                      </div>
                      <div className='boxFeaturedCoursesContentPrice'>
                          <p>4.500.000 đ <span>2.000.000 đ </span></p>
                          <b>Xem chi tiết</b>
                      </div>
                  </div>
              </div>
             
          </div>
       </div>
    </div>
  )
}
