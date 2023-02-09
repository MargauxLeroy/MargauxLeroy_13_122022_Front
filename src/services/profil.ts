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

/// Récupèration des données de l'utilisateur depuis l'API
export const apiProfile = async (token: string): Promise<UserDataExtended> => {
  const uri = `${process.env.REACT_APP_API_V1_URL}/user/profile`;

  const response = await fetchData<ProfileResponse>(uri, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return response.body;
};

/// Mise à jour des informations utilisateur vers l'API
export const apiUpdateProfile = async (
  token: string,
  updatedUserData: UserData
): Promise<UserDataExtended> => {
  const uri = `${process.env.REACT_APP_API_V1_URL}/user/profile`;

  const response = await fetchData<ProfileResponse>(uri, {
    method: "PUT",
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
    // Envoi des nouvelles informations de l'utilisateur
    body: JSON.stringify(updatedUserData),
  });

  return response.body;
};
