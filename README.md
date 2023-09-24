# eslint-plugin-console-to-log

Replaces console statements with logger

## Installation

You'll first need to install [ESLint](https://eslint.org/):

```sh
npm i eslint --save-dev
```

Next, install `eslint-plugin-console-to-log`:

```sh
npm install eslint-plugin-console-to-log --save-dev
```

## Usage

Add `no-console-log` to the plugins section of your `.eslintrc` configuration file. You can omit the `eslint-plugin-` prefix:

```json
{
  "plugins": ["no-console-log"]
}
```

Then configure the rules you want to use under the rules section.

```json
{
  "rules": {
    "no-console-log/rule-name": 2
  }
}
```

## Rules

<!-- begin auto-generated rules list -->

TODO: Run eslint-doc-generator to generate the rules list.

<!-- end auto-generated rules list -->
