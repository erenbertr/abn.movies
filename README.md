# abn.movies

## Build Setup

```bash
# install dependencies
$ npm install

# serve with hot reload at localhost:46000
$ npm run dev

# build for production and launch server
$ npm run build
$ npm run start

# generate static project
$ npm run generate
```

For detailed explanation on how things work, check out the [documentation](https://nuxtjs.org).

## Why Nuxt?

- Easy setup using the command-line with the starter template
- It’s great for SEO: it solves all the SEO issues that single-page apps are reputed for (client-rendered content, mobile web performance, URL and routing, etc.)
- It provides an opinionated structure and setup.
- Automatic code-splitting.
- It can Create universal apps without the hassle:

## Decisions

# CSS

I'm using SASS. It's perfect for any project.
I created styles/app.css file which contains/imports all other css files.
On app.css we set some mixins to help us for responsive design. You can include reset.css too but for this project I wrote tiny resets.

I removed all scrollbars, they don't look good on user side. Don't worry, you can still scroll and slide.

I use parent prefixes for structure for this project. But you can follow any other thing. It depends on project and team decisions.

# UI

It's not good but it gets job done.

# Modules

We are using swiper.js as slider.
Axios for requests.

# API

I extended axios to customize API connection. (plugins/maze) Maybe it's not a need for this project but we should seperate from the default logic.

# Utils.js

Here we can create functions/logics that repeats it self.

# Pages

You can use server side rendering for SEO. This project is only client side.

# Shows

To show grouped shows, I think we need to create parent list. And I did so. So with that we can customize API output with rules etc.

My overall opinion: you can make this project better on any aspect. But this is my second try for this assessment. So, I choose my first project as a "better" one (abn.erduran.org).

This project contains only required things. Don't be mad at me.
