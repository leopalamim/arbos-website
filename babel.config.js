module.exports = {
  presets: ["next/babel"],
  plugins: [["styled-components", { ssr: true }], "import-graphql", "module-resolver"],
};
