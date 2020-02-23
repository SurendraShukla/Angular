## Automatic linting on commit with husky and lint-staged

Ensure lint errors don't get checked into stash using Git hooks to fix possible errors and prevent commits when there are errors that cannot be automatically fixed.

Install [Husky](https://github.com/typicode/husky) and [Lint Staged](https://github.com/okonet/lint-staged)

```sh
npm i husky lint-staged --save-dev
```

Two options for adding configuration:

Option 1: package.json

```json
{
  "husky": {
    "hooks": {
      "pre-commit": "lint-staged"
    }
  },

  "lint-staged": {
    "src/app/**/*.ts": "tslint -c tslint.json --fix"
  }
}
```

Option 2: Config files

```js
// .lintstagedrc.json
{
  "src/app/**/*.ts": [
    "tslint -c tslint.json --fix",
    "prettier --write"
  ]
}

// .huskyrc.json
{
  "hooks": {
    "pre-commit": "lint-staged"
  }
}
```
