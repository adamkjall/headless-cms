export const getSlug = (path) =>
  path
    .toLowerCase()
    .trim()
    .replace(/ /g, "-")
    .replace(/å/g, "_x00e5_")
    .replace(/Å/g, "_x00c5_")
    .replace(/ä/g, "_x00e4_")
    .replace(/Ä/g, "_x00c4_")
    .replace(/ö/g, "_x00e6_")
    .replace(/Ö/g, "_x00c6_");
