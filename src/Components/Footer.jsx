import React from 'react'
import img1 from '../assets/footerimg1.svg'
import img2 from '../assets/footerimg2.svg'
import img3 from '../assets/footerimg3.svg'
import img4 from '../assets/footerimg4.svg'
import img5 from '../assets/footerimg5.svg'
import img6 from '../assets/footerimg6.svg'
import img7 from '../assets/footerimg7.svg'

const Footer = () => {
    return (
        <footer className=' w-full flex justify-evenly gap-4 items-end  '>
            <div className="">
              <img src={img1} alt="React Logo" />
            </div>
            <div className="">
              <img src={img2} alt="React Logo" />
            </div>
            <div className="">
              <img src={img3} alt="React Logo" />
            </div>
            <div className="">
              <img src={img4} alt="React Logo" />
            </div>
            <div className="sm:block hidden">
              <img src={img5} alt="React Logo" />
            </div>
            <div className="sm:block hidden">
              <img src={img6} alt="React Logo" />
            </div>
            <div className="sm:block hidden">
              <img src={img7} alt="React Logo" />
            </div>

        </footer>
    )
}

export default Footer
