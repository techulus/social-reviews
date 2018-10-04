# Social Reviews
Social proof your website and Impress your web visitors with Twitter testimonials.

### [DEMO](https://reviews.techulus.com/)

## Installing
You can quickly install via [npm](https://www.npmjs.com/package/social-reviews):

```
npm i social-reviews
```

or import via html script tag

```html
<script src="https://cdn.rawgit.com/techulus/social-reviews/master/bin/social-reviews.min.js"></script>
```

## Quick Start

Getting up and running is extremely easy. We can create a twitter feedback carousel using the following code:

HTML, Create a container to hold the carousel:
```html
<div id="social-review"></div>
```

JS, Initialise the review carousel:
```javascript
new SocialReview({
  selector: '#social-review',
  tweetIds: ['1044414534792863744', '1044779222844104704']
})
```

## Options & Configuration

- `selector`: CSS selector for container
- `tweetIds`: Twitter post ids
- `conversation`: `none` or `all`
- `cards`: `hidden`or `visible`
- `linkColor`: `rgb(33, 153, 256)`, default is blue
- `theme`: `light` or `dark`
- `carouselOptions`: All options supported by https://glidejs.com/docs/options/
