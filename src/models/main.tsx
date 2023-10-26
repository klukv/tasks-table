import { IUser } from "./user";

export interface IIdea {
  date: string;
  tags: string;
  text: string;
  state: string;
  comments: string;
  sequenceNumber?: number
}

export interface IDropdownSelectItem {
  name: string;
  id: number;
}

export interface ITextFormCreate {
  title: string,
  description: string
}

export interface IAllIdeas extends IIdea {
  id:number,
  author: IUser
}
