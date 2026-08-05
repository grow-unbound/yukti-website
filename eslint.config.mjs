import next from "eslint-config-next";

// eslint-config-next ships a flat-config array in this version, not a factory.
const config = [
  { ignores: [".next/**", "reference/**", "archived/**", "node_modules/**"] },
  ...next,
];

export default config;
