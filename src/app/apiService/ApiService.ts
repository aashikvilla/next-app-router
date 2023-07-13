const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;

export async function fetchData<T>(
  route: string,
  options?: RequestInit
): Promise<T> {
  const res = await fetch(`${BASE_URL}/${route}`, {
    ...options,
  });

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  return res.json() as Promise<T>;
}
