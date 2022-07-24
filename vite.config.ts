import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import analyze from 'rollup-plugin-analyzer';

import fs from 'fs-extra';
import path from 'path';

const date = new Date().toLocaleDateString().replace(/\//g, '-');
const hour = new Date().toLocaleTimeString().replace(/:/g, '-');

const exclude: string[] = [
  'node_modules',
  'react',
  'vite',
  'commonjsHelpers',
  '.css',
  '.html',
  'test',
  'spec',
  'txt',
];

export default defineConfig({
  server: {
    host: '0.0.0.0',
    port: 3000,
  },
  plugins: [
    react(),
    analyze({
      hideDeps: true,
      stdout: false,
      writeTo: analysisString => {
        fs.writeFileSync(
          `./src/coverage/build/${date}:${hour}.txt`,
          analysisString,
        );
      },
      filter: m => !Boolean(exclude.find(e => m.id.includes(e))),
    }),
  ],
  build: {
    outDir: 'dist',
  },
});
