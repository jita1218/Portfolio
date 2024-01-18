import React from 'react'
import "./footer.css"

const Footer = () => {
  return (
    <>
    <nav className='footer flex'>
      
      <div className="footer_items">
      <h2 className='thank_you'>Thank you for visiting</h2>
        <ul className="footer_list flex">
            <li className="footer_logo">
                <a href="#" className='footer_link active-link'>
                    Back to top
                </a>
            </li>

            <li className="footer_logo">
                <a href="#about" className='footer_link active-link'>
                    About
                </a>
            </li>

            <li className="footer_logo">
                <a href="#skills" className='footer_link active-link'>
                    Skills
                </a>
            </li>

            <li className="footer_logo">
                <a href="#qualification" className='footer_link active-link'>
                    Qualification
                </a>
            </li>

            <li className="footer_logo">
                <a href="#contact" className='footer_link active-link'>
                    Contact
                </a>
            </li>

        </ul>
        
      </div>
            

    </nav>
    <div className='copywrite'><small>jitu2024</small></div>
</>
  )
}

export default Footer
