import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react({
      // Enable Fast Refresh
      fastRefresh: true
    }),
    tailwindcss()
  ],
  
  build: {
    // Output directory
    outDir: 'dist',
    
    // Generate sourcemaps for production debugging (disable for smaller bundle)
    sourcemap: false,
    
    // Chunk size warning limit (500kb)
    chunkSizeWarningLimit: 500,
    
    // Minification using esbuild (built-in, no extra dependency)
    minify: 'esbuild',
    
    // Rollup options for code splitting
    rollupOptions: {
      output: {
        // Manual chunks for better caching
        manualChunks: {
          // React vendor bundle
          'react-vendor': ['react', 'react-dom', 'react-router-dom'],
          // Animation library
          'animation': ['framer-motion'],
          // Form libraries
          'forms': ['react-hook-form', '@hookform/resolvers', 'zod'],
          // DnD library
          'dnd': ['@dnd-kit/core', '@dnd-kit/sortable', '@dnd-kit/utilities'],
          // Icons
          'icons': ['lucide-react']
        },
        
        // Asset file naming
        assetFileNames: (assetInfo) => {
          const info = assetInfo.name.split('.');
          const ext = info[info.length - 1];
          if (/png|jpe?g|svg|gif|tiff|bmp|ico/i.test(ext)) {
            return `assets/images/[name]-[hash][extname]`;
          } else if (/woff2?|ttf|otf|eot/i.test(ext)) {
            return `assets/fonts/[name]-[hash][extname]`;
          }
          return `assets/[name]-[hash][extname]`;
        },
        
        // Chunk file naming
        chunkFileNames: 'assets/js/[name]-[hash].js',
        entryFileNames: 'assets/js/[name]-[hash].js',
      }
    },
    
    // Target modern browsers for smaller bundle
    target: 'es2020',
    
    // CSS code splitting
    cssCodeSplit: true,
    
    // Reduce bundle size
    reportCompressedSize: true
  },
  
  // Optimization
  optimizeDeps: {
    include: [
      'react',
      'react-dom',
      'react-router-dom',
      'framer-motion',
      'lucide-react'
    ],
    exclude: []
  },
  
  // Server configuration for development
  server: {
    port: 5173,
    strictPort: false,
    host: true,
    open: false,
    // Enable CORS for API calls during development
    cors: true
  },
  
  // Preview server configuration
  preview: {
    port: 4173,
    strictPort: false,
    host: true,
    open: false
  }
})
