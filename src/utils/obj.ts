export function isVoid(value: any) {
  if (value === "" || value === undefined || value === null) return true;
  return false;
}

export function cleanObject(obj: Object) {
  const result = { ...obj };

  Object.keys(result).forEach((key) => {
    // @ts-ignore
    if (isVoid(result[key])) {
      // @ts-ignore
      delete result[key];
    }
  });
  return result;
}
