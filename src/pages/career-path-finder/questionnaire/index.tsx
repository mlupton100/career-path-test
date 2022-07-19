import React, { useCallback, useEffect, useMemo, useState } from 'react';

import cloneDeep from 'lodash.clonedeep';

import ProgressBar from '../../../components/progress-bar';
import Question from '../../../components/question';

import './styles.css';

interface IQuestion {
    id: string;
    text: string;
  }

interface IAnswer {
    id: string;
    answer: number | undefined;
  }

function Questionnaire () {
    const [user, setUser] = useState<string | null>(null);
    const [stage, setStage] = useState<number>(0)
    const [questions, setQuestions] = useState<Array<IQuestion> | null>(null)
    const [answers, setAnswers] = useState<Array<IAnswer>>([]);
    
    const currentQuestion = useMemo(() => {
        if (questions) {
            return questions[stage];
        }
        return null;
    }, [stage, questions]);

    const goToNextPage = useCallback((id: string, value: number) => {
        console.log(id)
        console.log(value)
        const newAnswers = cloneDeep(answers);
        const existingAnswer = newAnswers.find((e: IAnswer) => e.id === id);
        if (existingAnswer) {
            existingAnswer.answer = value;
        } else {
            newAnswers.push({ id, answer: value })
        }
        setAnswers(newAnswers);
        setStage(stage + 1)
    }, [answers, stage])

    useEffect(() => {
        const urlParams = new URLSearchParams(window.location.search)
        const userParam = urlParams.get('user')
        setUser(userParam);

        fetch(`${process.env.REACT_APP_NOT_SECRET_API}?user=${userParam}`)
            .then(res => res.json())
            .then(data => {
                setQuestions(data.questions)
            })
            .catch(err => {
                setQuestions(null);
                // TODO display an error message
            })
    }, [])


    if (!user) {
        return (
        <div>
            Please login (set the 'user' url param and refresh the page)
        </div>
        )
    }

    if (!currentQuestion || !questions) {
        return (
            <div>
                Loading questionnaire.  Please wait.
            </div>
        )
    }

    return (
        <div className="questionnaire-root">
            <ProgressBar stage={stage + 1} totalStages={questions.length}/>
            <Question id={currentQuestion.id}
                    questionNumber={stage + 1}
                    totalQuestions={questions.length}
                    title={currentQuestion.text} 
                    goToNextPage={goToNextPage} />
        </div>
    )
}

export default Questionnaire;
