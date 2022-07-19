import React, { useCallback } from 'react';
import { string, number, func, InferProps } from 'prop-types';

import './styles.css'
import RadioInput from '../radio-input';

function Question({ id, questionNumber, totalQuestions, title, goToNextPage }: InferProps<typeof Question.propTypes>) {

    const answer = useCallback((event: any) => {
        goToNextPage(event.target.value);
    }, [goToNextPage]);

    return (
    <form onSubmit={goToNextPage} className='question-root'>
        <div className='question-counter'>{`Q${questionNumber}/${totalQuestions}`}</div>
        <div role="heading" aria-level={3}>
            <div>In a job I would be motivated by</div>
            <div>{title}</div>
        </div>

        <fieldset>
            <legend className='sr-only'>0 for strongly disagree, 7 for strongly agree</legend>
            <RadioInput id={`question-${questionNumber}-0`} value={0} onSelect={answer} />
            <RadioInput id={`question-${questionNumber}-1`} value={1} onSelect={answer} />
            <RadioInput id={`question-${questionNumber}-2`} value={2} onSelect={answer} />
            <RadioInput id={`question-${questionNumber}-3`} value={3} onSelect={answer} />
            <RadioInput id={`question-${questionNumber}-4`} value={4} onSelect={answer} />
            <RadioInput id={`question-${questionNumber}-5`} value={5} onSelect={answer} />
            <RadioInput id={`question-${questionNumber}-6`} value={6} onSelect={answer} />
            <RadioInput id={`question-${questionNumber}-7`} value={7} onSelect={answer} />
        </fieldset>
    </form>
    )
}

Question.propTypes = {
    id: string.isRequired,
    questionNumber: number.isRequired,
    totalQuestions: number.isRequired,
    title: string.isRequired,
    goToNextPage: func.isRequired,
}

export default Question;
