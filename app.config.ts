export default defineAppConfig({
  title: 'Link',
  email: 'info@macplanet.vn',
  github: '#',
  twitter: '#',
  telegram: '#',
  mastodon: '#',
  blog: '#',
  description: 'Rút gọn Link cho Macplanet.',
  image: 'https://sink.cool/banner.png',
  previewTTL: 300, // 5 minutes
  slugRegex: /^[a-z0-9]+(?:-[a-z0-9]+)*$/i,
  reserveSlug: [
    'dashboard',
  ],
})
