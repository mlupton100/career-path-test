import React from 'react';
import { number, InferProps } from 'prop-types';

function ProgressBar({ stage, totalStages}: InferProps<typeof ProgressBar.propTypes>) {
    return (
        <div>
            <div>
                {stage}
            </div>
            <div>{totalStages}</div>
        </div>
    )
}

ProgressBar.propTypes = {
    stage: number.isRequired,
    totalStages: number.isRequired,
};

export default ProgressBar;
