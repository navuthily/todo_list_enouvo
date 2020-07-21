import { GET_ARTICLES, ADD_ARTICLE , DELETE_ARTICLE, UPDATE_ARTICLE} from "./constants";

export function getArticlesAction() {
  return { type: GET_ARTICLES };
}

export function addArticleAction(data) {
  return {
    type: ADD_ARTICLE,
    payload: data
  };
}

export function deleteArticleAction(data) {
  return {
    type: DELETE_ARTICLE,
    payload:data
  };
}
export function updateArticleAction(data,key) {
  return {
    type: UPDATE_ARTICLE,
    payload:data,
    key:key
  };
}

