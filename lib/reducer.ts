export const booksReducer = (state: Book[], action: Action) => {
  switch (action.type) {
    case "add":
      const newBook: Book = {
        id: crypto.randomUUID(),
        title: action.payload.title,
        author: action.payload.author,
        likes: 0,
      };
      return [newBook, ...state];
    case "sort":
      return [...state].sort((a, b) => b.likes - a.likes);
    default:
      return state;
  }
};
