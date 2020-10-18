# usePageVisibility [![Tweet](https://img.shields.io/twitter/url/http/shields.io.svg?style=social)](https://twitter.com/intent/tweet?text=Listen%20for%20page%20transition%20events%20with%20a%20React%20hook.&url=https://github.com/CharlesStover/use-page-visibility&via=CharlesStover&hashtags=react,reactjs,javascript,typescript,webdev,webdevelopment) [![version](https://img.shields.io/npm/v/use-page-visibility.svg)](https://www.npmjs.com/package/use-page-visibility) [![minzipped size](https://img.shields.io/bundlephobia/minzip/use-page-visibility.svg)](https://www.npmjs.com/package/use-page-visibility) [![downloads](https://img.shields.io/npm/dt/use-page-visibility.svg)](https://www.npmjs.com/package/use-page-visibility) [![build](https://api.travis-ci.com/CharlesStover/use-page-visibility.svg)](https://travis-ci.com/CharlesStover/use-page-visibility/)

Listen for page transition (visibility and persistence) events with a React
hook.

- [Install](#install)
- [Use](#use)
- [Sponsor](#sponsor)

## Install

- `npm install use-page-visibility` or
- `yarn add use-page-visibility`

## Use

```javascript
function App() {
  const [isVisible, isPersistent] = usePageVisibility();
  return (
    <p>
      The page is {isVisible ? 'visible' : 'hidden'}
      {isPersistent ? ' and persisted' : ''}.
    </p>
  );
}
```

## Sponsor 💗

If you are a fan of this project, you may
[become a sponsor](https://github.com/sponsors/CharlesStover)
via GitHub's Sponsors Program.
