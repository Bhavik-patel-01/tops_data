import React from 'react'

function Footer() {
  return (
    <>
    <footer className="site-footer">
    <div className="container">
      <div className="row mb-5">
        <div className="col-md-4">
          <h3>Phone Support</h3>
          <p>24/7 Call us now.</p>
          <p className="lead"><a href="tel://">+ 1 332 3093 323</a></p>
        </div>
        <div className="col-md-4">
          <h3>Connect With Us</h3>
          <p>We are socialized. Follow us</p>
          <p>
            <a href="#" className="pl-0 p-3"><span className="fa fa-facebook" /></a>
            <a href="#" className="p-3"><span className="fa fa-twitter" /></a>
            <a href="#" className="p-3"><span className="fa fa-instagram" /></a>
            <a href="#" className="p-3"><span className="fa fa-vimeo" /></a>
            <a href="#" className="p-3"><span className="fa fa-youtube-play" /></a>
          </p>
        </div>
        <div className="col-md-4">
          <h3>Connect With Us</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maxime, odio.</p>
          <form action="#" className="subscribe">
            <div className="form-group">
              <button type="submit"><span className="ion-ios-arrow-thin-right" /></button>
              <input type="email" className="form-control" placeholder="Enter email" />
            </div>
          </form>
        </div>
      </div>
      <div className="row justify-content-center">
        <div className="col-md-7 text-center">
          © {/* Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. */}
          Copyright © All rights reserved | This template is made with <i className="fa fa-heart-o" aria-hidden="true" /> by <a href="https://colorlib.com" target="_blank">Colorlib</a>
          {/* Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. */}
        </div>
      </div>
    </div>
  </footer>
  {/* END footer */}      
    </>
  )
}

export default Footer
