📢 Use this project, [contribute](https://github.com/vtex-apps/store-media) to it or open issues to help evolve it using [Store Discussion](https://github.com/vtex-apps/store-discussion).

# Media

<!-- DOCS-IGNORE:start -->
<!-- ALL-CONTRIBUTORS-BADGE:START - Do not remove or modify this section -->

[![All Contributors](https://img.shields.io/badge/all_contributors-0-orange.svg?style=flat-square)](#contributors-)

<!-- ALL-CONTRIBUTORS-BADGE:END -->
<!-- DOCS-IGNORE:end -->

The Media app allows you to display image and/or video assets using a single block.

![media-list-example](https://user-images.githubusercontent.com/8127610/107076678-848fbf80-67ca-11eb-9ba3-8a7d285c4b2c.gif)
## Configuration

1. Add the `store-media` app to your theme's dependencies in the `manifest.json` file:

```diff
 "dependencies ": {
+  "vtex.store-media": "0.x"
 }
```

Now, you are able to use all blocks exported by the `store-media` app. Check out the full list below:

| Block name | Description |
| :--------: | :---------: |
| `media`    | Renders images and/or videos. |
| `list-context.media-list` | Renders a list of images and/or videos with a higher degree of flexibility. Use this block along with the [Slider Layout's blocks](https://developers.vtex.com/vtex-developer-docs/docs/vtex-slider-layout) to create different layouts with media carrousel. For more details on this, check out below the Advanced Configuration section. |

2. Add the `media` block to the desired template and then declare it using its props. For example:

```json
"media#mobile-phone": {
  "props": {
    "src": "https://storecomponents.vteximg.com.br/arquivos/mobile-phone.png",
    "blockClass": "storePrint"
  }
}
```

| Prop name | Type | Description | Default value |
| :-------: | :--: | :---------: | :-----------: |
| `mediaType` | `enum` | Type of the media to be displayed. Possible values are: `image` (block behaves as an image displayer, regardless of the `src` content), `video` (block behaves as a video displayer, regardless of the `src` content), and `imageOrVideo`. Notice that choosing `imageOrVideo` will make the `media` block automatically identify the type of the media based on the `src` content, and thereafter behave accordingly. | `imageOrVideo` |

> ℹ️ *In addition to the `mediaType` prop, the `media` block inherits all props from the Image and Video apps. It is highly recommended that you access the [Image](https://developers.vtex.com/vtex-developer-docs/docs/vtex-store-image) and [Video](https://developers.vtex.com/vtex-developer-docs/changelog/store-video-app) documentation when performing the second step.*

> ⚠️ *Although Image's and Video's props apps are accepted, the `media` block will only consider those that match the value defined in the `mediaType` prop. When using `imageOrVideo`, the block will validate the props according to the `src` content. If you declare props that don't match the pre-defined media type, they will not be considered.*

> ⚠️ *Using the Site Editor to provide the `src`'s value will force you to choose between `image` and `video` in the `mediaType` prop.

### Advanced Configuration

The `list-context.media-list` block should be used when building a carrousel responsible for displaying several media on your store pages.  

Since its goal is to provide more layout flexibility, this block accepts both image and video content, allowing you to also use [Image](https://developers.vtex.com/vtex-developer-docs/docs/vtex-store-image)'s and [Video](https://developers.vtex.com/vtex-developer-docs/changelog/store-video-app)'s props to achieve the desired result. For example:

```json
"list-context.media-list#demo": {
  "children": ["slider-layout#demo-media"],
  "props": {
    "height": 720,
    "mediaList": [
      {
        "image": "https://storecomponents.vteximg.com.br/arquivos/banner-principal.png",
        "mobileImage": "https://storecomponents.vteximg.com.br/arquivos/banner-principal-mobile.jpg"
      },
      {
        "video": "https://www.youtube.com/embed/JgkrlaF52WQ"
      },
      {
        "image": "https://storecomponents.vteximg.com.br/arquivos/banner.jpg",
        "mobileImage": "https://storecomponents.vteximg.com.br/arquivos/banner-principal-mobile.jpg"
      }
    ]
  }
},
"slider-layout#demo-media": {
  "props": {
    "itemsPerPage": 1,
    "infinite": true,
    "showNavigationArrows": "desktopOnly",
    "blockClass": "carousel"
  }
}
```

| Prop name | Type | Description | Default value |
| :-------: | :--: | :---------: | :-----------: |
| `height` | `number` | Image height. This prop is aimed for the `max-height` CSS property and should only be applied to image assets. | `420` |
| `mediaList` | `object` | List of images and/or video assets to be displayed. | `undefined` |

- **`mediaList` object**

| Prop name | Type | Description | Default value |
| :-------: | :--: | :---------: | :-----------: |
| `image` | `string` | URL of the image to be displayed. | `undefined` |
| `mobileImage` | `string` | URL of the image to be displayed on mobile devices. If not declared, the `image`'s URL will be used instead. | `undefined` |
| `video` | `string` | URL of the video to be displayed. | `undefined` |
| `mobileVideo` | `string` | URL of the video to be displayed on mobile devices. If not declared, `video`'s URL will be used instead. | `undefined` |

> ⚠️ Notice that, differently from the `media` block, the `list-context.media-list` block does not use the `src` prop to receive the desired assets. Instead, it uses the 4 props stated above.

## Customization

The Media's blocks inherit all of the Image and Video blocks' CSS Handles. 

Access the Customization section from the [Image](https://developers.vtex.com/vtex-developer-docs/docs/vtex-store-image) and [Video](https://developers.vtex.com/vtex-developer-docs/changelog/store-video-app) documentations to see the full list of available Handles. Do not forget to also access the [Using CSS Handles for store customization](https://vtex.io/docs/recipes/style/using-css-handles-for-store-customization) documentation in order to learn how to properly customize your components.

> ⚠️ *Keep in mind that applying Image's Handles to video assets won't generate any effect on the interface, as well as applying Video's Handles to image assets. 

<!-- DOCS-IGNORE:start -->

## Contributors ✨

Thanks goes to these wonderful people:

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore-start -->
<!-- markdownlint-disable -->
<!-- markdownlint-enable -->
<!-- prettier-ignore-end -->

<!-- ALL-CONTRIBUTORS-LIST:END -->

This project follows the [all-contributors](https://github.com/all-contributors/all-contributors) specification. Contributions of any kind are welcome!

<!-- DOCS-IGNORE:end -->
