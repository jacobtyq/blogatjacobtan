// @ts-check

import mdx from '@astrojs/mdx'
import sitemap from '@astrojs/sitemap'
import umami from '@yeskunall/astro-umami'
import { defineConfig, fontProviders } from 'astro/config'
import { loadEnv } from 'vite'

const { VITE_UMAMI_ID } = loadEnv(process.env.NODE_ENV ?? '', process.cwd(), '')

// https://astro.build/config
export default defineConfig({
  site: 'https://blog.jacobtan.co',
  integrations: [mdx(), sitemap(), umami({ id: VITE_UMAMI_ID })],
  fonts: [
    {
      provider: fontProviders.local(),
      name: 'Atkinson',
      cssVariable: '--font-atkinson',
      fallbacks: ['sans-serif'],
      options: {
        variants: [
          {
            src: ['./src/assets/fonts/atkinson-regular.woff'],
            weight: 400,
            style: 'normal',
            display: 'swap',
          },
          {
            src: ['./src/assets/fonts/atkinson-bold.woff'],
            weight: 700,
            style: 'normal',
            display: 'swap',
          },
        ],
      },
    },
  ],
})
