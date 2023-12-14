import tw from "tailwind-styled-components";
const SectionTitle = tw.h4`
mb-4 font-bold text-lg md:text-2xl text-zinc-700
${(className) => className}
`;

export default SectionTitle;
