import { Link } from "react-router-dom";
import { ChevronRight } from "lucide-react";
import { useEffect, useState } from "react";

const blogPosts = [
  {
    id: 1,
    category: "Projects",
    date: "June 5, 2025",
    title: "Inside Moira Villas: The Art of Material Harmony",
    excerpt:
      "Explore the textures, tones, and finishes that make Moira Villas a study in material balance — from taupe floors to bronze fixtures.",
    image: "/SCENE 8.png",
  },
  {
    id: 2,
    category: "Design",
    date: "June 5, 2025",
    title: "Beyond Square Feet: Rethinking Space in Urban Homes",
    excerpt:
      "It’s not about how much space you have — it’s how meaningfully you design it. Here’s our take on intentional living in compact layouts.",
    image: "/pic3.png",
  },
  {
    id: 3,
    category: "Trends",
    date: "June 5, 2025",
    title: "The Future of Living: Compact, Flexible, Smart",
    excerpt:
      "From compact homes to flexible spaces — here are a few ideas shaping future homes.",
    image: "/image2.png",
  },
];

const RelatedBlogs = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
 
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % blogPosts.length);
    },2000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="max-w-7xl mx-auto px-4 py-16">
      {/* Header */}
      <div className="md:flex flex-row justify-between items-center mb-10">
        <div className="mb-2">
          <p className="text-sm font-medium tracking-wider text-[#2D231A] uppercase">
            Related Blogs
          </p>
          <h2 className="text-3xl font-semibold text-[#393F36] mt-2">
            Lastest blog posts
          </h2>
        </div>
        <Link
          to="/blogs"
          className="flex items-center md:border-1 border-[#E7E9E6] text-[#0B2204] md:hover:bg-black md:hover:text-white justify-start md:px-4 py-2 rounded-full text-sm font-medium transition gap-3"
        >
          VIEW ALL
          <ChevronRight
            className="md:hidden  bg-[#E3E8E0] text-black rounded-full flex items-center justify-center hover:bg-[#0E0E0E] hover:text-white transition p-1"
            size={30}
            strokeWidth={2}
          />
        </Link>
      </div>

      {/* Blog Cards */}
      <div>
        {/* Mobile: Carousel */}
        <div className="sm:hidden w-full flex justify-center">
            <div className="w-[300px] bg-white h-[450px] flex flex-col transition duration-500 ease-in-out">
              <img
                src={blogPosts[currentIndex].image}
                alt={blogPosts[currentIndex].title}
                className="w-full h-[220px] object-cover"
              />
              <div className="p-5 flex-1 flex flex-col">
                <p className="text-xs font-semibold uppercase text-[#393F36] mb-2 tracking-wide">
                  {blogPosts[currentIndex].category}
                  <span className="text-[#828282]"> • {blogPosts[currentIndex].date}</span>
                </p>
                <h3 className="text-md font-semibold text-[#2E2E2E] mb-2">
                  {blogPosts[currentIndex].title}
                </h3>
                <p className="text-sm text-[#5F5F5F] leading-relaxed">
                  {blogPosts[currentIndex].excerpt}
                </p>
              </div>
            </div>
          </div>

        {/* Desktop View: Grid */}
        <div className="hidden sm:grid grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <Link to={`/blogs/${post.id}`} key={post.id} className="group">
              <img
                src={post.image}
                alt={post.title}
                className="w-full h-52 object-cover mb-4"
              />
              <p className="uppercase text-sm text-[#393F36] font-semibold tracking-wide">
                {post.category}{" "}
                <span className="text-[#828282]">• {post.date}</span>
              </p>
              <h3 className="text-lg font-semibold text-[#2E2E2E] group-hover:underline mt-2">
                {post.title}
              </h3>
              <p className="text-sm text-[#5F5F5F] mt-2">{post.excerpt}</p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RelatedBlogs;