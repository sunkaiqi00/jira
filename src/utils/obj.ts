export function isVoid(value: any) {
  if (value === '' || value === undefined || value === null) return true;
  return false;
}

export function cleanObject(obj: Record<string, any>) {
  const result = { ...obj };
  Object.keys(result).forEach((key) => {
    if (isVoid(result[key])) {
      delete result[key];
    }
  });
  return result;
}
