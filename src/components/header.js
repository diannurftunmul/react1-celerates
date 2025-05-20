import React, { useState, useEffect } from 'react';

const Header = () => {
    const [currentTime, setCurrentTime] = useState(new Date());

    useEffect(() => {
        const updateBodyPadding = () => {
            const headerHeight = document.querySelector('.navbar').offsetHeight;
            document.body.style.paddingTop = `${headerHeight}px`;
        };

        updateBodyPadding();
        window.addEventListener('resize', updateBodyPadding);

        return () => window.removeEventListener('resize', updateBodyPadding);
    }, []);

    // Update waktu header
    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentTime(new Date());
        }, 1000);

        return () => clearInterval(timer);
    }, []);

    const formattedTime = () => {
        return currentTime.toLocaleTimeString('id-ID', {
            hour: '2-digit',
            minute: '2-digit'
        });
    };

    const formattedDate = () => {
        return currentTime.toLocaleDateString('id-ID', {
            weekday: 'long',
            day: 'numeric',
            month: 'long',
            year: 'numeric'
        });
    };

    return (
        <nav
            className="navbar navbar-expand-lg navbar-light fixed-top shadow-sm"
            style={{
                backgroundColor: '#ffffff',
                padding: '10px',
                zIndex: 1030
            }}
        >
            <div className="container">
                <div className="navbar-brand d-flex align-items-center">
                    <img
                        src="/asset/AOZer.png"
                        className="rounded-circle"
                        alt="AOZer Logo"
                        style={{
                            height: '40px',
                            width: '40px',
                            borderRadius: '50%',
                            objectFit: 'cover',
                            marginRight: '10px',
                        }}
                    />
                    <span
                        className='me-3 fst-italic'
                        style={{
                            fontSize: '1rem',
                            fontWeight: 'bold',
                            color: '#5cb874'
                        }}
                    >
                        AOZer (Activity OrganiZer)
                    </span>
                </div>

                <div className="d-flex ms-auto align-items-center">
                    <div className="text-center">
                        <div style={{ fontSize: '1.2rem', fontWeight: 'bold' }}>
                            {formattedTime()}
                        </div>
                        <div style={{ fontSize: '0.8rem' }}>
                            {formattedDate()}
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Header;