import React from 'react'

function Footer() {
  return (
    <div className='footerPage'>
        <div className='footerContaier'>
            <div className='footerEdupress'>
                <h2>Edupress Academy</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            </div>
            <div className='footerHelp'>
                <h2>GET HELP</h2>
                <a href='#'>Contact Us</a>
                <a href='#'>Latest Articles</a>
                <a href='#'>FAQ </a>
            </div>
            <div className='footerPrograms'>
                <h2>PROGRAMS</h2>
                <a href='#'>Art & Design</a>
                <a href='#'>Business</a>
                <a href='#'>IT & Software </a>
                <a href='#'>Languages </a>
                <a href='#'>Programming </a>
            </div>
            <div className='footerContact'>
                <h2>CONTACT US</h2>
                <p>Address: 2321 New Design Str, Lorem Ipsum10 Hudson Yards, USA</p>
                <p>Tel: + (123) 2500-567-8988<br/>
                Mail: supportlms@gmail.com</p>
            </div>
        </div>
    </div>
  )
}

export default Footer