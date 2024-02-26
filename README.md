[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/satyendera/reece&demo-url=https://vercel.com/satyendera/reece)

# About solution

This solution provides a minimal setup to get React working in Vite with HMR and some ESLint rules along with typescript.This solution using free API for production and local express server to serve local json.

# Demo

- [https://reece-mu.vercel.app/](https://reece-mu.vercel.app/)

## Used Tech-stack

- [React 18.X](https://react.dev/)
- [TypeScript](https://www.typescriptlang.org/)
- [Tailwind] (https://tailwindcss.com/)

## Used Platform

- [ViteJS](https://vitejs.dev/)

## pre check before start your local

- nodejs >18.x

## Running locally

You will need to use the environment variables [defined in `.env`](.env) to run this solution. It's recommended you use [Vercel Environment Variables](https://vercel.com/docs/concepts/projects/environment-variables) for this, but a `.env` file is all that is necessary.

> Note: You should not commit your `.env` file or it will expose secrets that will allow others to control your Shopify store.

1. Clone: `git clone https://github.com/satyendera/reece.git` and `cd reece`
2. Install Dependancies: `yarn install` or `npm install`
3. Run mockserver in local: `yarn mockserver` or `npm run mockserver`
4. in another tab or window of terminal `yarn dev` or `npm run dev`

Your app should now be running on [localhost:5173](http://localhost:5173/).

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default {
  // other rules...
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
    project: ["./tsconfig.json", "./tsconfig.node.json"],
    tsconfigRootDir: __dirname,
  },
};
```

- Replace `plugin:@typescript-eslint/recommended` to `plugin:@typescript-eslint/recommended-type-checked` or `plugin:@typescript-eslint/strict-type-checked`
- Optionally add `plugin:@typescript-eslint/stylistic-type-checked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and add `plugin:react/recommended` & `plugin:react/jsx-runtime` to the `extends` list
