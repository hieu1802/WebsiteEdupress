import React from 'react'
import { AiFillHeart } from "react-icons/ai";

export const ContainerPage = () => {

  const topCategories = [
    {
      id:1,
      name:'Art & Design'
    },
    {
      id:2,
      name:'Accountant'
    },
    {
      id:3,
      name:'Auditor'
    },
    {
      id:4,
      name:'Greengrocer'
    },
    {
      id:5,
      name:'Journalist'
    },
    {
      id:6,
      name:'Plumber'
    },
    {
      id:7,
      name:'Sea captain'
    },
    {
      id:8,
      name:'Translator'
    },
    {
      id:9,
      name:'Office worker'
    },
    {
      id:10,
      name:'IT'
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
              <div className='miniBox'>
                  <AiFillHeart className='iconBox'/>
                  <h4>Art & Design</h4>
                  <h5>38K</h5>
              </div>
              <div className='miniBox'>
                  <AiFillHeart className='iconBox'/>
                  <h4>Art & Design</h4>
                  <h5>38K</h5>
              </div>
              <div className='miniBox'>
                  <AiFillHeart className='iconBox'/>
                  <h4>Art & Design</h4>
                  <h5>38K</h5>
              </div>
              <div className='miniBox'>
                  <AiFillHeart className='iconBox'/>
                  <h4>Art & Design</h4>
                  <h5>38K</h5>
              </div>
              <div className='miniBox'>
                  <AiFillHeart className='iconBox'/>
                  <h4>Art & Design</h4>
                  <h5>38K</h5>
              </div>
              <div className='miniBox'>
                  <AiFillHeart className='iconBox'/>
                  <h4>Art & Design</h4>
                  <h5>38K</h5>
              </div>
              <div className='miniBox'>
                  <AiFillHeart className='iconBox'/>
                  <h4>Art & Design</h4>
                  <h5>38K</h5>
              </div>
              <div className='miniBox'>
                  <AiFillHeart className='iconBox'/>
                  <h4>Art & Design</h4>
                  <h5>38K</h5>
              </div>
              <div className='miniBox'>
                  <AiFillHeart className='iconBox'/>
                  <h4>Art & Design</h4>
                  <h5>38K</h5>
              </div>
              <div className='miniBox'>
                  <AiFillHeart className='iconBox'/>
                  <h4>Art & Design</h4>
                  <h5>38K</h5>
              </div>
          </div>
       </div>
    </div>
  )
}
