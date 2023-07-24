export async function fetchData<T>(
  route: string,
  options?: RequestInit
): Promise<T> {
  try {
    const res = await fetch(route, options);
    if (!res.ok) {
      const errorData = await res.json();
      throw new Error(
        `Failed to fetch data. Status: ${res.status} ${
          res.statusText
        }. Message: ${JSON.stringify(errorData)}`
      );
    }
    return (await res.json()) as Promise<T>;
  } catch (error) {
    if (error instanceof TypeError) {
      console.error("Network or CORS error: ", error);
    } else {
      console.error("API error: ", error);
    }
    throw error;
  }
}
