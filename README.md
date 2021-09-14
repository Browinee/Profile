# Profile

## Feature

- Login
  - admin/amin with all the authorities
- Profile
  - admin user has most power so cant view and edit everything
  - create vanity url with authroities control
- vanity url
  - after user enter vanity url in url, should redirect to share/xxx/xxx, if not 404
- others
  - feature toggle

## Project structure

##Setup

```shell

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

Others:

1. check upload image
