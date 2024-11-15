import type { SidebarsConfig } from "@docusaurus/plugin-content-docs";

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */
const sidebars: SidebarsConfig = {
  docSidebar: [
    {
      type: "doc",
      label: "Home",
      id: "index",
    },
    {
      type: "category",
      label: "What is SC-DEX?",
      items: [
        {
          type: "doc",
          label: "1. Core Schema",
          id: "Core-Schema",
        },
        {
          type: "doc",
          label: "2. Extensions for Use Cases",
          id: "Extensions-for-Use-Cases",
        },
        {
          type: "doc",
          label: "3. Governance Model",
          id: "Governance-Model",
        },
        {
          type: "doc",
          label: "4. Development Process",
          id: "Development-Process",
        },
        {
          type: "doc",
          label: "5. Open Letter of Commitment",
          id: "Open-Letter-of-Commitment",
        },
        {
          type: "doc",
          label: "6. Future Roadmap",
          id: "Future-Roadmap",
        },
        {
          type: "doc",
          label: "7. Implementation Tutorials",
          id: "Implementation-Tutorials",
        },
        {
          type: "doc",
          label: "8. FAQ and Troubleshooting",
          id: "FAQ-and-Troubleshooting",
        },
      ],
    },

    {
      type: "category",
      label: "Getting Started",
      items: ["Getting Started/index"],
    },
  ],
};

export default sidebars;
