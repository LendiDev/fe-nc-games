export const dashCaseToHumanReadableString = (string) => {
  return string[0].toUpperCase() + string.slice(1).replaceAll(/-/g, " ");
};
