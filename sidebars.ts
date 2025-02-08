import type {SidebarsConfig} from '@docusaurus/plugin-content-docs';

/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */
const sidebars: SidebarsConfig = {
  docs: [
    'intro',
    'getting-started',
    'api',
    {
      type: 'category',
      label: 'Server Management',
      items: [
        'guides/server-management/custom-modpack',
        'guides/server-management/install-mods',
        'guides/server-management/install-plugins',
        'guides/server-management/modpack-management',
        'guides/server-management/server-customization',
      ],
    },
    {
      type: 'category',
      label: 'Velocity',
      items: [
        'guides/velocity/setup',
        'guides/velocity/security',
      ],
    },
    {
      type: 'category',
      label: 'Server Features',
      items: [
        'guides/features/backups',
        'guides/features/schedules',
        'guides/features/whitelisting',
      ],
    },
    {
      type: 'category',
      label: 'Troubleshooting',
      items: [
        'guides/troubleshooting/crash-reports',
        'guides/troubleshooting/server-crashes',
      ],
    },
  ],
};

export default sidebars;
