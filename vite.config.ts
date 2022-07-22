import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

import analyze from 'rollup-plugin-analyzer';

import fs from 'fs-extra';

const pathName = new Date().toLocaleDateString().replace(/\//g, '-');

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
  plugins: [
    react(),
    analyze({
      hideDeps: true,
      stdout: false,
      writeTo: (analysisString) => {
        fs.writeFileSync(
          `./src/coverage/build/${pathName}.txt`,
          analysisString
        );
      },
      filter: (m) => !Boolean(exclude.find((e) => m.id.includes(e))),
    }),
  ],
});
