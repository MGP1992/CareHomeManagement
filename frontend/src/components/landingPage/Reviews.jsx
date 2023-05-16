import "./Reviews.css";

const Reviews = () => {
  return (
    <>
      <div className="container-xl" style={{ backgroundColor: "#f5f5f5", borderRadius: "50px"}}>
        <div className="row">
          <div className="col-lg-8 mx-auto">
            <h2>Testimonials</h2>
            <div id="myCarousel" className="carousel slide" data-ride="carousel">
              {/* <!-- Carousel indicators --> */}
              <ol className="carousel-indicators">
                <li
                  data-target="#myCarousel"
                  data-slide-to="0"
                  className="active"
                ></li>
                <li data-target="#myCarousel" data-slide-to="1"></li>
                <li data-target="#myCarousel" data-slide-to="2"></li>
              </ol>
              {/* <!-- Wrapper for carousel items --> */}
              <div className="carousel-inner">
                <div className="carousel-item active">
                  <div className="img-box">
                    <img
                      src="https://i.imgur.com/Q41fYK3.png"
                      alt=""
                    />
                  </div>
                  <p className="testimonial">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. "Wat".
                    eu sem tempor, varius quam at, luctus dui. 
                  </p>
                  <p className="overview">
                    <b>Wat Grandma</b>, Care Home Resident
                  </p>
                </div>
                <div className="carousel-item">
                  <div className="img-box">
                    <img
                      src="https://www.pngfind.com/pngs/m/443-4433119_circle-crop-profile-profile-picture-woman-circle-hd.png"
                      alt=""
                    />
                  </div>
                  <p className="testimonial">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius nibh
                    non aliquet.
                  </p>
                  <p className="overview">
                    <b>Paula Wilson</b>, Care Home Assistant
                  </p>
                </div>
                <div className="carousel-item">
                  <div className="img-box">
                    <img
                      src="https://i2-prod.mirror.co.uk/incoming/article4831687.ece/ALTERNATES/s1200c/PAY-The-Wealdstone-Raider.jpg"
                      alt=""
                    />
                  </div>
                  <p className="testimonial">
                    Vestibulum quis quam ut magna consequat faucibus. "You've
                    got no fans". Utmtc tempus dictum risus. Pellentesque
                    viverra sagittis quam at mattis. Suspendisse potenti.
                    Aliquam sit amet gravida nibh, facilisis gravida odio.
                  </p>
                  <p className="overview">
                    <b>Wealdstone Raider</b>, Care Home Football Pundit
                  </p>
                </div>
                <div className="carousel-item">
                  <div className="img-box">
                    <img
                      src="https://www.vhv.rs/dpng/d/551-5511364_circle-profile-man-hd-png-download.png"
                      alt=""
                    />
                  </div>
                  <p className="testimonial">
                    Vestibulum quis quam ut magna consequat faucibus.
                    Pellentesque eget nisi a mi suscipit tincidunt. Utmtc tempus
                    dictum risus. Pellentesque viverra sagittis quam at mattis.
                    Suspendisse potenti. Aliquam sit amet gravida nibh,
                    facilisis gravida odio.
                  </p>
                  <p className="overview">
                    <b>Steve Jones</b>, Care Home Manager
                  </p>
                </div>
                <div className="carousel-item">
                  <div className="img-box">
                    <img
                      src="https://i2-prod.hulldailymail.co.uk/incoming/article4531801.ece/ALTERNATES/s1200c/0_ronnie-pickering.png"
                      alt=""
                    />
                  </div>
                  <p className="testimonial">
                    Phasellus vitae suscipit justo. "Do you know who I am?".
                    Duis luctus turpis at accumsan tincidunt. Phasellus risus
                    risus, volutpat vel tellus ac, tincidunt fringilla massa.
                    Etiam hendrerit dolor eget rutrum.
                  </p>
                  <p className="overview">
                    <b>Ronnie Pickering</b>, Managing Director of Sevenoaks
                    Residential Home / 2x World Heavyweight Boxing Champ
                  </p>
                </div>
              </div>
              {/* <!-- Carousel controls --> */}
              <a
                className="carousel-control-prev"
                href="#myCarousel"
                data-slide="prev"
              >
                <i className="fa fa-angle-left"></i>
              </a>
              <a
                className="carousel-control-next"
                href="#myCarousel"
                data-slide="next"
              >
                <i className="fa fa-angle-right"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
      </>
  );
};

export default Reviews;
