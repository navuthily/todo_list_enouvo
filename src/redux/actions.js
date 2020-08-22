import {
  GET_EMPLOYMENTS,
  ADD_EMPLOYMENT,
  DELETE_EMPLOYMENT,
  UPDATE_EMPLOYMENT,
} from "./constants";

export function getemploymentsAction() {
  return { type: GET_EMPLOYMENTS };
}

export function addemploymentAction(data) {
  return {
    type: ADD_EMPLOYMENT,
    payload: data,
  };
}

export function deleteemploymentAction(data, key) {
  console.log(data, key)
  return {
    type: DELETE_EMPLOYMENT,
    payload: data,
    key:key
  };
}
export function updateemploymentAction(data, key) {
  return {
    type: UPDATE_EMPLOYMENT,
    payload: data,
    key: key,
  };
}
