import React, { useState } from 'react';
import { useNavigate  } from 'react-router-dom';
import '../index.css';
import { makeStyles } from '@material-ui/core/styles';

const Home = () => {
    const navigate = useNavigate();

    const handleReportButtonClick = () => {
        navigate('/signin')

    };

    return (
        <> 
            <div className='home'>
                <div className="welcome-container">
                        <div className="welcome-description">
                            <h1>Resolve your IT issues with us</h1>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                                incididunt ut labore et dolore magna aliqua. Sit amet mattis vulputate enim
                                nulla aliquet porttitor. Neque sodales ut etiam sit amet.</p>
                            <div className="button-container">
                                <button className="report-button" onClick={handleReportButtonClick}>Report Now</button>
                            </div>
                        </div>
                </div>
            </div>
            
        </>
    );
};

export default Home;

