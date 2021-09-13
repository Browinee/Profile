# Search github repositories with InfiniteScroll

This app allows users to search github repositories when entering input. To prevent too much requests, this app supports debouncing
the input value for 500ms.

When users scroll too quickly and reach rate limit, it would popup a modal to present the
error message and says "Please wait a moment". After one minute, if user scrolls again, it works.

## Feature

- Search what users input and show loading animation during searching.
- Go to top when user try to enter different words.
- Provide top button when user would like to go to top.
- Handle edge cases
  - Provide no more data information.
  - Provide no data information.
- Error handle
  - Rate limit handle when api request are too much.
  - Debounce user input
  - Provide errorboundary component by modules
- Suspense
- Coding
  - husky + lint(eslint, prettier, commitlint)

## Project structure

```
src
├── components
│   └── Card
│   └── Empty
│   └──ErrorBoundary
│   └──FullPageErrorFallback
│   └──Loading
│   └──Modal
│   └──ScrooTop
│   └──SearchInput
├── hooks
│   └── useAsync
│   └── useDebounce
│   └── useInfiniteScroll
│   └── useScrollTop
├── infra
│   └── index
├── module
│   └── search
│       └── adapter
│       └── components
│       └── usecase
│       └── index
├── stories
│   └── Card.stories
│   └── Loading.stroies
│   └── Modal.stories
│   └── ScrollTop.stories
│   └── SearchInput.storeies
├── theme
├   └── globalStyles
├   └── resetStyles
├   └── theme
├── types
├── utils
├── App.tsx
├── index.css
├── index.tsx
├── setupTests
├──test-server
├──serviceWorker.ts
```

##Setup

```shell
 git clone https://github.com/Browinee/github_search_infiniteScroll.git

 cp .env.example cp .env.development

 yarn

 yarn start
```

## Testing

- Use msw(mock service worker) to mock response.

```shell
yarn run test
```

## Storybook

```shell
yarn run storybook
```
