import { RouterState, routerReducer } from 'react-router-redux';

import User from '../models/User';
import user from './user';

export interface State {
  user: User;
  routing: RouterState;
}


export default {
  user,
  routing: routerReducer
};
