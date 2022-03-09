export const isVoid = (value: unknown): boolean =>
  value === null || value === undefined || value === "";

export const clearObject = (object: { [propName: string]: unknown }) => {
  if (!object) {
    return {};
  }
  const result = { ...object };
  for (const key in result) {
    if (result.hasOwnProperty(key)) {
      if (isVoid(result[key])) {
        delete result[key];
      }
    }
  }
  return result;
};
