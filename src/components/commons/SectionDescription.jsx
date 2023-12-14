import tw from "tailwind-styled-components";
const SectionDescription = tw.h5`
text-gray-400
text-[1rem]
text-center
max-w-[500px]
mx-auto
mt-0
text-sm
${(className) => className}
`;

export default SectionDescription;
