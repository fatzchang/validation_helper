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
      format: "umd",
      file: "lib/bundle.umd.js",
      plugins: [terser()],
      name: 'vh'
    },
    {
      format: "es",
      file: "lib/bundle.esm.js",
      plugins: [terser()],
    }
  ]
};