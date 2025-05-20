import React from 'react';

const Footer = () => {
    return (
        <div className="footer-wrapper" style={{ position: 'relative', marginTop: '-7px' }}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" style={{ display: 'block', width: '100%' }}>
                <path
                    fill="#5cb874"
                    fillOpacity="1"
                    d="M0,32L48,69.3C96,107,192,181,288,186.7C384,192,480,128,576,101.3C672,75,768,85,864,106.7C960,128,1056,160,1152,170.7C1248,181,1344,171,1392,165.3L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
                ></path>
            </svg>

            <footer className="text-white text-center" style={{
                backgroundColor: '#5cb874',
                padding: '20px 5px 15px 5px',
                marginTop: '-1px'
            }}>
                <div className="container text-center text-white">
                    <h3 className="fst-italic mb-3">AOZer</h3>
                    <p className='fst-italic'>
                        "One Small Step, One Big Change"
                    </p>
                    <div className="copyright mt-3">
                        &copy; 2025 <strong><span>Dian Nurdiansyah</span></strong>. All Rights Reserved
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default Footer;