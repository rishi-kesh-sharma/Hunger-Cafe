import CategoryImage from "../../src/images/category/category.png";
import {
  person1,
  person2,
  person3,
  person4,
  person5,
} from "../../src/images/people";
import { person1 as AuthorImage } from "../images/people";
import {
  blog1,
  blog2,
  blog3,
  blog4,
  blog5,
  blog6,
  blog7,
  blog8,
} from "../images/blog";
import BurgerImage from "../images/product/Food/Burger.png";
import BurgerCategoryImage from "../images/product/Food/Burger.png";
import PizzaCategoryImage from "../images/product/Food/Pizzaa.png";
import MomoCategoryImage from "../images/product/Food/C momo.png";
import ChowmeinCategoryImage from "../images/product/Food/Chowmein.png";
import FrenchFriesCategoryImage from "../images/product/Food/French fries.png";
import ButterChicken from "../images/product/Meals/Butter chicken.png";
import KeemaNoodles from "../images/product/Meals/keema noodles.png";
import ChefImage1 from "../images/chef/chef1.jpg";
import ChefImage2 from "../images/chef/chef2.jpg";
import ChefImage3 from "../images/chef/chef3.jpg";
import ChefImage4 from "../images/chef/chef4.jpg";

import { FaFacebook, FaTwitter, FaLinkedin } from "react-icons/fa";

export const categories = [
  {
    id: 1,
    image: CategoryImage,
    name: "Drinks",
  },
  {
    id: 2,
    image: CategoryImage,
    name: "Food",
  },
  {
    id: 3,
    image: CategoryImage,
    name: "Soft Drinks",
  },

  {
    id: 4,
    image: CategoryImage,
    name: "Desserts",
  },
  {
    id: 5,
    image: CategoryImage,
    name: "Meals",
  },
  {
    id: 6,
    image: CategoryImage,
    name: "Spices",
  },
];

export const faqs = [
  {
    question: "What type of Nepali cuisine do you offer? ",
    answer:
      " Provide information about the specific types of Nepali dishes or regional cuisines your restaurant specializes in.",
  },
  {
    question:
      "Are there any traditional Nepali dining customs I should be aware of?",
    answer:
      "Offer guidance on Nepali dining etiquette or customs that customers may find helpful, especially if they are new to Nepali cuisine.",
  },
  {
    question: "Do you serve vegetarian options?",
    answer:
      " Highlight any vegetarian or vegan dishes on your menu, considering the cultural significance of vegetarianism in Nepal.",
  },
  {
    question: "Can I enjoy a view of the Himalayas from your restaurant?",
    answer:
      "If your restaurant offers scenic views, particularly of the Himalayan mountains, let customers know about this unique feature.",
  },
  {
    question: "Are there any local ingredients used in your dishes?",
    answer:
      "Emphasize if your restaurant sources ingredients locally, supporting the community and providing an authentic taste of Nepali cuisine.",
  },
];

export const testimonials = [
  {
    ratings: 5,
    image: person1,
    name: "Jane",
    designation: "CEO of a software development company.",
    review:
      "Using Hunger Cafe has been a game-changer for our business. It has allowed us to quickly scale our infrastructure without having to worry about hardware limitations or maintenance.",
  },
  {
    ratings: 5,
    image: person2,
    name: "Tom",
    designation: "CTO of a financial services company",
    review:
      "We migrated to Hunger Cafe a few years ago and haven't looked back. The service has been reliable and the pricing is very competitive. The cloud support team has been very helpful in resolving any issues we have encountered.",
  },
  {
    ratings: 3,
    image: person3,
    name: "Mary",
    designation: "CTO of a startup ",
    review:
      "It has been a great solution for our startup. The pricing is very affordable, and the platform is easy to use. The customer support team has been very responsive whenever we have had any issues.",
  },
  {
    ratings: 5,
    image: person4,
    name: "Johan Smith",
    designation: "One of our clients",
    review:
      "It has been a great solution for our startup. The pricing is very affordable, and the platform is easy to use. The customer support team has been very responsive whenever we have had any issues.",
  },
  {
    ratings: 5,
    image: person5,
    name: "Johan Smith",
    designation: "One of our clients",
    review:
      "It has been a great solution for our startup. The pricing is very affordable, and the platform is easy to use. The customer support team has been very responsive whenever we have had any issues.",
  },
];

