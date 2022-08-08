export interface post {
  _id: string;
  tags: Array<string>;
  text: string;
  title: string;
  viewsCount: string;
}

export interface IPost {
  tags: Array<string>;
  title: string;
  text: string;
  id: string;
}
