## Dramalama

Dramalama is an online service where you can watch kdramas and anime and read mangas for free.

<p align="center">
  <img width="300" height="300" src="https://github.com/real-zephex/Dramalama/assets/143923795/add2af15-7d1a-4185-8c48-c31be488d559">
</p>

## Description

This web application, built with the Next.js framework, relies on data fetched from the Consumet API. The anime section benefits from server-side rendering, ensuring efficient performance. To maintain uniformity, both the kdrama and manga sections have been updated to utilize server-side rendering (SSR), aligning them with the architecture of the anime section.

_However, I am planning to rewrite the kdrama section and make it server rendered_

## Features

#### Kdrama

-   Users can search for dramas by their title.
-   The platform is designed to be responsive, ensuring compatibility with all screen sizes.
-   HLS streams, meaning the quality will adapt to your network conditions automatically.

#### Anime

-   The homepage displays top airing anime and recent episode releases.
-   Users have the option to search for anime titles.
-   Due to server-side rendering, requests are cached. This means that if a user visits a specific episode of an anime and then tries to revisit it, the page will load instantly. This caching benefits other users who are attempting to watch the same anime.
-   Vidstack serves as the video player.

#### Manga

-   Users can search for mangas/manhwa by their title
-   A good looking info page
-   Ability to download mangas in `.pdf` format

## Content Guidelines

Dramalama doesn't stores any data. It fetches it data through Consumet API which in turns scrapes other websites to get that stream. If you have any problem, then try contacting the owner of those websites.

## Deployments

-   Vercel: https://dramalama.vercel.app
-   Netlify: https://dramalama.netlify.app  

## Contributing

Contributors are welcome!!
