export const colorNames = [
  "gray",
  "blue",
  "red",
  "green",
  "yellow",
  "purple",
  "pink",
  "indigo",
];

const shades = [
  "50",
  "100",
  "200",
  "300",
  "400",
  "500",
  "600",
  "700",
  "800",
  "900",
];

export const colors = (): string[] => {
  let c: string[] = ["transparent", "black", "white"];
  colorNames.forEach((color) => {
    shades.forEach((shade) => {
      c.push(`${color}-${shade}`);
    });
  });
  return c;
};

export const bgColors: string[] = [...colors().map((color) => `bg-${color}`)];

export const textColors: string[] = [
  ...colors().map((color) => `text-${color}`),
];
