import { Text, TextArea } from "../TextFields";

const SurveyInformation = ({ onChange, onDummyClick }: any) => {
  return (
    <form className="survey__fade">
      <Text
        label="Title"
        name="title"
        placeholder="Enter Survey Title"
        type="text"
        className="create__input"
        onChange={onChange}
      />
      <TextArea
        label="Description"
        name="description"
        placeholder="Enter Survey Description"
        className="create__input"
        onChange={onChange}
      />
      <Text
        label="Questions"
        name="questionLength"
        placeholder="Select Number of Questions"
        type="number"
        className="create__input"
        onChange={onChange}
      />
      <div
        className="btn btn-primary btn-flex btn-center btn-height-50 btn-font-md"
        onClick={onDummyClick}
      >
        Next
      </div>
    </form>
  );
};

export default SurveyInformation;
