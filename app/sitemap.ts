export const baseUrl = 'https://capabilitybench.com'

export default async function sitemap() {
  return [
    {
      url: baseUrl,
      lastModified: new Date().toISOString().split('T')[0],
    },
  ]
}
