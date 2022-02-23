# react-cookie-consent

[![npm version][npm-version-image]][npm-version-link]
[![npm download][npm-download-image]][npm-download-link]
[![Apache-2.0 license][license-image]][license-link]
[![semantic release][semantic-release-image]][semantic-release-link]
[![language grade][language-grade-image]][language-grade-link]

React Cookie Consent.

- [Demo](#demo)
- [Installation](#installation)
- [Usage](#usage)
- [Component](#component)
  - [CookieConsent](#cookieconsent)
  - [CookieConsent.Category](#cookieconsentcategory)
  - [CookieConsent.Cookie](#cookieconsentcookie)
  - [CookieConsent.Portal](#cookieconsentportal)
- [Styling](#styling)

# Demo

a minimal demo is in the `example` directory:

```
npm run serve:example
```

# Installation

```
npm install --save @havlasme/react-cookie-consent
```

or use yarn:

```
yarn add @havlasme/react-cookie-consent
```

# Usage

import cookie consent component:

```js
import { CookieConsent } from '@havlasme/react-cookie-consent'
```

optionally import cookie consent stylesheet:

```js
import '@havlasme/react-cookie-consent/dist/react-cookie-consent.min.css'
```

sample:

```jsx
<CookieConsent version={20220201} onSubmit={handleSubmit}>
    <h4 className="cc-title">
        Cookie Consent
    </h4>

    <div className="cc-description">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur maximus, eros in rhoncus volutpat, metus diam malesuada velit, quis suscipit
        lacus ligula eget arcu. Duis tempor leo eget leo tristique hendrerit. Proin luctus lobortis libero, et lacinia libero suscipit et. Phasellus
        venenatis metus ut velit maximus, eget lacinia arcu ultrices.
    </div>

    <div className="cc-privacy-policy">
        Read more in
        <a href="#">privacy policy</a>
    </div>

    <CookieConsent.Category checked={true} disabled={true} name="technical" title="Technical">
        <div className="cc-category-description">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris congue commodo purus, nec semper orci hendrerit eget. Nam in purus eget
            neque feugiat consequat id eget odio.
        </div>

        <CookieConsent.Cookie name="cc:consent" expiration="Persistent" type="HTML">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut pellentesque placerat massa, eu molestie diam aliquam vitae.
        </CookieConsent.Cookie>
    </CookieConsent.Category>

    <CookieConsent.Category name="analytical" title="Analytical">
        <div className="cc-category-description">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent mollis rutrum hendrerit. Quisque quis dui id lorem elementum consectetur
            a ut orci. Suspendisse aliquet sit amet justo nec viverra. Suspendisse potenti.
        </div>

        <CookieConsent.Cookie name="analytical1" expiration="1 year" type="HTTP">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nunc arcu, tincidunt ac ligula in, tempor consectetur arcu. Mauris nec
            magna finibus, efficitur nunc id, pretium nunc.
        </CookieConsent.Cookie>

        <CookieConsent.Cookie name="analytical2" expiration="1 minute" type="HTTP">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse ultricies luctus aliquet. Duis nec urna sit amet eros pharetra auctor
            et sit amet leo. Sed interdum blandit lorem. Maecenas facilisis ut ante et scelerisque.
        </CookieConsent.Cookie>
    </CookieConsent.Category>

    <CookieConsent.Category name="marketing" title="Marketing">
        <div className="cc-category-description">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris lacinia ultrices pellentesque. Proin sodales ac tellus in volutpat.
            Curabitur semper tempor dolor vitae posuere. Pellentesque ultrices orci vel scelerisque molestie. Curabitur eget arcu et dolor maximus
            lacinia. Aenean nec turpis ut lectus gravida semper at varius mauris. Sed eget eleifend purus.
        </div>

        <CookieConsent.Cookie name="marketing1" expiration="3 month" type="HTTP">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec augue neque, lobortis eu leo ac, mattis ullamcorper odio. Fusce elementum
            leo nibh, eu tristique augue vestibulum sed.
        </CookieConsent.Cookie>
    </CookieConsent.Category>
</CookieConsent>
```

# Component

## CookieConsent

The cookie consent main component, used to position cookie consent on the screen.

| prop name  | description                                | default value       | example value                   |
|------------|--------------------------------------------|---------------------|---------------------------------|
| className  | the class name                             | N/A                 | `"class1 class2"`               |
| expiration | the cookie consent expiration (in seconds) | `31536000` (1 year) | `2592000`                       |
| open       | is the cookie consent expanded?            | `false`             | `true`                          |
| persist    | the cookie consent persistence key         | `"cc:consent"`      | `"cookie-consent"`              |
| version    | the cookie consent version                 | N/A                 | `20220201`                      |
| onSubmit   | the submit event callback                  | N/A                 | `(value) => console.log(event)` |

## CookieConsent.Category

The cookie consent category component, used to describe cookie category.

| prop name  | description                                            | default value | example value                   |
|------------|--------------------------------------------------------|---------------|---------------------------------|
| checked    | is the cookie category control checked?                | `false`       | `true`                          |
| className  | the class name                                         | N/A           | `"class1 class2"`               |
| disabled   | is the cookie category control disabled?               | `false`       | `true`                          |
| name       | the cookie category name, used as identity in response | N/A           | `"analytical"`                  |
| title      | the cookie category title                              | N/A           | `"Analytical"`                  |
| onChange   | the change event callback                              | N/A           | `(event) => console.log(event)` |

## CookieConsent.Cookie

The cookie consent cookie component, used to describe cookie inside category.

| prop name  | description            | default value | example value     |
|------------|------------------------|---------------|-------------------|
| className  | the class name         | N/A           | `"class1 class2"` |
| expiration | the cookie expiration  | N/A           | `"1 month"`       |
| name       | the cookie name        | N/A           | `"cc:consent"`    |
| type       | the cookie type        | N/A           | `"HTTP"`          |

## CookieConsent.Portal

The cookie consent portal component, used to displace the cookie consent DOM node outside the parent component DOM hierarchy.

# Styling

the cookie consent component can be styled using css:

| variable                                | description                               | default value               |
|-----------------------------------------|-------------------------------------------|-----------------------------|
| --cc-theme-background                   | the cookie consent component background   | `#FFFFFF`                   |
| --cc-theme-color                        | the cookie consent component text color   | `#000000`                   |
| --cc-theme-portal-background            | the portal component background           | `rgba(255, 255, 255, 0.25)` |
| --cc-theme-checkbox-active-background   | the checkbox background in active state   | `#0D6EFD`                   |
| --cc-theme-checkbox-inactive-background | the checkbox background in inactive state | `#DDDDDD`                   |
| --cc-theme-checkbox-control             | the checkbox control color                | `#FFFFFF`                   |
| --cc-theme-partition                    | the category / cookie partition color     | `#DDDDDD`                   |

[npm-version-image]: https://img.shields.io/npm/v/@havlasme/react-cookie-consent.svg?style=flat-square
[npm-version-link]: https://npmjs.org/package/@havlasme/react-cookie-consent
[npm-download-image]: https://img.shields.io/npm/dm/@havlasme/react-cookie-consent.svg?style=flat-square
[npm-download-link]: https://npmcharts.com/compare/@havlasme/react-cookie-consent?minimal=true
[license-image]: https://img.shields.io/badge/license-Apache2.0-blue.svg?style=flat-square
[license-link]: LICENSE
[semantic-release-image]: https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg?style=flat-square
[semantic-release-link]: https://github.com/semantic-release/semantic-release
[language-grade-image]: https://img.shields.io/lgtm/grade/javascript/g/havlasme/react-cookie-consent?style=flat-square
[language-grade-link]: https://lgtm.com/projects/g/havlasme/react-cookie-consent/context:javascript
