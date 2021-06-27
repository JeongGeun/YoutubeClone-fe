import axios from 'axios';
import { SIGNIN_USER } from './type';

export function signInUser(dataToSubmit) {
  const request = axios.post('/api/auth', dataToSubmit).then(res => res.data);
  return {
    type: SIGNIN_USER,
    payload: request,
  };
}
