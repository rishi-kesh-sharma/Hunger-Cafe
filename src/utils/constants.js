export const API_PATHS = {
  GET_BANNERS: "banners",
  GET_CATEGORIES: "categories?type=Product&parent=true",
  GET_SUB_CATEGORIES: "categories?type=Product&child=true",
  GET_BLOGS: "blogs",
  GET_TEAMS: "teams",
  GET_TESTIMONIALS: "testimonials",
  GET_PRODUCTS: "products",
  GET_TEAM: "teams",
  GET_BLOG_DETAIL: (slug) => `blogs/${slug}`,
  GET_RELATED_BLOGS: (categoryId) => `blogs?category=${categoryId}`,
  ORDER: `orders`,
  CONTACTS: `contacts`,
};

export const validationRegex = {
  email: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
  phone: /(\+977)?[9][6-9]\d{8}/,
};
