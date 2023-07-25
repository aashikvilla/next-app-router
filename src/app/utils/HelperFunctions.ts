export function updateURLParameters(
  path: string,
  paramToUpdate: string,
  newValue: any
) {
  const urlParts = path.split("?");
  const params = new URLSearchParams(urlParts[1] || "");
  params.set(paramToUpdate, newValue);
  return `${urlParts[0]}?${params.toString()}`;
}
