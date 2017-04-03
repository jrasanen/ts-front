import OtherAction from './other';
import User from '../models/User';


export type GetUser = 'meow/user/GetUser';
export const GetUser: GetUser = 'meow/user/GetUser';
export interface GetUserAction {
  type: GetUser;
  payload: User;
}


export type GetUserFailure = 'meow/user/GetUserFailure';
export const GetUserFailure: GetUserFailure = 'meow/user/GetUserFailure';
export interface GetUserFailureAction {
  type: GetUserFailure;
  error: true;
  payload: Error;
}


function fetchUser(email: string) {
  const user: User = {
    email: email,
    loggedIn: true
  };
  return Promise.resolve(user);
}


export function getUser(email: string) {
  return (dispatch: Function) =>
    fetchUser(email)
      .then((user) => {
        return dispatch({
          type: GetUser,
          payload: user
        });
      })
      .catch(err => dispatch({
        type: GetUserFailure,
        error: true,
        payload: err,
      }));
}


const initialState: User = {
  email: '',
  loggedIn: false
};

type UserAction = GetUserAction | GetUserFailureAction | OtherAction;


export default function(state: User = initialState, action: UserAction) {
  switch (action.type) {
    case GetUser:
      return action.payload;
    default:
      return state;
  }
}
