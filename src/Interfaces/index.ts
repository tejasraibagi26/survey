import { ChangeEventHandler, MouseEventHandler, ReactElement } from "react";

export interface TextField {
  label: string;
  type?: string;
  name: string;
  placeholder: string;
  className: string;
  labelClassName?: string;
  onChange: ChangeEventHandler;
  error?: boolean;
  defaultValue?: string;
}

export interface IDropdown {
  label: string;
  type?: string;
  placeholder: string;
  className: string;
  onChange: ChangeEventHandler;
  error?: boolean;
  options: string[];
  name: string;
  defaultValue?: string;
}

export interface IButton {
  buttonText: string;
  classNames?: string;
  spinner?: ReactElement;
  onClickFn?: MouseEventHandler;
  loading: Boolean;
}

export interface IUser {
  email?: string;
  username?: string;
  password?: string;
  confirmPassword?: string;
}

export interface ITaskBoard {
  id: string;
  name: string;
  description?: string;
  createdAt: string;
  updatedAt: string;
  createdBy: string;
  lastUpdatedBy: string;
  users: Object[];
  owner: string;
  inviteLink: string;
}

export interface ISurvey {
  title: string;
  description: string;
  questions: IQuestion[];
  questionLength: number;
}

export interface IQuestion {
  question: string;
  type: string;
  options: Object;
  required: boolean;
}

export interface IOptions {
  name: string;
  val: string;
}

export interface IQuestionComponent {
  onChangeQuestion: ChangeEventHandler;
  onSaveNext: MouseEventHandler;
  onChange: ChangeEventHandler;
  questions: any;
  index: number;
}
