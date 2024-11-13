import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const config: Config = {
  title: "Supply Chain Data Exchange",
  tagline:
    "We're building an open exchange standard for global supply chain data.",
  favicon: "img/favicon.ico",

  url: "https://opensupplyhub.github.io",
  baseUrl: "/supplychaindata.exchange/",

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: "opensupplyhub", // Usually your GitHub org/user name.
  projectName: "supplychaindata.exchange", // Usually your repo name.

  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },

  presets: [
    [
      "classic",
      {
        docs: {
          sidebarPath: "./sidebars.ts",
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            "https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/",
        },
        blog: {
          showReadingTime: true,
          feedOptions: {
            type: ["rss", "atom"],
            xslt: true,
          },
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            "https://github.com/opensupplyhub/supplychaindata.exchange/tree/main/website/",
          // Useful options to enforce blogging best practices
          onInlineTags: "warn",
          onInlineAuthors: "warn",
          onUntruncatedBlogPosts: "warn",
        },
        theme: {
          customCss: "./src/css/custom.css",
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    // Replace with your project's social card
    image: "img/docusaurus-social-card.jpg",
    navbar: {
      title: "My Site",
      logo: {
        alt: "My Site Logo",
        src: "img/logo.svg",
      },
      items: [
        {
          type: "docSidebar",
          sidebarId: "docSidebar",
          position: "left",
          label: "Docs",
        },
        { to: "/blog", label: "Blog", position: "left" },
        {
          href: "https://github.com/opensupplyhub/supplychaindata.exchange",
          label: "GitHub",
          position: "right",
        },
      ],
    },
    footer: {
      style: "dark",
      links: [
        {
          title: "Docs",
          items: [
            {
              label: "Home",
              to: "/docs",
            },
          ],
        },
        {
          title: "Community",
          items: [
            {
              label: "Sign the Open Letter of Commitment",
              href: "https://docs.google.com/document/d/1jRSpEStuhcdS_8SxBHLoW7PWaYlCTEtC1MLYJf_5avo/edit?tab=t.0",
            },
            {
              label: "Contribute to the Technical Draft",
              href: "https://github.com/opensupplyhub/supplychaindata.exchange",
            },
            {
              label: "Join the Slack",
              href: "https://join.slack.com/t/supplychainexchange/shared_invite/zt-2h2f0zvhe-J9ksFAHHtmYCs_I2_Nlr0g",
            },
          ],
        },
        {
          title: "More",
          items: [
            {
              label: "Blog",
              to: "/blog",
            },
            {
              label: "GitHub",
              href: "https://github.com/opensupplyhub/supplychaindata.exchange",
            },
            {
              label: "Schedule Informational Call",
              href: "https://calendar.app.google/UYyr5qPvNd3RLn5K6",
            },
            {
              label: "Calendar of Working Sessions",
              href: "https://calendar.google.com/calendar/u/0?cid=Y19mZDRkNWE3OTZlZDlhYTEwOTEwYWYxMGZhYWVkMDkyNDdjY2FjNzEzZWY5Yjc3Y2Y0ZDc4NzRkYjIwMzA0Mzk4QGdyb3VwLmNhbGVuZGFyLmdvb2dsZS5jb20",
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Supply Chain Data Exchange. Built with Docusaurus.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
