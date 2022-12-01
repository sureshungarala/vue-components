import { defineConfig } from 'vite'
import { createVuePlugin } from 'vite-plugin-vue2'
import cssInjectedByJsPlugin from 'vite-plugin-css-injected-by-js'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [createVuePlugin(), cssInjectedByJsPlugin({ styleId: 'vs-autocomplete', topExecutionPriority: true })],
  build: {
    lib: {
      entry: path.resolve(__dirname,'src/index.js'),
      name: 'vs-autocomplete',
      fileName: (format) => `vs-autocomplete.${format}.js`,
    },
    minify: 'esbuild',
    rollupOptions: {
      // make sure to externalize deps that shouldn't be bundled
      // into your library
      external: ['vue'],
      output: {
        // Provide global variables to use in the UMD build
        // for externalized deps
        globals: {
          vue: 'Vue'
        }
      }
    },
    // sourcemap: 'inline'
  }
})
