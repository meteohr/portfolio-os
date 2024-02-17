const res = require("esbuild").build({
  entryPoints: ["src/App.tsx"],
  bundle: true,
  minify: false,
  format: "cjs",
  sourcemap: true,
  outfile: "dist/output.js",
  watch: true,
  // external: ['react', 'react-dom'],
});
