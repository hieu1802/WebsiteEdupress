import React from 'react'
import { AiFillRocket, AiOutlineUserAdd, AiOutlineClockCircle, AiFillCheckCircle    } from "react-icons/ai";
import img04 from '../img/img04.png'
import img05 from '../img/img05.png'
import img06 from '../img/img06.png'
import img07 from '../img/img07.png'
import img08 from '../img/img08.png'
import img09 from '../img/img09.png'
import img10 from '../img/img10.png'
import img11 from '../img/img11.png'


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

  const topCourses = [
    {
      id: 1,
      img:img04
    },
    {
      id: 2,
      img:img05
    },
    {
      id: 3,
      img:img06
    },
    {
      id: 4,
      img:img07
    },
    {
      id: 5,
      img:img08
    },
    {
      id: 6,
      img:img09
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
       <div className='courses'>
          <div className='textCategories'>
            <div className='topCategories'>
              <h3>Featured courses</h3>
              <p>Ưu đãi đang chờ bạn !!!</p>
            </div>
            <div className='btnCategories'> <p>Xem tất cả</p></div>
          </div>
          <div className='boxCourses'>
              {topCourses.map((items)=>(
                <div className='boxFeaturedCourses' key={items.id}>
                  <div className='boxFeaturedCoursesImg'>
                      <img src={items.img}/>
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
                          <div className='price'>
                            <p>4.500.000đ</p><span>2.000.000đ </span>
                          </div>
                          <b>Xem chi tiết</b>
                      </div>
                  </div>
              </div>
              ))}
          </div>
       </div>
       <div className='banner'>
          <img src={img10} style={{width:'98%', height:'100%', borderRadius:'12px'}}/>
          <div className='bannerContent'>
            <h5>GET MORE POWER FROM</h5>
            <h2>LearnPress Add-Ons</h2>
            <p>The next level of LearnPress - LMS WordPress Plugin. More Powerful, Flexible and Magical Inside.</p>
            <div className='btnBanner'>Explorer Courses</div>
          </div>
       </div>
       <div className='counterBox'>
          <div className='counterBoxContent'>
              <h2>25+</h2>
              <a href='#'>Active Students</a>
          </div>
          <div className='counterBoxContent'>
              <h2>900</h2>
              <a href='#'>Total Courses</a>
          </div>
          <div className='counterBoxContent'>
              <h2>150</h2>
              <a href='#'>Instructors</a>
          </div>
          <div className='counterBoxContent'>
              <h2>100%</h2>
              <a href='#'>Satisfaction rate</a>
          </div>
       </div>
       <div className='boxConnect'>
          <div className='boxConnectImg'>
              <img src={img11} style={{width:'70%', height:'100%', marginLeft:'80px'}}/>
          </div>
          <div className='boxConnectContent'>
            <div className='boxConnectText'>
              <h2> Kết Nối Đa Dạng</h2>
            </div>
            <div className='boxConnectContainer'>
              <div className='introduce'>
                <p>EduPress Academy đã có mặt trên nhiều nền tảng Online khác nhau tẩm
                   bảo đa dạng sự chọn bạn. Chọn ngay tại: </p>
              </div>
              <div className='connect'>
                  <span> <AiFillCheckCircle className='connectIcons'/> <a href='#'>Zoom</a></span>
                  <span> <AiFillCheckCircle className='connectIcons'/> <a href='#'>Microsoft Teams.</a></span>
                  <span> <AiFillCheckCircle className='connectIcons'/> <a href='#'>Google Classroom.</a></span>
                  <span> <AiFillCheckCircle className='connectIcons'/> <a href='#'>Skype</a></span>
                  <span> <AiFillCheckCircle className='connectIcons'/> <a href='#'>Youtube</a></span>
                  <span> <AiFillCheckCircle className='connectIcons'/> <a href='#'>Vsee</a></span>
              </div>
            </div>
          </div>
       </div>
       <div className='banner'>
          <img src={img10} style={{width:'98%', height:'100%', borderRadius:'12px'}}/>
          <div className='bannerContent'>
            <h5>GET MORE POWER FROM</h5>
            <h2>LearnPress Add-Ons</h2>
            <p>The next level of LearnPress - LMS WordPress Plugin. More Powerful, Flexible and Magical Inside.</p>
            <div className='btnBanner'>Explorer Courses</div>
          </div>
       </div>
       <div className='boxFeedbacks'>
              <div className='feedbacksHeading'>

              </div>
       </div>       

    </div>
  )
}
