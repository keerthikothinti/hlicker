import "./footer.css";
import React from 'react'

export default function Footer() {
  return (
    <div>
       <div className='box'>
      <div className='boxcontainer'>
        <div className='boxrow'>
          <div className='boxcolumn'>
            <p className='header'>About us</p>
            <a className='flinks'>Find more about us</a>
          </div>
          <div className='boxcolumn'>
            <p className='header'>Contactus</p>
            <a className='flinks'>Call us on 868192296</a>
            <a className='flinks'>Email us picturesque@gmail.com</a>
          </div>
          <div className='boxcolumn'>
            <p className='header'>Social Media</p>
            <p className='flinks'>
              {/* <i className='fab fa-facebook-f'> */}
                <span style={{ marginLeft: '10px' }}>Facebook</span>
              {/* </i> */}
            </p>
            <p className='flinks'>
              {/* <i className='fab fa-instagram'> */}
                <span style={{ marginLeft: '10px' }}>Instagram</span>
              {/* </i> */}
            </p>
            <p className='flinks'>
              {/* <i className='fab fa-twitter'> */}
                <span style={{ marginLeft: '10px' }}>Twitter</span>
              {/* </i> */}
            </p>
            <p className='flinks'>
              {/* <i className='fab fa-youtube'> */}
                <span style={{ marginLeft: '10px' }}>Youtube</span>
              {/* </i> */}
            </p>
          </div>
        </div>
      </div>
    </div>
    </div>
  )
}
