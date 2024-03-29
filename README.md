<a href="https://precedent.dev">
  <img alt="Precedent – Building blocks for your Next project" src="https://precedent.dev/opengraph-image">
  <h1 align="center">Precedent</h1>
</a>

<p align="center">
  Building blocks for your Next project
</p>

<p align="center">
  <a href="https://twitter.com/steventey">
    <img src="https://img.shields.io/twitter/follow/steventey?style=flat&label=steventey&logo=twitter&color=0bf&logoColor=fff" alt="Steven Tey Twitter follower count" />
  </a>
  <a href="https://github.com/steven-tey/precedent">
    <img src="https://img.shields.io/github/stars/steven-tey/precedent?label=steven-tey%2Fprecedent" alt="Precedent repo star count" />
  </a>
</p>

<p align="center">
  <a href="#introduction"><strong>Introduction</strong></a> ·
  <a href="#one-click-deploy"><strong>One-click Deploy</strong></a> ·
  <a href="#tech-stack--features"><strong>Tech Stack + Features</strong></a> ·
  <a href="#author"><strong>Author</strong></a>
</p>
<br/>

## Introduction

Precedent is an opinionated collection of components, hooks, and utilities for your Next.js project.

## One-click Deploy

You can deploy this template to Vercel with the button below:

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2Fsteven-tey%2Fprecedent&project-name=precedent&repository-name=precedent&demo-title=Precedent&demo-description=An%20opinionated%20collection%20of%20components%2C%20hooks%2C%20and%20utilities%20for%20your%20Next%20project.&demo-url=https%3A%2F%2Fprecedent.dev&demo-image=https%3A%2F%2Fprecedent.dev%2Fopengraph-image&env=GOOGLE_CLIENT_ID,GOOGLE_CLIENT_SECRET,NEXTAUTH_SECRET&envDescription=How%20to%20get%20these%20env%20variables%3A&envLink=https%3A%2F%2Fgithub.com%2Fsteven-tey%2Fprecedent%2Fblob%2Fmain%2F.env.example&stores=%5B%7B"type"%3A"postgres"%7D%5D)

You can also clone & create this repo locally with the following command:

```bash
npx create-next-app precedent --example "https://github.com/steven-tey/precedent"
```

1. Then, install the dependencies with your package manager of choice:

    ```bash
    npm i
    yarn
    pnpm i
    ```
2. If you got `'prisma' is not recognized as an internal or external command`, try `npm install @prisma/cli`.
3. If you got:
    ```bash
    npm ERR! code ERESOLVE
    npm ERR! ERESOLVE unable to resolve dependency tree
    npm ERR!
    npm ERR! While resolving: precedent@0.1.0
    npm ERR! Found: next@13.5.5-canary.19
    npm ERR! node_modules/next
    npm ERR!   next@"13.5.5-canary.19" from the root project
    npm ERR! 
    npm ERR! Could not resolve dependency:
    npm ERR! peer next@"^12.2.5 || ^13" from next-auth@4.22.1
    npm ERR! node_modules/next-auth
    npm ERR!   next-auth@"4.22.1" from the root project
    npm ERR!   peer next-auth@"^4" from @next-auth/prisma-adapter@1.0.7
    npm ERR!   node_modules/@next-auth/prisma-adapter
    npm ERR!     @next-auth/prisma-adapter@"^1.0.7" from the root project
    npm ERR!
    npm ERR! Fix the upstream dependency conflict, or retry
    npm ERR! this command with --force, or --legacy-peer-deps
    npm ERR! to accept an incorrect (and potentially broken) dependency resolution.
    ```
    Try this to solve it: `npx prisma` then `npx prisma generate`. Check out here to see more related to this [issue](https://github.com/prisma/prisma/discussions/4978).
4. Last, if you got:
    ```bash
    pnpm: The term 'pnpm' is not recognized as a name of a cmdlet, function, script file, or executable program.
    ```
    You need to install `pnpm` by `npm install -g pnpm` and run `npx prisma generate` again.
5. Now you can finally run `npm run dev` to start!

### Note
If you need to add/install new package, use `pnpm install <THEPACKAGE>`/`pnpm add <THEPACKAGE>`/`pnpm i <THEPACKAGE>` instead.
## Tech Stack + Features

https://user-images.githubusercontent.com/28986134/212368288-12f41e37-aa8c-4e0a-a542-cf6d23410a65.mp4

### Frameworks

- [Next.js](https://nextjs.org/) – React framework for building performant apps with the best developer experience
- [Auth.js](https://authjs.dev/) – Handle user authentication with ease with providers like Google, Twitter, GitHub, etc.
- [Prisma](https://www.prisma.io/) – Typescript-first ORM for Node.js

### Platforms

- [Vercel](https://vercel.com/) – Easily preview & deploy changes with git
- [Vercel Postgres](https://vercel.com/postgres) – Serverless Postgres at the Edge

### UI

- [Tailwind CSS](https://tailwindcss.com/) – Utility-first CSS framework for rapid UI development
- [Radix](https://www.radix-ui.com/) – Primitives like modal, popover, etc. to build a stellar user experience
- [Framer Motion](https://framer.com/motion) – Motion library for React to animate components with ease
- [Lucide](https://lucide.dev/) – Beautifully simple, pixel-perfect icons
- [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) – Optimize custom fonts and remove external network requests for improved performance
- [`ImageResponse`](https://nextjs.org/docs/app/api-reference/functions/image-response) – Generate dynamic Open Graph images at the edge

### Hooks and Utilities

- `useIntersectionObserver` –  React hook to observe when an element enters or leaves the viewport
- `useLocalStorage` – Persist data in the browser's local storage
- `useScroll` – React hook to observe scroll position ([example](https://github.com/steven-tey/precedent/blob/main/components/layout/navbar.tsx#L12))
- `nFormatter` – Format numbers with suffixes like `1.2k` or `1.2M`
- `capitalize` – Capitalize the first letter of a string
- `truncate` – Truncate a string to a specified length
- [`use-debounce`](https://www.npmjs.com/package/use-debounce) – Debounce a function call / state update

### Code Quality

- [TypeScript](https://www.typescriptlang.org/) – Static type checker for end-to-end typesafety
- [Prettier](https://prettier.io/) – Opinionated code formatter for consistent code style
- [ESLint](https://eslint.org/) – Pluggable linter for Next.js and TypeScript

### Miscellaneous
- [Vercel Analytics](https://vercel.com/analytics) – Track unique visitors, pageviews, and more in a privacy-friendly way

### Resources
- [Dictionary API](https://dictionaryapi.dev/) – Get word definitions
- [Image and Video API](https://www.pexels.com/api/documentation/) – Access to the full Pexels content library, including photos, videos

## Author
- Steven Tey ([@steventey](https://twitter.com/steventey))
- Hsiang (@...)
