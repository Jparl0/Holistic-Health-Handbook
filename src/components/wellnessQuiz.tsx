import React from 'react'
import { useState } from 'react'

type Props = {
    quizLengthChoice: string
    wellnessType: string
    prequizConfidence: number
}

const [lengthChoice, setLengthChoice] = useState("short")

function quizLengthSetter(quizChoice: Props) {
    if (quizChoice.quizLengthChoice !== string) {
        throw Error 
    }
    if (quizChoice.quizLengthChoice === "medium") {
        setLengthChoice("medium")
    }
    if (quizChoice.quizLengthChoice === "long") {
        setLengthChoice("long")
    }
}



export default function wellnessQuiz({wellnessQuestions}: Props) {
  return (
    <div id='quiz-section'>
        <div id='quiz-difficulty-outer'>
            <div id='quiz-difficulty-inner'>
                <form id='quiz-difficulty-choice' onSubmit={setLengthChoice()}>
                    <label> Short </label>
                    <input type='checkbox' name='short-choice' value={"short"}></input>
                    <label> Medium </label>
                    <input type='checkbox' name='medium-choice' value={"medium"}></input>
                    <label> Long </label>
                    <input type='checkbox' name='long-choice' value={"long"}></input>
                </form>
            </div>
        </div>
        <div id='quiz-outer-container'>
            <h3>{wellnessName}</h3>
            <div id='quiz-inner-container'>
                {/* map over the list of questions */}
            </div>
        </div>
        <div id='quiz-results-outer'>
            <div id='quiz-results-inner'>
                <h5 id='quiz-results-score'>
                    Results = {resultsNumber}
                </h5>
            </div>
            <div id='quiz-results-description-outer'>
                <p id='quiz-results-description-inner'>
                    Consider treating this score as way to gauge your awareness/confidence about your {wellnessName}. Awareness is the first stepping stone on our journey to maintain a health lifestyle.
                </p>
            </div>
        </div>
    </div>
  )
}