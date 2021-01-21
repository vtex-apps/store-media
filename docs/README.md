📢 Use this project, [contribute](https://github.com/vtex-apps/store-media) to it or open issues to help evolve it using [Store Discussion](https://github.com/vtex-apps/store-discussion).

# Media

<!-- DOCS-IGNORE:start -->
<!-- ALL-CONTRIBUTORS-BADGE:START - Do not remove or modify this section -->

[![All Contributors](https://img.shields.io/badge/all_contributors-0-orange.svg?style=flat-square)](#contributors-)

<!-- ALL-CONTRIBUTORS-BADGE:END -->
<!-- DOCS-IGNORE:end -->

The Media app allows you to display image and video assets using a single block.

## Configuration

1. Add the `store-media` app to your theme's dependencies in the `manifest.json` file:

```diff
 "dependencies ": {
+  "vtex.store-media": "0.x"
 }
```

2. In any desired theme template, add the `media` block with the desirable props. For example:

```json
"media#mobile-phone": {
  "props": {
    "src": "https://storecomponents.vteximg.com.br/arquivos/mobile-phone.png",
    "blockClass": "storePrint"
  }
}
```

### `media` props

The `media` block inherits all props from `image` and `video` blocks. It's highly recommended for you to check out the docs for [Image](https://github.com/vtex-apps/store-image) and [Video](https://github.com/vtex-apps/store-video) blocks before using this block.

You can use props from both blocks, but `media` will only consider the props from the block (`image` or `video`) that matches the current `mediaType`, or, in the case of `mediaType` being `imageOrVideo`, that matches the type of the `src`.

| Prop name   | Type | Description                                                                                                                                                                                                                                                                                                                         | Default value  |
| ----------- | ---- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------- |
| `mediaType` | enum | Type of the media to be displayed. Possible values are: `image` (behaves as an image block no matter the `src`), `video` (behaves as an video block no matter the `src`), and `imageOrVideo`. Choosing `imageOrVideo` will make `media` automatically identify the type of the `src` based on its extension and behave accordingly. | `imageOrVideo` |

Use the **admin's Site Editor** to manage some props declared in the `media` block. Using the Site Editor to provide the image or video `src` will force you to choose between `image` and `video`.

## Customization

In order to apply CSS customizations in this and other blocks, follow the instructions given in the recipe on [Using CSS Handles for store customization](https://vtex.io/docs/recipes/style/using-css-handles-for-store-customization).

Just like it does with props, the `media` block inherits all of `image` and `video` blocks' CSS Handles. You can find them in their respective docs.

Keep in mind that, for instance, applying CSS customizations to CSS Handles that came from `image` won't have any effect if the `mediaType` is set to `video` or if the `mediaType` is set to `imageOrVideo` and the `src` was identified as a video.

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
