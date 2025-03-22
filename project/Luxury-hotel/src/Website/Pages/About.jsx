import React from 'react'
import Footer from '../Comman/Footer'
import Loader from '../Comman/Loader'
import Header from '../Comman/Header'
import Vidsection from '../Comman/Vidsection'

function About() {
  return (
    <>
    <Header />
<div>  
  <section className="site-hero site-hero-innerpage overlay" data-stellar-background-ratio="0.5" style={{backgroundImage: 'url(images/big_image_1.jpg)',backgroundAttachment:'fixed'}}>
    <div className="container">
      <div className="row align-items-center site-hero-inner justify-content-center">
        <div className="col-md-12 text-center">
          <div className="mb-5 fadeInUp element-animated">
            <h1>About Luxury Hotel</h1>
            <p>Discover our world's #1 Luxury Room For VIP.</p>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/* END section */}
  <section className="site-section">
    <div className="container">
      <div className="row align-items-center">
        <div className="col-md-4">
          <div className="heading-wrap fadeInUp element-animated">
            <h4 className="sub-heading">Stay with our luxury rooms</h4>
            <h2 className="heading">Our Story</h2>
            <p className>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minus illo similique natus, a recusandae? Dolorum, unde a quibusdam est? Corporis deleniti obcaecati quibusdam inventore fuga eveniet! Qui delectus tempore amet!</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minus illo similique natus, a recusandae? Dolorum, unde a quibusdam est? Corporis deleniti obcaecati quibusdam inventore fuga eveniet! Qui delectus tempore amet!</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minus illo similique natus, a recusandae? Dolorum, unde a quibusdam est? Corporis deleniti obcaecati quibusdam inventore fuga eveniet! Qui delectus tempore amet!</p>
          </div>
        </div>
        <div className="col-md-1" />
        <div className="col-md-7 bgimg">
          <img src="images/f_img_1.png" alt="Image placeholder" className="img-md-fluid" />
        </div>
      </div>
    </div>
  </section>
  {/* END section */}
  <section className="site-section bg-light">
    <div className="container">
      <div className="row mb-5">
        <div className="col-md-12 heading-wrap text-center">
          <h4 className="sub-heading">Our Kind Staff</h4>
          <h2 className="heading">Our Staff</h2>
        </div>
      </div>
      <div className="row ">
        <div className="col-md-4">
          <div className="post-entry">
            <img src="images/person_1.jpg" alt="Image placeholder" className="img-fluid" />
            <div className="body-text">
              <div className="category">Staff</div>
              <h3 className="mb-3"><a href="#">Michelle Aguilar</a></h3>
              <p className="mb-4">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum deserunt illo quis similique dolore voluptatem culpa voluptas rerum, dolor totam.</p>
              <p><a href="#" className="btn btn-primary btn-outline-primary btn-sm">Read Bio</a></p>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="post-entry">
            <img src="images/person_2.jpg" alt="Image placeholder" className="img-fluid" />
            <div className="body-text">
              <div className="category">Staff</div>
              <h3 className="mb-3"><a href="#">Chris Standworth</a></h3>
              <p className="mb-4">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum deserunt illo quis similique dolore voluptatem culpa voluptas rerum, dolor totam.</p>
              <p><a href="#" className="btn btn-primary btn-outline-primary btn-sm">Read Bio</a></p>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="post-entry">
            <img src="images/person_3.jpg" alt="Image placeholder" className="img-fluid" />
            <div className="body-text">
              <div className="category">Cook</div>
              <h3 className="mb-3"><a href="#">Rob McDonald</a></h3>
              <p className="mb-4">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum deserunt illo quis similique dolore voluptatem culpa voluptas rerum, dolor totam.</p>
              <p><a href="#" className="btn btn-primary btn-outline-primary btn-sm">Read Bio</a></p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/* END section */}
  <Vidsection />
  {/* END section */}
</div>
<Footer />
<Loader />
    </>
  )
}

export default About
