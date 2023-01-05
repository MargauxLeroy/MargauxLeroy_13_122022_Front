import { fetchData } from "./fetch";

export type Credentials = {
  email: string;
  password: string;
};

type LoginResponse = {
  status: number;
  message: string;
  body: {
    token: string;
  };
};

export const apiLogin = async (credentials: Credentials): Promise<string> => {
  const uri = `${process.env.REACT_APP_API_V1_URL}/user/login`;

  /// We fetch token from API
  const response = await fetchData<LoginResponse>(uri, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(credentials),
  });

  return response.body.token;
};
