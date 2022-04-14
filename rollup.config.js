import vue from 'rollup-plugin-vue'
import peerDepsExternal from 'rollup-plugin-peer-deps-external'
import { importMetaAssets } from '@web/rollup-plugin-import-meta-assets'
import scss from 'rollup-plugin-scss'
// import postcss from 'rollup-plugin-postcss';
// import autoprefixer from 'autoprefixer'
// import path from 'path'
import { writeFileSync } from "fs";
export default [
  {
    input: 'src/index.js',
    output: [
      {
        format: 'esm',
        file: 'dist/library.mjs'
      },
      {
        format: 'cjs',
        file: 'dist/library.js'
      }
    ],
    plugins: [
      vue(), peerDepsExternal() ,
      scss({
        format: 'css',
        file: 'dist/library.css',
        outputStyle: 'compressed'
        // output: styles => {
        //   if (styles && styles.length) {
        //     const cssOutput = "css" || output[0].file.replace(/\.(umd|es|iife).js/, '.css');
        //     // mkdirp(cssOutput.replace(/[^\/]*$/, ''));
        //     writeFileSync(cssOutput, styles);
        //   }
        // }
      }),
      importMetaAssets()
    ]
  }
]