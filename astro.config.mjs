// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import mermaid from 'astro-mermaid';

export default defineConfig({
  integrations: [
    mermaid(),
    starlight({
      title: 'AgentLoop',
      description: 'AI agent orchestrator with persistent memory, HITL safety, and multi-client support',
      social: [
        { icon: 'github', label: 'GitHub', href: 'https://github.com/user/agentloop' },
      ],
      editLink: {
        baseUrl: 'https://github.com/user/agentloop-docs/edit/main/',
      },
      customCss: ['./src/styles/custom.css'],
      sidebar: [
        {
          label: 'Getting Started',
          items: [
            { label: 'Overview', slug: 'getting-started/overview' },
            { label: 'Installation', slug: 'getting-started/installation' },
            { label: 'Quick Start', slug: 'getting-started/quickstart' },
          ],
        },
        {
          label: 'Architecture',
          collapsed: false,
          items: [
            { label: 'System Design', slug: 'architecture/system-design' },
            { label: 'Agent Core', slug: 'architecture/agent-core' },
            { label: 'Memory System', slug: 'architecture/memory-system' },
            { label: 'Session Lifecycle', slug: 'architecture/session-lifecycle' },
            { label: 'Security Model', slug: 'architecture/security-model' },
            { label: 'HITL Flow', slug: 'architecture/hitl-flow' },
          ],
        },
        {
          label: 'Guides',
          items: [
            { label: 'Configuration', slug: 'guides/configuration' },
            { label: 'Memory & Profiles', slug: 'guides/memory-and-profiles' },
            { label: 'Skills', slug: 'guides/skills' },
            { label: 'Pi Extensions', slug: 'guides/pi-extensions' },
            { label: 'Vault & Obsidian', slug: 'guides/vault-and-obsidian' },
            { label: 'Deployment', slug: 'guides/deployment' },
            { label: 'Troubleshooting', slug: 'guides/troubleshooting' },
          ],
        },
        {
          label: 'Tutorials',
          items: [
            { label: 'Build a Skill', slug: 'tutorials/build-a-skill' },
            { label: 'Build a Pi Extension', slug: 'tutorials/build-a-pi-extension' },
            { label: 'Connect a New Client', slug: 'tutorials/connect-a-new-client' },
          ],
        },
        {
          label: 'Slack Bridge',
          badge: { text: 'Companion', variant: 'note' },
          items: [
            { label: 'Overview', slug: 'slack-bridge/overview' },
            { label: 'Setup', slug: 'slack-bridge/setup' },
            { label: 'Slack App Configuration', slug: 'slack-bridge/slack-app-configuration' },
            { label: 'Message Flow', slug: 'slack-bridge/message-flow' },
            { label: 'HITL in Slack', slug: 'slack-bridge/hitl-in-slack' },
            { label: 'Slash Commands', slug: 'slack-bridge/slash-commands' },
            { label: 'Extending', slug: 'slack-bridge/extending' },
          ],
        },
        {
          label: 'Reference',
          collapsed: true,
          items: [
            { label: 'Socket API', slug: 'reference/socket-api' },
            { label: 'Configuration Reference', slug: 'reference/configuration-reference' },
            { label: 'Events', slug: 'reference/events' },
            { label: 'Session States', slug: 'reference/session-states' },
            { label: 'Memory API', slug: 'reference/memory-api' },
            { label: 'Skills Format', slug: 'reference/skills-format' },
            { label: 'Pi Extension API', slug: 'reference/pi-extension-api' },
            { label: 'Security Policies', slug: 'reference/security-policies' },
            { label: 'CLI Reference', slug: 'reference/cli-reference' },
            { label: 'Slack Bridge Config', slug: 'reference/slack-bridge-config' },
            { label: 'Slack Bridge Types', slug: 'reference/slack-bridge-types' },
          ],
        },
      ],
    }),
  ],
});
