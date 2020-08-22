import {
  GET_EMPLOYMENTS,
  ADD_EMPLOYMENT,
  DELETE_EMPLOYMENT,
  UPDATE_EMPLOYMENT,
} from "./constants";

const initialState = {
  employments:  [
    { title: "Hello world", id: 0 },
    { title: "React Redux Tutorial for Beginners", id: 1 },
    { title: "TypeScript tutorial for beginners", id: 2 },
  ],
};
function rootReducer(state = initialState, action) {
  // chộ biến initialStore là mặc định rồi
  switch (action.type) {
    case ADD_EMPLOYMENT:
      return {
        ...state,
        employments: [...state.employments, action.payload],
      };
    case GET_EMPLOYMENTS:
      return {
        ...state
      };
    case DELETE_EMPLOYMENT:
      return {
        ...state,
        employments: state.employments.filter(
          (employment) => employment.id !== action.payload.id// cái này làm theo cách id chứ ko phải index nhỉ
        ),
      };
    case UPDATE_EMPLOYMENT:
      let temp = state.employments;
      temp[action.key].title = action.payload.title;
      console.log(temp);
      return { ...state, employments: temp };
    default:
      return state;
  }
}
export default rootReducer;
