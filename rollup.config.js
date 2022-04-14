import vue from 'rollup-plugin-vue'
import peerDepsExternal from 'rollup-plugin-peer-deps-external'
import { importMetaAssets } from '@web/rollup-plugin-import-meta-assets'
// import scss from 'rollup-plugin-scss'
import postcss from 'rollup-plugin-postcss';
import bundleScss from 'rollup-plugin-bundle-scss';
//  PostCSS plugins
 import simplevars from 'postcss-simple-vars';
 import nested from 'postcss-nested';
 import cssnext from 'postcss-cssnext';
 import cssnano from 'cssnano';
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
      bundleScss({ exclusive: false }),
      postcss({
        plugins: [
            simplevars(),
             nested(),
            cssnext({ warnForDuplicates: false, }),
            cssnano(),
             ],
                extensions: [ '.css' ],
            }),
      importMetaAssets(),
    ]
  }
]