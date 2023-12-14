import tw from "tailwind-styled-components";
const MountedContainer = tw.div`
    ${(className) => className}
    px-[20px]
     mx-auto
    py-[2rem]
    md:py-[50px]
    relative
    shadow-md
    bg-white
    rounded-2xl
    w-[100%]
    xl:py-[80px]
`;
export default MountedContainer;
