import React from 'react'
import { AiFillPhone } from "react-icons/ai";

function ContainerContact() {
  return (
    <div className='contactContainer'>
        <div className='contactBox'>
            <div className='contactInf'>
                <h1>Need a direct line?</h1>
                <div className='info'>
                    <p>Cras massa et odio donec faucibus in. Vitae pretium massa dolor ullamcorper lectus elit quam.</p>
                    <div className='infoPhone'>
                        <AiFillPhone className='iconsInfo'/>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default ContainerContact