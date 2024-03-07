module.exports = {
  "{apps,libs,tools}/**/*.ts": [
    "npx nx affected:lint --uncommitted --parallel --fix --files"
  ],
  "*": [
    "npx nx format:write --uncommitted --files"
  ],
  "{apps,libs}/**/*.scss": [
    "npx stylelint --fix"
  ]
}
