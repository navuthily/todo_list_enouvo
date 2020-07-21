import { GET_ARTICLES, ADD_ARTICLE , DELETE_ARTICLE,UPDATE_ARTICLE} from "./constants";

const initialState = {
  articles: []
};
function rootReducer(state = initialState, action) {// chộ biến initialStore là mặc định rồi
  switch (action.type) {
    case ADD_ARTICLE:
      return {
        ...state,
        articles: [...state.articles, action.payload]
      };
    case GET_ARTICLES:
      return {
        ...state,
        articles: [
          { title: "Hello world", id: 0 },
          { title: "React Redux Tutorial for Beginners", id: 1 },
          { title: "TypeScript tutorial for beginners", id: 2 }
        ]
      };
      case DELETE_ARTICLE:     
      return {
        ...state,
        articles: state.articles.filter(article => article.id !== action.payload.id)
      }    
      case UPDATE_ARTICLE:
      let temp = state.articles;
      temp[action.key].title=action.payload.title;
      console.log(temp);
      return {...state, articles:temp}  
    default:
      return state;
  }
}
export default rootReducer;


