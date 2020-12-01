const space = process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID;
const accessToken = process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN;

const client = require("contentful").createClient({
  space,
  accessToken,
});

export async function getAllPosts() {
  const entries = await client.getEntries({ content_type: "post" });
  if (entries.items) return entries.items;
  console.log(`Error getting posts`);
}

export async function getPostById(id) {
  return await client.getEntry(id);
}
