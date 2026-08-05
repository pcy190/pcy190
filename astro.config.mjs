import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';

/*
  Shiki ships github-dark by default, which drops a near-black box with pink and
  purple tokens into a pale page. This keeps listings monochrome: pine for
  keywords, muted grey for comments, ink for everything else.
*/
const paper = {
  name: 'paper',
  type: 'light',
  colors: {
    'editor.background': '#fbfcfa',
    'editor.foreground': '#151a18',
  },
  settings: [
    { settings: { foreground: '#151a18' } },
    {
      scope: ['comment', 'punctuation.definition.comment'],
      settings: { foreground: '#7d867f', fontStyle: 'italic' },
    },
    {
      scope: [
        'keyword',
        'keyword.control',
        'keyword.operator.new',
        'storage.type',
        'storage.modifier',
        'entity.name.tag',
      ],
      settings: { foreground: '#17453f' },
    },
    {
      scope: ['string', 'string.quoted', 'constant.character', 'constant.other.symbol'],
      settings: { foreground: '#4f5d3a' },
    },
    {
      scope: ['constant.numeric', 'constant.language', 'support.constant'],
      settings: { foreground: '#4a534e' },
    },
    {
      scope: ['entity.name.function', 'support.function', 'meta.function-call'],
      settings: { foreground: '#151a18' },
    },
    {
      scope: ['entity.name.type', 'support.type', 'support.class', 'entity.name.class'],
      settings: { foreground: '#2c3a35' },
    },
    { scope: ['punctuation', 'meta.brace'], settings: { foreground: '#4a534e' } },
  ],
};

export default defineConfig({
  site: 'https://ret2happy.com',
  integrations: [mdx()],
  markdown: {
    shikiConfig: { theme: paper },
  },
  build: {
    inlineStylesheets: 'never',
  },
});
