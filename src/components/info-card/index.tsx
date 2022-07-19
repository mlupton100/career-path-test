import React from 'react';
import { oneOf, string, InferProps } from "prop-types";

import CalendarIcon from '../../resources/career-path-finder/icons/calendar.svg';
import ScissorsIcon from '../../resources/career-path-finder/icons/scissors.svg';
import TimerIcon from '../../resources/career-path-finder/icons/timer.svg';

import './styles.css';

function InfoCard({ icon, colour, summary, description }: InferProps<typeof InfoCard.propTypes>) {

    const renderIcon = () => {
        let iconSVG;
        switch (icon) {
            case "calendar":
                iconSVG = CalendarIcon;
                break;
            case 'scissors':
                iconSVG = ScissorsIcon;
                break;
            case 'timer':
                iconSVG = TimerIcon;
                break;
            default:
                iconSVG = null;
        }
        if (iconSVG) {
            return <img src={iconSVG} width={24} height={24} alt="" role="presentation" color=''/>
        }
        return "";
        
    }

    const getIconDecorator = () => {
        let itemClass;
        switch (colour) {
            case 'orange':
                itemClass = 'info-card-container__icon-container--orange';
                break;
            case 'blue':
                itemClass = 'info-card-container__icon-container--blue';
                break;
            case 'yellow':
                itemClass = 'info-card-container__icon-container--yellow'
                break;
            default:
                itemClass = '';
        }
        return itemClass;
    }

    return (
            <div className="info-card-root">
                <div className="info-card-container">
                    <div className={`info-card-container__icon-container ${getIconDecorator()}`}>
                        <div className="info-card-container__icon-container__icon">
                            {renderIcon()}
                        </div>
                    </div>
                    <div className="info-card-container__content">
                        <h2 className="info-card-container__content__summary">{summary}</h2>
                        <p className="info-card-container__content__description">{description}</p>
                    </div>
                </div>
            </div>
        )
};

InfoCard.propTypes = {
    icon: oneOf(['calendar', 'timer', 'scissors']).isRequired,
    colour: oneOf(['orange', 'blue', 'yellow']).isRequired,
    summary: string.isRequired,
    description: string.isRequired,
};

export default InfoCard;
