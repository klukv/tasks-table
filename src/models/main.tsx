export interface IIdea {
  date: string;
  tags: string;
  text: string;
  author: string;
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
}

export interface IChangeContent {
  isChangeStatus: boolean,
  isChangeComment: boolean
}