export const blogs = [
  {
    slug: {
      current: 1,
    },
    image: blog1,
    author: {
      name: "john Doe",
      image: AuthorImage,
      alt: "author image",
    },
    title:
      "Architectural Engineering Wonders of the modern era for your Inspiration",
    publishedAt: "October 21, 2022",
    createdAt: "October 21, 2022",
  },
  {
    slug: {
      current: 2,
    },
    image: blog2,
    author: {
      name: "hello Nepal",
      image: AuthorImage,
      alt: "author image",
    },
    title:
      "Architectural Engineering Wonders of the modern era for your Inspiration",
    publishedAt: "October 21, 2022",
    createdAt: "October 21, 2022",
  },
  {
    slug: {
      current: 3,
    },
    image: blog3,
    author: {
      name: "john Doe",
      image: AuthorImage,
      alt: "author image",
    },
    title:
      "Architectural Engineering Wonders of the modern era for your Inspiration",
    publishedAt: "October 21, 2022",
    createdAt: "October 21, 2022",
  },
  {
    slug: {
      current: 4,
    },
    image: blog4,
    author: {
      name: "john Doe",
      image: AuthorImage,
      alt: "author image",
    },
    title:
      "Architectural Engineering Wonders of the modern era for your Inspiration",
    publishedAt: "October 21, 2022",
    createdAt: "October 21, 2022",
  },

  {
    slug: {
      current: 5,
    },
    image: blog5,
    author: {
      name: "john Doe",
      image: AuthorImage,
      alt: "author image",
    },
    title:
      "Architectural Engineering Wonders of the modern era for your Inspiration",
    publishedAt: "October 21, 2022",
    createdAt: "October 21, 2022",
  },
  {
    slug: {
      current: 6,
    },
    image: blog6,
    author: {
      name: "john Doe",
      image: AuthorImage,
      alt: "author image",
    },
    title:
      "Architectural Engineering Wonders of the modern era for your Inspiration",
    publishedAt: "October 21, 2022",
    createdAt: "October 21, 2022",
  },
  {
    slug: {
      current: 7,
    },
    image: blog7,
    author: {
      name: "john Doe",
      image: AuthorImage,
      alt: "author image",
    },
    title:
      "Architectural Engineering Wonders of the modern era for your Inspiration",
    publishedAt: "October 21, 2022",
    createdAt: "October 21, 2022",
  },
  {
    slug: {
      current: 8,
    },
    image: blog8,
    author: {
      name: "john Doe",
      image: AuthorImage,
      alt: "author image",
    },
    title:
      "Architectural Engineering Wonders of the modern era for your Inspiration",
    publishedAt: "October 21, 2022",
    createdAt: "October 21, 2022",
  },
];

export const footer = [
  {
    title: "LINKS",
    text: [
      { list: "About", link: "/about" },
      // { list: "Blog", link: "/blogs" },
      { list: "Contact", link: "/contact" },
      // { list: "Login", link: "/auth" },
    ],
  },
  {
    title: "PAGES",
    text: [
      { list: "Home ", link: "/" },
      { list: "About ", link: "/about" },
      { list: "Products ", link: "/products/category/1" },
      { list: "Blogs", link: "/blogs" },
      // { list: "Terms and Conditions", link: "/terms" },
    ],
  },
  {
    title: "CONTACT US",
    text: [
      { cursor: false, list: "info@hungercafe.com" },
      { cursor: false, list: "+61 4100 111 66" },
      { cursor: false, list: "Lagankhel,Lalitpur" },
      {
        type: "external",
        list: (
          <div className="mt-2 flex gap-2">
            <a
              className="text-white"
              href="https://facebook.com/"
              rel="noreferrer"
              target="_blank">
              <FaFacebook />
            </a>
            <a
              className="text-white"
              href="https://twitter.com/"
              rel="noreferrer"
              target="_blank">
              <FaTwitter />
            </a>
            <a
              className="text-white"
              href="https://linkedin.com/"
              rel="noreferrer"
              target="_blank">
              <FaLinkedin />
            </a>
          </div>
        ),
      },
    ],
  },
];

