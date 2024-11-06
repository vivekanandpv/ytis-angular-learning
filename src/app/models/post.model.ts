export interface PostModel {
  id: number;
  userId: number;
  title: string;
  body: string;
}

export interface PostLoadSuccessPayload {
  payload: {
    posts: PostModel[];
  };
}

export interface PostSelector {
  posts: PostModel[];
}
