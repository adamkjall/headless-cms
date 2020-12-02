import { createClient } from "contentful";

const space = process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID;
const accessToken = process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN;

const client = createClient({
  space,
  accessToken,
});

const types = ["pageHome", "post", "project"];

export async function getAllPosts() {
  const entries = await client.getEntries({ content_type: "post" });
  if (entries.items) {
    return transformItems(entries.items);
  }

  console.log(`Error getting posts`);
}

export async function getPostById(id) {
  const item = await client.getEntry(id);
  return transformItem(item);
}

export async function getAllProjects() {
  const entries = await client.getEntries({ content_type: "project" });
  if (entries.items) {
    return transformItems(entries.items);
  }
}

export async function getHomePage() {
  const entries = await client.getEntries({ content_type: "pageHome" });
  if (entries) {
    const homePage = entries.items[0];
    const projectItems = entries.items[0].fields.projects;
    const postItems = entries.items[0].fields.postItems;
    const projects = transformItems(projectItems);
    const posts = transformItems(postItems);

    return {
      id: homePage.sys.id,
      title: homePage.fields.title,
      projects,
      posts,
    };
  }
}

// helpers
const transformItems = (items) =>
  items.map((item) => ({
    id: item.sys.id,
    ...item.fields,
  }));

const transformItem = (item) => ({
  id: item.sys.id,
  ...item.fields,
});
