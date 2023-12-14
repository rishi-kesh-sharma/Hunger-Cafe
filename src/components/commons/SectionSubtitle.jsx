import tw from "tailwind-styled-components";
const SectionSubtitle = tw.h1`
text-[1.6rem]
md:text-[2.3rem]
text-center
font-semibold

${(className) => className}
`;

export default SectionSubtitle;
