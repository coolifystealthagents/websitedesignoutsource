import { BlogListing } from "./blog-listing";
export const metadata = {
  title: "Blog",
  description: "Guides for planning Philippines-based staffing.",
  alternates: { canonical: "/blog" },
};
export default function Blog() {
  return <BlogListing />;
}
