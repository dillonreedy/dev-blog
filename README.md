# Creating new posts and serving locally:

## Creating a new page

### Add a Page Image for Landing Page

You'll need to add an image that can be placed in the tiles on the landing page.
It must be a .jpg file, the first page we mades image consisted of dimensions: 1567x981.

### Install npm packages

If you have just cloned this project then run the following command: `npm install`
Note this does not install the ruby gem files and things needed for Jekyll, this is
only used for creating a new templated post.

### Add command

To add another generic post: `npm run add-page`
This will prompt you for a page title, description, and image file name
then it will create a file in the root directory of the project.

The contents of this post are things that could help

### Build Locally

To build the project locally `npm run build`

### Serve Locally

To run the project locally `npm run serve`

## Publishing Posts

Once you're satisfied with how the post is displayed, you can simply push your changes onto
the main branch, and then Github Actions will build the site.

# Forty - Jekyll Theme

A Jekyll version of the "Forty" theme by [HTML5 UP](https://html5up.net/).

![Forty Theme](assets/images/forty.jpg "Forty Theme")

# How to Use

For those unfamiliar with how Jekyll works, check out [jekyllrb.com](https://jekyllrb.com/) for all the details,
or read up on just the basics of [front matter](https://jekyllrb.com/docs/frontmatter/), [writing posts](https://jekyllrb.com/docs/posts/),
and [creating pages](https://jekyllrb.com/docs/pages/).

Simply fork this repository and start editing the `_config.yml` file!

> NOTE: GitHub Actions is required to deploy to GitHub Pages because GitHub [refuses to update their version of Jekyll](https://github.com/github/pages-gem/issues/651).

# Added Features

- **[Formspree.io](https://formspree.io/) contact form integration** - just add your email to the `_config.yml` and it works!
- Use `_config.yml` to **set whether the homepage tiles should pull pages or posts**, as well as how many to display.
- Add your **social profiles** easily in `_config.yml`. Only social profiles buttons you enter in `config.yml` show up on the site footer!
- Set **featured images** in front matter.

# Credits

Original README from HTML5 UP:

```
Forty by HTML5 UP
html5up.net | @ajlkn
Free for personal and commercial use under the CCA 3.0 license (html5up.net/license)


This is Forty, my latest and greatest addition to HTML5 UP and, per its incredibly
creative name, my 40th (woohoo)! It's built around a grid of "image tiles" that are
set up to smoothly transition to secondary landing pages (for which a separate page
template is provided), and includes a number of neat effects (check out the menu!),
extra features, and all the usual stuff you'd expect. Hope you dig it!

Demo images* courtesy of Unsplash, a radtastic collection of CC0 (public domain) images
you can use for pretty much whatever.

(* = not included)

AJ
aj@lkn.io | @ajlkn


Credits:

	Demo Images:
		Unsplash (unsplash.com)

	Icons:
		Font Awesome (fortawesome.github.com/Font-Awesome)

	Other:
		jQuery (jquery.com)
		html5shiv.js (@afarkas @jdalton @jon_neal @rem)
		background-size polyfill (github.com/louisremi)
		Misc. Sass functions (@HugoGiraudel)
		Respond.js (j.mp/respondjs)
		Skel (skel.io)
```

Repository [Jekyll logo](https://github.com/jekyll/brand) icon licensed under a [Creative Commons Attribution 4.0 International License](http://choosealicense.com/licenses/cc-by-4.0/).
