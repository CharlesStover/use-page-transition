# usePageTransition [![Tweet](https://img.shields.io/twitter/url/http/shields.io.svg?style=social)](https://twitter.com/intent/tweet?text=Listen%20for%20page%20transition%20events%20with%20a%20React%20hook.&url=https://github.com/CharlesStover/use-page-transition&via=CharlesStover&hashtags=react,reactjs,javascript,typescript,webdev,webdevelopment) [![version](https://img.shields.io/npm/v/use-page-transition.svg)](https://www.npmjs.com/package/use-page-transition) [![minzipped size](https://img.shields.io/bundlephobia/minzip/use-page-transition.svg)](https://www.npmjs.com/package/use-page-transition) [![downloads](https://img.shields.io/npm/dt/use-page-transition.svg)](https://www.npmjs.com/package/use-page-transition) [![build](https://api.travis-ci.com/CharlesStover/use-page-transition.svg)](https://travis-ci.com/CharlesStover/use-page-transition/)

Listen for page transition (visibility and persistence) events with a React
hook.

- [Install](#install)
- [Use](#use)
- [Sponsor](#sponsor)

## Install

- `npm install use-page-transition` or
- `yarn add use-page-transition`

## Use

```javascript
function App() {
  const [isVisible, isPersistent] = usePageTransition();
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
