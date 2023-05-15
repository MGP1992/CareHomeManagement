import './Footer.css'

const Footer = () => {


    return (
        <>
        <body className='footer-body'>
        <div class='container-fluid'>
        <div class="fcard">
            <div class="heading text-center">
                <div class="head1">Just Scratching the Surface</div>
                <p class="bdr"></p>
            </div>
            <div class="card-body">
                <div class="row m-0 pt-5">
                    <div class="fcard col-12 col-md-3">
                        <div class="card-content">
                            <i class="fas fa-hand-holding-usd fa-3x"></i>
                            <div class="card-title">
                                COMPETITIVE PRICING FOR YOUR BUSINESS
                            </div>
                            <p><small>Helping employees work more efficiently, saving you money in the long run.</small></p>
                        </div>
                    </div>
                    <div class="fcard col-12 col-md-3">
                        <div class="card-content">
                            <i class="far fa-handshake fa-3x"></i>
                            <div class="card-title">
                                CONNECTING YOU WITH YOUR RESIDENTS FAMILY
                            </div>
                            <p><small>Allow your resident's loved ones to be more connected with their life.</small></p>
                        </div>
                    </div>
                    <div class="fcard col-12 col-md-3">
                        <div class="card-content">
                            <i class="fas fa-mobile-alt fa-3x"></i>
                            <div class="card-title">
                                MOBILE SOLUTIONS FOR EMPLOYEES
                            </div>
                            <p><small>Our web-app is compatible on all devices, so you are not reliant on PCs.</small></p>
                        </div>
                    </div>
                    <div class="fcard col-12 col-md-3">
                        <div class="card-content">
                            <i class="fas fa-user-secret fa-3x"></i>
                            <div class="card-title">
                                SECURE DATA STORAGE
                            </div>
                            <p><small>All data stored is safe and secure from any cyberattacks.</small></p>
                        </div>
                    </div>
                </div>
            </div>
            <div class="card-footer row m-0">
                <div>
                    <p>
                        <small class="follow-text">FOLLOW US ON SOCIAL MEDIA</small> <label class="footer-right">
                            <i class="fab fa-instagram"></i>
                            <i class="fab fa-facebook-square"></i>
                            <i class="fab fa-linkedin"></i>
                            <i class="fab fa-twitter-square"></i>
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