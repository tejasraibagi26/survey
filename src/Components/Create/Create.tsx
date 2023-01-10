import React, { useState } from "react";
import { IQuestion, ISurvey } from "../../Interfaces";
import { Question, SurveyInformation } from "../Survey";

import "./create.css";
const Create = () => {
  const [survey, setSurvey] = useState<ISurvey>({
    title: "",
    description: "",
    questions: [],
    questionLength: 0,
  });

  const [questions, setQuestions] = useState<IQuestion>({
    question: "",
    type: "Single Choice",
    options: [],
    required: true,
  });

  const [currentQuestionIndex, setCurrentQuestionIndex] = useState<number>(0);

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSurvey((prev: any) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const onChangeQuestion = (e: React.ChangeEvent<HTMLInputElement>) => {
    let val: any = e.target.value;

    if (e.target.name === "required") {
      if (val === "Yes") val = true;
      else val = false;
    }

    if (e.target.name.includes("option")) {
      const options = {
        ...questions.options,
        [e.target.name]: val,
      };

      const updatedState = {
        ...questions,
        options,
      };

      setQuestions(updatedState);
    } else {
      setQuestions((prev) => ({
        ...prev,
        [e.target.name]: val,
      }));
    }
  };

  const onDummyClick = (e: React.ChangeEvent<HTMLElement>) => {
    console.log(survey);
    const fadeDiv = document.querySelector(".survey__fade");
    fadeDiv?.classList.add("fade-out");

    const questionDiv = document.querySelector(".survey_questions");
    setTimeout(() => {
      fadeDiv?.classList.add("hide");
    }, 500);
    setTimeout(() => {
      questionDiv?.classList.remove("hide");
      questionDiv?.classList.add("fade-in");
    }, 600);
  };

  const onSaveNext = () => {
    console.log(questions);
    console.log("Saving...");
    const allInputs = document.querySelectorAll(".create__input");
    allInputs.forEach((inp) => {
      inp.textContent = "";
    });

    setSurvey((prev) => ({
      ...prev,
      questions: [...prev.questions, questions],
    }));
    console.log("Save complete...");
    console.log("Resetting question state...");
    setQuestions({
      question: "",
      type: "Single Choice",
      options: [],
      required: true,
    });
    console.log(currentQuestionIndex, survey.questionLength);
    if (currentQuestionIndex === survey.questionLength - 1) {
      // Submit
      console.log("Submitting...");
      console.log(survey);
      return;
    }

    setCurrentQuestionIndex((prev) => prev + 1);
  };

  return (
    <section id="create">
      <div className="create__container">
        <div className="spacing" />
        <div className="create__header">
          <h1>Create Survey</h1>
        </div>
        <div className="spacing" />
        <div className="create__form">
          <SurveyInformation onChange={onChange} onDummyClick={onDummyClick} />
          <div className="survey_questions hide">
            {buildQuestionComponent(
              onChange,
              onChangeQuestion,
              onSaveNext,
              currentQuestionIndex,
              questions
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

function buildQuestionComponent(
  onChange: React.ChangeEventHandler,
  onChangeQuestion: React.ChangeEventHandler,
  onSaveNext: React.MouseEventHandler,
  currentQuestionIndex: number,
  questions: any
) {
  return (
    <Question
      onChange={onChange}
      onChangeQuestion={onChangeQuestion}
      onSaveNext={onSaveNext}
      index={currentQuestionIndex}
      questions={questions}
    />
  );
}

export default Create;
