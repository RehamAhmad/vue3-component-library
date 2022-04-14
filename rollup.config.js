import vue from 'rollup-plugin-vue'
import peerDepsExternal from 'rollup-plugin-peer-deps-external'
import { importMetaAssets } from '@web/rollup-plugin-import-meta-assets'
import scss from 'rollup-plugin-scss'
import postcss from 'postcss'
import autoprefixer from 'autoprefixer'
const url = require('postcss-url');


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
      vue({preprocessStyles: true,
        preprocessOptions: {
          scss: {
            additionalData: `@import 'src/styles/themeMixin.scss';`
          },
        
        },
        
      }),
      scss({
        // format: 'css',
        // file: 'dist/library.css',
        // outputStyle: 'compressed',
        processor: () => postcss([autoprefixer()]),
        
      
      }),
      url({
        limit: 1024 * 10,
        include: ['**/*.woff', '**/*.ttf'],
        emitFile: true,
        
      }),
      
      
       peerDepsExternal(),
       importMetaAssets()
    ]
  }
]