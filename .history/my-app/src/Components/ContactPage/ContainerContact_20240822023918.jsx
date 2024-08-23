import React from 'react'
import img16 from '../img/img16.png'
import img17 from '../img/img17.png'
import img18 from '../img/img18.png'

function ContainerContact() {
  return (
    <div className='contactContainer'>
        <div className='contactBox'>
            <div className='contactInf'>
                <h1>Need a direct line?</h1>
                <div className='info'>
                    <p>Cras massa et odio donec faucibus in. Vitae pretium massa dolor ullamcorper lectus elit quam.</p>
                    <div className='infoPhone'>
                        <div className='iconsInfo'>
                            <img src={img16}/>
                        </div>
                        <div className='textInfo'>
                            <p>Phone</p>
                            <h5>(123) 456 7890</h5>
                        </div>
                    </div>
                    <div className='infoPhone'>
                        <div className='iconsInfo'>
                            <img src={img17}/>
                        </div>
                        <div className='textInfo'>
                            <p>Email</p>
                            <h5>contact@thimpress.com</h5>
                        </div>
                    </div>
                </div>
            </div>
            <div className='contactMap'>
                <img src={img18} alt='map'/>
            </div>
        </div>
        <div className='contactUs'>

        </div>
    </div>
  )
}

export default ContainerContact