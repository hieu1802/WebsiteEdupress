import React from 'react'
import img16 from '../img/img16.png'

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
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default ContainerContact