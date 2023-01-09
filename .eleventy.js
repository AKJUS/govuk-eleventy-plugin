module.exports = function (eleventyConfig) {
  const url = process.env.GITHUB_ACTIONS
    ? 'https://x-govuk.github.io/govuk-eleventy-plugin/'
    : '/'
  const pathPrefix = process.env.GITHUB_ACTIONS
    ? '/govuk-eleventy-plugin/'
    : '/'

  // Plugins
  eleventyConfig.addPlugin(require('./index.js'), {
    brandColour: '#28a',
    fontFamily: 'system-ui, sans-serif',
    icons: {
      mask: 'https://raw.githubusercontent.com/x-govuk/logo/main/images/x-govuk-mask-icon.svg?raw=true',
      shortcut: 'https://raw.githubusercontent.com/x-govuk/logo/main/images/x-govuk-favicon.ico',
      touch: 'https://raw.githubusercontent.com/x-govuk/logo/main/images/x-govuk-apple-touch-icon.png'
    },
    opengraphImageUrl: 'https://x-govuk.github.io/govuk-eleventy-plugin/assets/opengraph-image.png',
    homeKey: 'GOV.UK Eleventy Plugin',
    parentSite: {
      url: 'https://x-govuk.github.io/#shared-projects',
      name: 'X-GOVUK shared projects'
    },
    pathPrefix,
    url,
    header: {
      organisationLogo: 'x-govuk',
      organisationName: 'X-GOVUK',
      productName: 'Eleventy Plugin',
      search: {
        indexPath: '/search.json',
        sitemapPath: '/sitemap'
      }
    },
    headingPermalinks: true,
    footer: {
      copyright: {
        text: '© X-GOVUK'
      },
      contentLicence: {
        html: 'Licensed under the <a class="govuk-footer__link" href="https://github.com/x-govuk/govuk-eleventy-plugin/blob/main/LICENSE.txt">MIT Licence</a>, except where otherwise stated'
      },
      meta: {
        items: [{
          href: 'https://www.11ty.dev',
          text: 'Documentation for Eleventy (opens in a new tab)',
          attributes: {
            target: '_blank'
          }
        }]
      }
    }
  })

  // Collections
  eleventyConfig.addCollection('layout', collection =>
    collection.getFilteredByTag('layout')
      .sort((a, b) => (a.data.order || 0) - (b.data.order || 0))
  )
  eleventyConfig.addCollection('homepage', collection =>
    collection.getFilteredByTag('homepage')
      .sort((a, b) => (a.data.order || 0) - (b.data.order || 0))
  )

  // Passthrough
  eleventyConfig.addPassthroughCopy('./docs/assets')

  // Watch
  eleventyConfig.addWatchTarget('./components/')
  eleventyConfig.addWatchTarget('./lib/')

  // Config
  return {
    dataTemplateEngine: 'njk',
    htmlTemplateEngine: 'njk',
    markdownTemplateEngine: 'njk',
    dir: {
      input: 'docs',
      layouts: '../layouts'
    },
    pathPrefix
  }
}
