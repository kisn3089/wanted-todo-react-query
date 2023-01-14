import { customAxios } from '../util/customAxios';

export const createUserAPI = async (data: {
  email: string;
  password: string;
}) => {
  return await customAxios.post(`/users/create`, data);
};
