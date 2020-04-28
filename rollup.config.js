import typescript from "rollup-plugin-typescript";
import { terser } from 'rollup-plugin-terser';

export default {
  input: 'src/main.ts',
  plugins: [
    typescript({
      exclude: "node_modules/**",
      typescript: require("typescript")
    }),
  ],
  output: [
    {
      format: "cjs",
      file: "lib/bundle.cjs.js",
      plugins: [terser()],
    },
    {
      format: "es",
      file: "lib/bundle.esm.js",
      plugins: [terser()],
    }
  ]
};