export const CDN_URL = `https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/`;

export const GET_RESTAURANTS_URL =
  "https://swiggyapiwrapper.dineshrout.repl.co/api/restaurants";

export const API_PATHS = {
  GET_BANNERS: "banners",
  GET_CATEGORIES: "categories?type=Product",
  GET_SUB_CATEGORIES: "categories?type=Product&child=true",
  GET_BLOGS: "blogs",
  GET_TEAMS: "teams",
  GET_TESTIMONIALS: "testimonials",
  GET_PRODUCTS: "products",
  GET_BLOG_DETAIL: (slug) => `blogs/${slug}`,
  GET_RELATED_BLOGS: (categoryId) => `blogs?category=${categoryId}`,
  ORDER: `orders`,
};
