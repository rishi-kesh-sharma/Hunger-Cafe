export const largeAnimation = {
  initial: { translateY: "200px", opacity: 0 },
  whileInView: { translateY: "0", opacity: 1 },
  viewport: { once: false },
  transition: { duration: 1, type: "tween" },
};

export const smallAnimation = {
  initial: { translateY: "100px", opacity: 0 },
  whileInView: { translateY: "0", opacity: 1 },
  viewport: { once: false },
  transition: { duration: 1, type: "tween" },
};
