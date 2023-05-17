import "./Reviews.css";

const Reviews = () => {
  return (
    <>
      <div
        className="container-xl"
        style={{ backgroundColor: "#f5f5f5", borderRadius: "50px" }}
      >
        <div className="row">
          <div className="col-lg-8 mx-auto">
            <h2>Testimonials</h2>
            <div
              id="myCarousel"
              className="carousel slide"
              data-ride="carousel"
            >
              {/* <!-- Carousel indicators --> */}
              <ol className="carousel-indicators">
                <li
                  data-target="#myCarousel"
                  data-slide-to="0"
                  className="active"
                ></li>
                <li data-target="#myCarousel" data-slide-to="1"></li>
                <li data-target="#myCarousel" data-slide-to="2"></li>
                <li data-target="#myCarousel" data-slide-to="3"></li>
                <li data-target="#myCarousel" data-slide-to="4"></li>
              </ol>
              {/* <!-- Wrapper for carousel items --> */}
              <div className="carousel-inner">
                <div className="carousel-item active">
                  <div className="img-box">
                    <img src="https://i.imgur.com/Q41fYK3.png" alt="" />
                  </div>
                  <p className="testimonial">
                    Wat a place! Surprisingly decent. The food's edible, but
                    don't expect gourmet. Staff's alright, but they could be
                    more attentive. Rooms need sprucing up, and the
                    entertainment is meh. Overall, it's tolerable. Wat more can
                    ya expect?
                  </p>
                  <p className="overview">
                    <b>Wat Grandma</b>, Care Home Resident
                  </p>
                </div>
                <div className="carousel-item">
                  <div className="img-box">
                    <img
                      src="https://esq.h-cdn.co/assets/17/07/640x480/sd-aspect-1487345526-jar-jar-new.jpg"
                      alt=""
                    />
                  </div>
                  <p className="testimonial">
                    Mesa reviewin' dis care home software, okey-day? It'sa like
                    a magical Gungan tool! It helpsa keepin' tings organized,
                    makin' da care home run smoothly. Mesa impressed with all da
                    features and how it brings joy to da residents. Mesa happy
                    to be part of dis adventure!
                  </p>
                  <p className="overview">
                    <b>Jar-Jar Binks</b>, Care Home Helper
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
                    This care home, mate, top-notch! They provide care like no
                    other, ya know. The staff's dedication is unreal, always
                    giving it their all. You want some quality care? I'll give
                    it ya! The Wealdstone Raider approves!
                  </p>
                  <p className="overview">
                    <b>Wealdstone Raider</b>, Care Home Football Pundit
                  </p>
                </div>
                <div className="carousel-item">
                  <div className="img-box">
                    <img
                      src="data:image/jpeg;base64,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"
                      alt=""
                    />
                  </div>
                  <p className="testimonial">
                    Este software de gestión de hogares de cuidado es una
                    máquina perfectamente aceitada, ocultando sin problemas las
                    operaciones ilícitas bajo su fachada. Su organización
                    meticulosa y eficiencia rivalizan con mi propio imperio. Un
                    testimonio del poder oculto que posee, asegurando el
                    funcionamiento fluido de mis operaciones mientras mantiene
                    las apariencias. Impresionante, en efecto.
                  </p>
                  <p className="overview">
                    <b>Gustavo Fring</b>, Owner of Los hermanos de la casa
                    residencial.
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
                    Do you know who I am? It's Ronnie Pickering, the Managing
                    Director of Sevenoaks. With unwavering dedication, our care
                    home ensures top-notch care for your loved ones. Trust us to
                    provide a nurturing environment and exceptional services.
                    Remember, it's Ronnie Pickering, here to exceed your
                    expectations!
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
