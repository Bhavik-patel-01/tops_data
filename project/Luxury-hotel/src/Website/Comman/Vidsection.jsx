import React from 'react'

function Vidsection() {
  return (
    <>
    <section className="section-cover" data-stellar-background-ratio="0.5" style={{backgroundImage: 'url(images/img_5.jpg)',backgroundAttachment:'fixed'}}>
      <div className="container">
        <div className="row justify-content-center align-items-center intro">
            <div className="col-md-9 text-center ">
                <h2>Relax and Enjoy your Holiday</h2>
                <p className="lead mb-5">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto quidem tempore expedita facere facilis, dolores!</p>
                <div className="btn-play-wrap"><a href="https://vimeo.com/channels/staffpicks/93951774" className="btn-play popup-vimeo "><span className="ion-ios-play" /></a></div>
            </div>
         </div>
       </div>
  </section>
  {/* END section */}
    </>
  )
}

export default Vidsection
