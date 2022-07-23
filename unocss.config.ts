import {
  defineConfig,
  presetIcons,
  presetUno,
  presetWebFonts,
  presetWind,
  transformerDirectives,
  transformerVariantGroup,
} from 'unocss';
import twConfig from './tailwind.config.cjs';

export default defineConfig({
  shortcuts: [
    /* Example
    ['name','uno-classes'],
    */
  ],
  // WebStorm don't support unocss config, so theme put in tailwind.config.cjs
  theme: {
    ...twConfig.theme.extend,
  },
  rules: [
    [/^size-(\d+)$/, ([, d]) => {
      const size = `${(Number(d)) / 4}rem`;

      return { width: size, height: size };
    }],
  ],
  variants: [
    (matcher) => {
      if (!matcher.startsWith('max-'))
        return matcher;

      const [variant, ...rest] = matcher.split(':');

      const mediaPx = {
        sm: 640,
        md: 768,
        lg: 1024,
        xl: 1280,
      }[variant.replace('max-', '')] || 0;

      if (mediaPx == 0)
        return matcher;

      return {
        matcher: rest.join(':'),
        parent: `@media (max-width: ${mediaPx}px)`,
      };
    },
    (matcher) => {
      if (!matcher.startsWith('hocus:'))
        return matcher;

      return {
        matcher: matcher.slice(6),
        selector: s => `${s}:hover, ${s}:focus`,
      };
    },
  ],
  presets: [
    presetUno(),
    presetWind(),
    presetWebFonts({
      fonts: {
        sans: 'Source Sans Pro:400,700',
        manrope: 'Manrope:300,400',
      },
    }),
    presetIcons({
      collections: {
        custom: {
          ethereum: '<svg width="11" height="18" viewBox="0 0 11 18" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M11 10.216 5.5 18 0 10.216l5.5 3.263 5.5-3.262ZM5.5 0l5.496 9.169L5.5 12.43 0 9.17 5.5 0Z"/></svg>',
          clock: '<svg width="17" height="17" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M8.305 2.007a6.667 6.667 0 1 0 0 13.334 6.667 6.667 0 0 0 0-13.334Zm2.667 7.334H8.305a.667.667 0 0 1-.667-.667V6.007a.667.667 0 0 1 1.334 0v2h2a.667.667 0 0 1 0 1.334Z" /></svg>',
        },
      },
      extraProperties: {
        'display': 'inline-block',
        'vertical-align': 'top',
        'height': 'auto',
        'min-height': '1em',
      },
    }),
  ],
  transformers: [
    transformerDirectives(),
    transformerVariantGroup(),
  ],
});
