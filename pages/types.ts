export interface IUser {
  _v: number;
  _id: string;
  createdAt: string;
  email: string;
  fullName: string;
  passwordHash: string;
  updatedAt: string;
  token: string;
}

export interface ILocalUser {
  isLogged: boolean;
  token: string;
  me: IUser;
}

export interface post {
  imageUrl?: string;
  __v: number;
  _id: string;
  createdAt: string;
  tags: Array<string>;
  text: string;
  title: string;
  updatedAt: string;
  user: IUser;
  viewsCount: number;
}

export interface IPost {
  tags: Array<string>;
  title: string;
  text: string;
  id: string;
  fullName: string;
  viewsCount: number;
  imageUrl: string;
}
