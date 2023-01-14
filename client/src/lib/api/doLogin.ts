import { customAxios } from '../util/customAxios';

export const doLoginAPI = async (data: { email: string; password: string }) => {
  return await customAxios.post(`/users/login`, data);
};
