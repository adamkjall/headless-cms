export const getSlug = (path) =>
  path
    .toLowerCase()
    .trim()
    .replace(/ /g, "-")
    .replace(/å/g, "a")
    .replace(/Å/g, "a")
    .replace(/ä/g, "a")
    .replace(/Ä/g, "a")
    .replace(/ö/g, "o")
    .replace(/Ö/g, "o");
