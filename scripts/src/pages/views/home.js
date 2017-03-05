import React from 'react';
import Helmet from 'react-helmet';
import Moment from 'react-moment';
import { Link } from 'react-router';

export default (self) => {
    return (
        <div>
            <Helmet
                title="Just Meet | Welcome"
            />

            <div className="hero">
                <span className="logo">Just Meet</span>
            </div>

            <div className="nav-bar">
                <div className="container">
                    <nav>
                        <Link to='/features'>Features</Link>
                        <Link to='/faqs'>FAQs</Link>
                        <Link to='/contact'>Get in touch</Link>
                        <Link className="right btn-inline-dark" to='/dashboard'><i className="fa fa-sign-in" aria-hidden="true"></i> Login</Link>
                    </nav>
                </div>
            </div>

            <main>
                <div className="container text-center">
                    <div className="intro">
                    <h1>Welcome to <strong><i>Just Meet</i></strong></h1>
                        <h2>All your meetings and minutes...in one place</h2>
                    </div>
                </div>

                <section>
                    <div className="container">
                        <section className="row">
                            <div className="left third padding-left padding-right">
                                <div className="card">
                                    <figure>
                                        <img src="http://www.youthemploy.eu/sites/default/files/happy-meeting.jpg" />
                                    </figure>
                                    <div className="card-bottom">
                                        <h3>Productivity</h3>
                                        <p><b>Remind Attendees</b></p>
                                        <p>Attend effortlessly</p>
                                        <p>Run on time</p>
                                    </div>
                                </div>
                            </div>

                            <div className="left third padding-left padding-right">
                                <div className="card">
                                    <figure>
                                        <img src="img/pod-1.jpg" />
                                    </figure>
                                    <div className="card-bottom">
                                        <h3>Increase Accountability</h3>
                                        <p><b>Send out actions</b></p>
                                        <p>Chase todos</p>
                                        <p>Badger people automatically</p>
                                    </div>
                                </div>
                            </div>

                            <div className="left third padding-left padding-right">
                                <div className="card">
                                    <figure>
                                        <img src="http://www.transformingperformance.co.uk/wp-content/uploads/2015/12/boring-meeting1.jpg" />
                                    </figure>
                                    <div className="card-bottom">
                                        <h3>Make Meetings Powerful</h3>
                                        <p><b>Study key analytics</b></p>
                                        <p>See time spent</p>
                                        <p>Look at pretty graphs!</p>
                                    </div>
                                </div>
                            </div>
                        </section>

                        <div className="row text-center">
                            <h2>Enrole today and start saving time</h2>
                            <Link to="/register" className="btn-large-blue uppercase">Register</Link>
                        </div>
                    </div>
                </section>

            </main>

            <footer className="footer lightgrey-bg">
                <div className="container">
                    <div className="left copyright">&copy; <Moment format="YYYY">{self.state.now}</Moment> Just Meet</div>
                    <div className="right social-links">
                        <a href="https://facebook.com/" target="_blank"><i className="fa fa-facebook-square" aria-hidden="true"></i></a>
                        <a href="https://twitter.com/" target="_blank"><i className="fa fa-twitter-square" aria-hidden="true"></i></a>
                        <a href="https://google.com/plus" target="_blank"><i className="fa fa-google-plus-square" aria-hidden="true"></i></a>
                    </div>
                </div>
            </footer>
        </div>
    );
};