import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
// import babel from 'rollup-plugin-babel';
import { terser } from "rollup-plugin-terser";
import serve from 'rollup-plugin-serve'
import livereload from 'rollup-plugin-livereload'

import pkg from './package.json';
const production = (process.env.BUILD == 'production');

export default [
  // browser-friendly UMD build
  {
    input: 'src/main.js',
    output: {
      name: 'identicon',
      dir: production ? '' : 'dev',
      file: pkg.browser,
      // sourcemap: true,
      format: 'umd'
    },
    plugins: [
      resolve(), // so Rollup can find `dependencies`
      commonjs(), // so Rollup can convert `ms` to an ES module
      // babel({ exclude: ['node_modules/**'] }),
      production && terser(), // minify, but only in production
      !production && serve({
        open: true,
        contentBase: ".",
        openPage: "/examples/index.htm",
        host: "localhost",
        port: 3000
      }),
      !production && livereload()
    ]
  },

  // CommonJS (for Node) and ES module (for bundlers) build.
  {
    input: 'src/main.js',
    output: [
      { file: pkg.main, format: 'cjs', dir: production ? '' : 'dev' },
      { file: pkg.module, format: 'es', dir: production ? '' : 'dev' }
    ]
  }
];