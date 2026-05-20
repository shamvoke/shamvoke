declare module 'commentbox.io' {
  interface CommentBoxOptions {
    className?: string;
    defaultBoxId?: string;
    sortOrder?: 'best' | 'newest' | 'oldest';
    backgroundColor?: string;
    textColor?: string;
    subtextColor?: string;
    singleSignOn?: {
      authUrl: string;
    };
  }

  function commentBox(projectId: string, options?: CommentBoxOptions): () => void;
  export default commentBox;
}