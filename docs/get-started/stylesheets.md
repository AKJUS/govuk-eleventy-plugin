---
order: 4
title: Stylesheets
description: Adding custom CSS to your website
---

By default, the plugin generates a stylesheet at `/assets/application.css` that includes [GOV.UK Frontend](https://github.com/alphagov/govuk-frontend) styles and any styles added by the plugin.

You can replace this with your own stylesheets using the `stylesheets` option.

## Adding a custom stylesheet

To add a custom stylesheet, create a Sass (`.scss`) file in your project. The plugin will automatically compile it to CSS when Eleventy builds your site.

For example, add `assets/application.scss`, which will be compiled to `assets/application.css`.

When you provide one or more stylesheets, the default `application.css` is no longer generated or linked — your stylesheets replace it entirely.

To add the NHS.UK frontend styles and extra styles used by the plugin back in, start your stylesheet by forwarding to the eleventy plugin:

```scss
// Import GOV.UK Frontend and plugin styles
@forward "pkg:@x-govuk/govuk-eleventy-plugin";

// Add your custom styles directly here,
// or use @forward if they are in separate files.
```

## Reference your stylesheet within the plugin options

Add the path to your custom stylesheet in the `stylesheets` option in your `eleventy.config.js` options file.

For example:

```js
import { govukEleventyPlugin } from '@x-govuk/govuk-eleventy-plugin'

export default function(eleventyConfig) {
  eleventyConfig.addPlugin(govukEleventyPlugin, {

    // Other options

    stylesheets: ['/assets/application.css']
  })
}
```
