export interface IIdea {
  date: string;
  tags: string;
  text: string;
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
export interface ISignin {
  id: number,
  username: string,
  email: string,
  roles: string [],
  type: string,
  token: string
}
