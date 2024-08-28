export interface IRequestError extends Error {
  status?: number;
}

const requestError = (status: number, message: string): IRequestError => {
  const error = new Error(message) as IRequestError;
  error.status = status;
  console.log(error);

  return error;
};

export default requestError;