export const products = [
  {
    id: 1,
    image: BurgerImage,
    name: "Classic Burger",
    description:
      "A delicious classic cheeseburger with lettuce, tomato, and special sauce.",
    itemPrice: 200, // Nepali Rupees
    quantity: 10,
  },
  {
    id: 2,
    image: BurgerImage,
    name: "Margherita Pizza",
    description:
      "Authentic Margherita pizza with fresh mozzarella, tomatoes, and basil.",
    itemPrice: 320, // Nepali Rupees
    quantity: 10,
  },
  {
    id: 3,
    image: BurgerImage,
    name: "Spaghetti Bolognese",
    description: "Spaghetti served with rich and savory Bolognese sauce.",
    itemPrice: 320, // Nepali Rupees
    quantity: 10,
  },
  {
    id: 4,
    image: BurgerImage,
    name: "Sushi Platter",
    description: "Assorted sushi rolls with fresh fish and rice.",
    itemPrice: 500, // Nepali Rupees
    quantity: 10,
  },
  {
    id: 5,
    image: BurgerImage,
    name: "Caesar Salad",
    description:
      "Fresh Caesar salad with romaine lettuce, croutons, and Caesar dressing.",
    itemPrice: 300, // Nepali Rupees
    quantity: 10,
  },
  {
    id: 6,
    image: BurgerImage,
    name: "Classic Burger",
    description:
      "A delicious classic cheeseburger with lettuce, tomato, and special sauce.",
    itemPrice: 200, // Nepali Rupees
    quantity: 10,
  },
  {
    id: 7,
    image: BurgerImage,
    name: "Margherita Pizza",
    description:
      "Authentic Margherita pizza with fresh mozzarella, tomatoes, and basil.",
    itemPrice: 320, // Nepali Rupees
    quantity: 10,
  },
  {
    id: 8,
    image: BurgerImage,
    name: "Spaghetti Bolognese",
    description: "Spaghetti served with rich and savory Bolognese sauce.",
    itemPrice: 320, // Nepali Rupees
    quantity: 10,
  },
  {
    id: 9,
    image: BurgerImage,
    name: "Sushi Platter",
    description: "Assorted sushi rolls with fresh fish and rice.",
    itemPrice: 500, // Nepali Rupees
    quantity: 10,
  },
  {
    id: 10,
    image: BurgerImage,
    name: "Caesar Salad",
    description:
      "Fresh Caesar salad with romaine lettuce, croutons, and Caesar dressing.",
    itemPrice: 300, // Nepali Rupees
    quantity: 10,
  },
  // Add more items as needed
];

