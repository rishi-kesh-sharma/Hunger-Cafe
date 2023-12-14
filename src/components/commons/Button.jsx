import tw from "tailwind-styled-components";
import { motion } from "framer-motion";
const Button = tw.button`
hover:bg
${(className) => className}
`;

export default Button;
