export interface IIdea {
  number: number;
  date: string;
  tags: string[];
  text: string;
  authors: string[];
  state: string;
  comments: string;
}

export interface IDropdownSelectItem {
  name: string;
  id: number;
}

export interface ITextFormCreate {
  title: string,
  description: string
}