export const initialCartItems = [
  {
    item: {
      id: 1,
      image: BurgerImage,
      name: "Classic Cheeseburger",
      description:
        "A delicious classic cheeseburger with lettuce, tomato, and special sauce.",
      itemPrice: 200, // Nepali Rupees
      quantity: 10,
    },
    quantity: 1,
  },

  {
    item: {
      id: 3,
      image: BurgerImage,
      name: "Spaghetti Bolognese",
      description: "Spaghetti served with rich and savory Bolognese sauce.",
      itemPrice: 320, // Nepali Rupees
      quantity: 10,
    },
    quantity: 1,
  },

  {
    item: {
      id: 5,
      image: BurgerImage,
      name: "Caesar Salad",
      description:
        "Fresh Caesar salad with romaine lettuce, croutons, and Caesar dressing.",
      itemPrice: 200, // Nepali Rupees
      quantity: 10,
    },
    quantity: 1,
  },
  // Add more items as needed
];
export const subCategories = [
  {
    id: 1,
    name: "Pizzas",
    image: PizzaCategoryImage,
  },
  {
    id: 2,
    name: "Momos",
    image: MomoCategoryImage,
  },
  {
    id: 3,
    name: "Chowmein",
    image: ChowmeinCategoryImage,
  },
  {
    id: 4,
    name: "French Fries",
    image: FrenchFriesCategoryImage,
  },
];

export const features = [
  {
    title: "A Culinary Symphony",
    description:
      "Step into a world where flavors dance on your palate, and every bite tells a story. Our menu is a symphony of culinary delights, curated with a blend of traditional and innovative techniques. From mouthwatering appetizers to decadent desserts, each dish is a celebration of fresh, locally-sourced ingredients that come together to create a culinary masterpiece",
  },
  {
    title: "Ambiance Beyond Compare",
    description:
      "Immerse yourself in an atmosphere that transcends the ordinary. The warm, inviting ambiance of [Restaurant/Cafe Name] is designed to be a sanctuary for those seeking a respite from the hustle and bustle of everyday life. Whether you're enjoying an intimate dinner for two or a lively gathering with friends, our space is crafted to enhance your dining experience ",
  },
  //   {
  //     title: "Artisanal Beverages",
  //     description: `
  // Quench your thirst with our selection of artisanal beverages. From handcrafted cocktails to premium coffee blends, each sip is a revelation. Our skilled baristas and mixologists take pride in creating drinks that not only refresh but also delight the senses, complementing the flavors on your plate.

  //   `,
  //   },

  {
    title: `Exceptional Service`,
    description:
      "Our dedicated team of culinary artisans, servers, and hospitality professionals are here to ensure your experience is nothing short of extraordinary. Attentive yet unobtrusive, our service is tailored to anticipate your needs and exceed your expectations.",
  },
  {
    title: "Sustainability Matters",
    description:
      "At Hunger Cafe, we believe in responsible dining. Our commitment to sustainability is reflected in our sourcing practices, waste reduction initiatives, and environmentally conscious operations. Every meal you enjoy here is not just a feast for your taste buds but also a step towards a greener, more sustainable future.",
  },
];

export const chefs = [
  {
    name: "Chef John Doe",
    image: ChefImage1,
    address: "123 Culinary Street, Cityville, State, ZIP",
    description:
      "Chef John Doe is the visionary behind our exquisite menu. With a passion for blending traditional flavors with modern techniques, Chef Doe brings a wealth of experience and creativity to every dish.",
  },
  {
    name: "Pastry Chef Jane Smith",
    image: ChefImage2,
    address: "456 Dessert Avenue, Citytown, State, ZIP",
    description:
      "Indulge your sweet tooth with the delectable creations of our Pastry Chef, Jane Smith. Trained in the art of pastry-making, Chef Smith crafts desserts that are not just sweet treats but culinary masterpieces.",
  },
  {
    name: "Mixologist Alex Johnson",
    image: ChefImage3,
    address: "789 Cocktail Lane, Metropolis, State, ZIP",
    description:
      "Elevate your dining experience with handcrafted cocktails by our expert Mixologist, Alex Johnson. Each drink is a symphony of flavors, expertly curated to complement the diverse palate of our menu.",
  },
  {
    name: "Beverage Curator Sarah Thompson",
    image: ChefImage4,
    address: "890 Drinks Avenue, Cityburg, State, ZIP",
    description:
      "Explore the world of libations curated by our Beverage Curator, Sarah Thompson. With a deep understanding of spirits and a flair for mixology, Thompson crafts unique and delightful beverage experiences for our guests.",
  },
];
