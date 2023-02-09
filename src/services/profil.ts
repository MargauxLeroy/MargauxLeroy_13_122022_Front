import { fetchData } from "./fetch";

export type UserData = {
  firstName: string;
  lastName: string;
};

export type UserDataExtended = UserData & {
  email: string;
  createdAt: string;
  updatedAt: string;
  id: string;
};

type ProfileResponse = {
  status: number;
  message: string;
  body: UserDataExtended;
};

export const apiProfile = async (token: string) => {
  const uri = `${process.env.REACT_APP_API_V1_URL}/user/profile`;

  /// We fetch the user data from the API
  const response = await fetchData<ProfileResponse>(uri, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return response.body;
};

export const apiUpdateProfile = async (
  token: string,
  updatedUserData: UserData
) => {
  const uri = `${process.env.REACT_APP_API_V1_URL}/user/profile`;

  /// We send the new user data to the API
  const response = await fetchData<ProfileResponse>(uri, {
    method: "PUT",
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify(updatedUserData),
  });

  return response.body;
};
