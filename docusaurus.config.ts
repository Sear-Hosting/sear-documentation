import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: 'Sear Hosting Documentation',
  tagline: 'Welcome to Sear Hosting\'s Documentation',
  favicon: 'img/favicon.ico',

  url: 'https://docs.sear.host',
  baseUrl: '/',

  organizationName: 'sear-hosting',
  projectName: 'documentation',

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          routeBasePath: '/', // Docs will be served at root
          breadcrumbs: true,
        },
        blog: false, // Disable blog
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    colorMode: {
      defaultMode: 'dark',
      respectPrefersColorScheme: false,
    },
    navbar: {
      title: 'Sear Hosting',
      logo: {
        alt: 'Sear Hosting Logo',
        src: 'img/logo.svg',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'tutorialSidebar',
          position: 'left',
          label: 'Documentation',
        },
        {
          href: 'https://github.com/sear-hosting',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Documentation',
          items: [
            {
              label: 'Getting Started',
              to: '/docs/getting-started',
            },
            {
              label: 'API Reference',
              to: '/docs/api',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'GitHub',
              href: 'https://github.com/sear-hosting',
            },
            {
              label: 'Discord',
              href: 'https://discord.gg/searhosting',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'Status',
              href: 'https://status.sear.host',
            },
            {
              label: 'Contact',
              href: 'https://sear.host/',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Sear Hosting. All rights reserved.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
