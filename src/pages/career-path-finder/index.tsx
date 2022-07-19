import React from 'react';

import InfoCards from './info-cards'
import Questionnaire from './questionnaire';

import './styles.css';

import airportTaxi from '../../resources/career-path-finder/airport_taxi.svg';

const CareerPathFinder = () => {
    return (
        <div>
            <header>
                <div className='header'>
                    <div className="header__heading" role="heading" aria-level={1}>
                        <div className="header__heading__lede">CAREER PATH FINDER</div>
                        <div className="primary-heading">Discover the journey to your career</div>
                    </div>
                    <div className="header__image" style={{ backgroundImage: `url(${airportTaxi}` }}></div>
                </div>
                <InfoCards />
            </header>
            <main className="main">
                <h2 className="primary-heading">Career path test</h2>
                <p className="text">Complete this two minute test to get your results.</p>
                <Questionnaire />
            </main>
        </div>
    );
}

export default CareerPathFinder;
