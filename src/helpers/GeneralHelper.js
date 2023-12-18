export const TextEllipsis = (text, n = 14) => {
  if (text?.length < n) return text;
  return text?.split("")?.slice(0, n)?.join("") + "...";
};
