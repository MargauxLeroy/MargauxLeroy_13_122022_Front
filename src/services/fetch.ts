/// Fonction générale de fetch
export const fetchData = async <T>(
  uri: string,
  init?: RequestInit | undefined
): Promise<T> => {
  const data = await fetch(uri, init);

  if (!data.ok) throw new Error(`HTTP Request failed with ${data.status}`);

  const response = await data.json();

  return response as T;
};
