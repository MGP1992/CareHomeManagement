import './Footer.css'

const Footer = () => {


    return (
        <>
        <body className='footer-body'>
        <div class='container-fluid'>
        <div className="fcard">
            <div className="heading text-center">
                <div className="head1">Just Scratching the Surface</div>
                <p className="bdr"></p>
            </div>
            <div className="card-body">
                <div className="row m-0 pt-5">
                    <div className="fcard col-12 col-md-3">
                        <div className="card-content">
                            <i className="fas fa-hand-holding-usd fa-3x"></i>
                            <div className="card-title">
                                COMPETITIVE PRICING FOR YOUR BUSINESS
                            </div>
                            <p><small>Helping employees work more efficiently, saving you money in the long run.</small></p>
                        </div>
                    </div>
                    <div className="fcard col-12 col-md-3">
                        <div className="card-content">
                            <i className="far fa-handshake fa-3x"></i>
                            <div className="card-title">
                                CONNECTING YOU WITH YOUR RESIDENTS FAMILY
                            </div>
                            <p><small>Allow your resident's loved ones to be more connected with their life.</small></p>
                        </div>
                    </div>
                    <div className="fcard col-12 col-md-3">
                        <div className="card-content">
                            <i className="fas fa-mobile-alt fa-3x"></i>
                            <div className="card-title">
                                MOBILE SOLUTIONS FOR EMPLOYEES
                            </div>
                            <p><small>Our web-app is compatible on all devices, so you are not reliant on PCs.</small></p>
                        </div>
                    </div>
                    <div className="fcard col-12 col-md-3">
                        <div className="card-content">
                            <i className="fas fa-user-secret fa-3x"></i>
                            <div className="card-title">
                                SECURE DATA STORAGE
                            </div>
                            <p><small>All data stored is safe and secure from any cyberattacks.</small></p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="card-footer row m-0">
                <div>
                    <p>
                        <small className="follow-text">FOLLOW US ON SOCIAL MEDIA</small> <label className="footer-right">
                            <i className="fab fa-instagram"></i>
                            <i className="fab fa-facebook-square"></i>
                            <i className="fab fa-linkedin"></i>
                            <i className="fab fa-twitter-square"></i>
                        </label>
                    </p>
                </div>
            </div>
        </div>
    </div>
    </body>
    </>
    )
}

export default Footer;