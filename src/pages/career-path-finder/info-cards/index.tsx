import React from 'react';

import InfoCard from '../../../components/info-card';

import './styles.css';

const CARD_ONE_SUMMARY="24 questions";
const CARD_ONE_DESCRIPTION="We will ask 24 questions relating to things you value and care about most.";

const CARD_TWO_SUMMARY="2 minutes";
const CARD_TWO_DESCRIPTION="Questions are on a scale from 1-5, and it is easy and quick to finish the test.";

const CARD_THREE_SUMMARY="Personal advice";
const CARD_THREE_DESCRIPTION="We'll offer you personalised advice, guide through available paths, and suggest further steps";

function InfoCards() {
    return (
        <div className="info-cards-root">
            <InfoCard icon="calendar" colour="orange" summary={CARD_ONE_SUMMARY} description={CARD_ONE_DESCRIPTION} />
            <InfoCard icon="timer" colour="blue" summary={CARD_TWO_SUMMARY} description={CARD_TWO_DESCRIPTION} />
            <InfoCard icon="scissors" colour="yellow" summary={CARD_THREE_SUMMARY} description={CARD_THREE_DESCRIPTION} />
        </div>
    )
}

export default InfoCards;
