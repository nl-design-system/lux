export const isStatusValid = (response: number | Response): boolean => {
  const status = Number(response instanceof Response ? response.status : response);

  return status >= 200 && status <= 299;
};
