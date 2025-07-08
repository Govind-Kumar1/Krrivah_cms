import React, { useState } from "react";
import { Link } from "react-router-dom";

const categories = ["All", "Design", "Projects", "Trends", "Sustainability"];

const POSTS_PER_PAGE = 8;
const posts = [
  {
    id: 1,
    category: "Design",
    date: "June 5, 2025",
    title: "Why Design Thinking Matters in Real Estate",
    desc: "From intuitive layouts to natural light flow, design thinking is transforming how we imagine modern living. Here's how we integrate it at Krrivah.",
    image: "/SCENE 24.png",
  },
  {
    id: 2,
    category: "Projects",
    date: "June 5, 2025",
    title: "Inside Moira Villas: The Art of Material Harmony",
    desc: "Explore the textures, tones, and finishes that make Moira Villas a study in material balance — from taupe floors to bronze fixtures.",
    image: "SCENE 8.png",
  },
  {
    id: 3,
    category: "Design",
    date: "June 5, 2025",
    title: "Beyond Square Feet: Rethinking Space in Urban Ho...",
    desc: "It’s not about how much space you have — it’s how meaningfully you design it. Here’s our take on intentional living in compact layouts.",
    image: "pic3.png",
  },
  {
    id: 4,
    category: "Sustainability",
    date: "June 5, 2025",
    title: "Sustainable Homes Start with Simple Choices",
    desc: "It’s not about how much space you have — it’s how meaningfully you design it. Here’s our take on intentional living in compact layouts.",
    image: "pic2.png",
  },
  {
    id: 5,
    category: "Trends",
    date: "June 5, 2025",
    title: "Blending Tradition with Modern Architecture",
    desc: "Why today’s best homes beautifully borrow from both rich heritage and minimalism to stay timeless.",
    image: "image1.png",
  },
  {
    id: 6,
    category: "Trends",
    date: "June 5, 2025",
    title: "The Future of Living: Compact, Flexible, Smart",
    desc: "From compact homes to flexible spaces — here are a few ideas shaping future homes.",
    image: "image2.png",
  },
  {
    id: 7,
    category: "Design",
    date: "June 5, 2025",
    title: "Designing Homes That Feel Like They Belong",
    desc: "It’s not about how much space you have — it’s how meaningfully you design it. Here’s our take on intentional living in compact layouts.",
    image: "pic4.png",
  },
  {
    id: 8,
    category: "Sustainability",
    date: "June 5, 2025",
    title: "Nature-Inspired Design for Greener Living",
    desc: "It’s not about how much space you have — it’s how meaningfully you design it. Here’s our take on intentional living in compact layouts.",
    image: "image3.png",
  },
];

export default function BlogGrid() {
  const [currentPage, setCurrentPage] = useState(1);
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredPosts =
    activeCategory === "All"
      ? posts
      : posts.filter((post) => post.category === activeCategory);

  const totalPages = Math.ceil(filteredPosts.length / POSTS_PER_PAGE);
  const paginatedPosts = filteredPosts.slice(
    (currentPage - 1) * POSTS_PER_PAGE,
    currentPage * POSTS_PER_PAGE
  );

  const goToPage = (page) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  const getVisiblePages = () => {
    const pages = [];
    if (totalPages <= 7) {
      for (let i = 1; i <= totalPages; i++) pages.push(i);
    } else {
      if (currentPage <= 3) {
        pages.push(1, 2, 3, "...", totalPages - 1, totalPages);
      } else if (currentPage >= totalPages - 2) {
        pages.push(1, 2, "...", totalPages - 2, totalPages - 1, totalPages);
      } else {
        pages.push(
          1,
          "...",
          currentPage - 1,
          currentPage,
          currentPage + 1,
          "...",
          totalPages
        );
      }
    }
    return pages;
  };

  const handleCategoryChange = (cat) => {
    setActiveCategory(cat);
    setCurrentPage(1);
  };

  return (
    <div className="bg-[#f3f4f2] min-h-screen px-6 py-10 mt-12">
      <div className="max-w-screen mx-auto">
        <div className="flex flex-wrap gap-4 mb-10">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => handleCategoryChange(cat)}
              className={`px-4 py-1.5 rounded-full text-sm font-medium transition-colors duration-200 ${
                cat === activeCategory
                  ? "bg-black text-white"
                  : "bg-white text-gray-700 hover:bg-gray-100"
              }`}
            >
              {cat === "All" ? "View all" : cat}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {paginatedPosts.map((post) => (
            <Link to="/blogdetails">
              <div key={post.id} className="bg-white overflow-hidden shadow-sm">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-48 object-cover"
                />

                <div className="p-4">
                  <p className="text-xs uppercase text-gray-900 font-medium mb-1">
                    {post.category}{" "}
                    <span className="text-gray-400">• {post.date}</span>
                  </p>
                  <h3 className="font-semibold text-gray-900 text-base leading-snug mb-2">
                    {post.title}
                  </h3>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    {post.desc}
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </div>

        <div className="mt-12 flex justify-center">
          <div className="bg-white shadow-sm flex items-center divide-x divide-gray-200 overflow-hidden">
            <button
              onClick={() => goToPage(currentPage - 1)}
              disabled={currentPage === 1}
              className="px-4 py-2 text-sm flex items-center gap-1 hover:bg-gray-100 disabled:text-gray-400"
            >
              ← Previous
            </button>
            {getVisiblePages().map((page, index) => (
              <button
                key={index}
                onClick={() => typeof page === "number" && goToPage(page)}
                className={`px-4 py-2 text-sm font-medium hover:bg-gray-100 ${
                  page === currentPage
                    ? "bg-gray-100 text-black font-semibold"
                    : "text-gray-700"
                } ${page === "..." ? "cursor-default" : ""}`}
              >
                {page}
              </button>
            ))}
            <button
              onClick={() => goToPage(currentPage + 1)}
              disabled={currentPage === totalPages}
              className="px-4 py-2 text-sm flex items-center gap-1 hover:bg-gray-100 disabled:text-gray-400"
            >
              Next →
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}