/**
 * Function that will fetch the URI
 * @param uri
 * @returns { Promise<any> }
 */
export const fetchData = async (uri?: string) => {
    if (!uri) return;
    console.log(uri);
  
    const data = await fetch(uri);
    const response = await data.json();
  
    return response.data;
  };
  