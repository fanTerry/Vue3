
import path from 'path' // 需要安装 @types/node 并在 tsconfig.node.json的compilerOptions中配置"allowSyntheticDefaultImports": true
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'

function _resolve(dir: string) {
  return path.resolve(__dirname, dir);
}
// https://vitejs.dev/config/
export default defineConfig({
  css:{
    preprocessorOptions: {
      scss: {
        // additionalData: "@import './src/assets/css/mixin.scss';",
      },
    },
  },
  plugins: [
    vue(),
    // 自动导入API方法
    AutoImport({
      imports: [  // 自动导入API配置
        'vue', 
        'vue-router',
        'pinia',
      ],
      resolvers: [ElementPlusResolver()], // custom resolvers
      dts: 'src/typings/auto-imports.d.ts', // 导入存放地址
    }),
    // 自动导入组件
    Components({
      resolvers: [ElementPlusResolver()], // custom resolvers
      dts: 'src/typings/components.d.ts',
    }),
  ],
  server:{
    host: '0.0.0.0', // 监听本地所有ip
    port: 3010 // 项目端口
  },
  resolve:{
    alias:{
      '@': _resolve('src') // 别名
    }
  }
})

