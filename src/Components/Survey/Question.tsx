import { IQuestionComponent } from "../../Interfaces";
import { Dropdown, Text } from "../TextFields";

const Question = ({
  onChangeQuestion,
  questions,
  onSaveNext,
  index,
}: IQuestionComponent) => {
  return (
    <>
      <div className="question">
        <Text
          label={`Question ${index + 1}`}
          placeholder="Enter Question"
          type="text"
          defaultValue={questions.question}
          className="create__input question__input"
          onChange={onChangeQuestion}
          name={"question"}
        />
      </div>
      <div
        className={`question ${
          questions.type === "Single Choice" ||
          questions.type === "Multiple Choice"
            ? "flex-question"
            : ""
        }`}
      >
        <Dropdown
          label="Type"
          name="type"
          placeholder="Select Answer Type"
          className="create__input"
          onChange={onChangeQuestion}
          defaultValue={questions?.type}
          options={["Single Choice", "Multiple Choice", "Text", "True / False"]}
        />

        <div className="ans">
          {questions.type === "Single Choice" ||
          questions.type === "Multiple Choice" ? (
            <div className="single-ans-template">
              <Text
                label="Opt 1"
                name="option1"
                defaultValue={questions?.options?.option1}
                placeholder="Enter Option 1"
                type="text"
                className="create__input question__input"
                labelClassName="small"
                onChange={onChangeQuestion}
              />
              <Text
                label="Opt 2"
                name="option2"
                defaultValue={questions?.options?.option2}
                placeholder="Enter Option 2"
                type="text"
                className="create__input question__input"
                labelClassName="small"
                onChange={onChangeQuestion}
              />
              <Text
                label="Opt 3"
                name="option3"
                defaultValue={questions?.options?.option3}
                placeholder="Enter Option 3"
                type="text"
                className="create__input question__input"
                labelClassName="small"
                onChange={onChangeQuestion}
              />
              <Text
                label="Opt 4"
                name="option4"
                defaultValue={questions?.options?.option4}
                placeholder="Enter Option 4"
                type="text"
                className="create__input question__input"
                labelClassName="small"
                onChange={onChangeQuestion}
              />
            </div>
          ) : (
            ""
          )}
        </div>
      </div>
      <div className="question">
        <Dropdown
          label="Required"
          name="required"
          placeholder="Select Answer Type"
          className="create__input"
          onChange={onChangeQuestion}
          options={["Yes", "No"]}
          defaultValue={questions?.required ? "Yes" : "No"}
        />
      </div>
      <div
        className="btn btn-primary btn-flex btn-center btn-height-50 btn-font-md btn-w-50"
        onClick={onSaveNext}
      >
        Save & Next
      </div>
    </>
  );
};

export default Question;
