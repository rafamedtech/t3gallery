import { db } from "@/server/db";

export const dynamic = "force-dynamic";

const mockURLs = [
  "https://utfs.io/f/1de94355-48ee-47a6-bb1e-4f82849bfbfb-17xemr.png",
  "https://utfs.io/f/613ee899-a5fd-4df2-bc12-5155e0ffe25b-x17v18.png",
  "https://utfs.io/f/e00eee6f-5db3-4c63-920e-50c27e307972-a9za8r.png",
  "https://utfs.io/f/90ef2385-7072-422a-bb5b-2914b08c27b2-y5l3p2.png",
  "https://utfs.io/f/90ef2385-7072-422a-bb5b-2914b08c27b2-y5l3p2.png",
];

const mockImages = mockURLs.map((url, index) => ({
  id: index + 1,
  url,
}));

export default async function HomePage() {
  const posts = await db.query.posts.findMany();

  console.log(posts);
  return (
    <main className="">
      <div className="flex flex-wrap gap-4">
        {posts.map((post) => (
          <div key={post.id}>{post.name}</div>
        ))}
        {mockImages.map((image) => (
          <div key={image.id} className="w-48">
            <img src={image.url} />
          </div>
        ))}
      </div>
    </main>
  );
}
