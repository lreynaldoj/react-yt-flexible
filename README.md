<p align="center">
  <img src="./assets/logo.png" alt="Logo" width="150" />
</p>

<h1 align="center">React YouTube Flexible</h1>

<!--
<p align="center">
  <a href="https://www.npmjs.com/package/react-yt-flexible">
    <img src="https://img.shields.io/npm/v/react-yt-flexible.svg?style=flat-square" alt="npm version" />
  </a>
  <a href="https://github.com/luiserj/react-yt-flexible/blob/main/LICENSE">
    <img src="https://img.shields.io/github/license/luiserj/react-yt-flexible" alt="GitHub license" />
  </a>
  <a href="https://www.npmjs.com/package/react-yt-flexible">
    <img src="https://img.shields.io/npm/dm/react-yt-flexible.svg?style=flat-square" alt="Downloads" />
  </a>
  <a href="https://github.com/luiserj/react-yt-flexible/commits/main">
    <img src="https://img.shields.io/github/last-commit/luiserj/react-yt-flexible?style=flat-square" alt="Last Commit" />
  </a>
</p>
-->

A highly flexible React component for embedding YouTube videos or thumbnails, with customizable aspect ratios, styles, and seamless integration with Tailwind CSS.

## Features

- Embed YouTube videos or thumbnails with a single video ID.
- Customizable aspect ratios.
- Support for custom styles and Tailwind CSS classes.
- Lightweight and easy to use.
- Perfect for responsive designs and easily adaptable to various screen sizes.

## Installation

Install the package using npm:

```bash
npm install react-yt-flexible
```

## Usage

To use the `ReactYTFlexible` component, simply import it and pass the `videoId` of the YouTube video you want to embed:

```jsx
import React from 'react';
import { ReactYTFlexible } from 'react-yt-flexible';

function App() {
  return (
    <div>
      {/* Standard video */}
      <ReactYTFlexible videoId="dQw4w9WgXcQ" />
      
      {/* Thumbnail mode with custom aspect ratio and border radius */}
      <ReactYTFlexible
        videoId="dQw4w9WgXcQ"
        mode="thumbnail"
        borderRadius="1rem"
      />
    </div>
  );
}

export default App;
```

## Props

Here are the available props for the `ReactYTFlexible` component:

- **`videoId`** (string, required): The YouTube video ID.
- **`mode`** (string, optional): Either `'video'` or `'thumbnail'`. Default is `'video'`.
- **`aspectRatio`** (string, optional): `'16:9'`, `'4:3'`, `'21:9'`, `'1:1'`, `'9:16'`, or `'3:2'`. Default is `'16:9'`.
- **`borderRadius`** (string, optional): CSS border-radius value. Default is `'0px'`.
- **`style`** (object, optional): Custom inline styles.
- **`className`** (string, optional): Tailwind CSS or other class names for additional styling.

## Tailwind Integration

One of the key features of `ReactYTFlexible` is its ability to seamlessly integrate with Tailwind CSS. You can easily apply Tailwind classes to control the appearance, transitions, and even animations. Here's an example:

```jsx
<ReactYTFlexible
  videoId="dQw4w9WgXcQ"
  mode="thumbnail"
  className="transition duration-500 group-hover:scale-105"
/>
```

This allows you to quickly customize how the video or thumbnail looks, including adding hover effects or responsive design elements, while maintaining a lightweight implementation.

## Example Gallery

Check out these examples to see how `ReactYTFlexible` can be used in different scenarios:

### Example 1: Standard Video

```jsx
<ReactYTFlexible videoId="e6T34u51MaA" borderRadius="0.5rem" />
```

**Result**:

![Standard Video Example](./assets/standard-video.png)

### Example 2: Thumbnail with Custom Styles

```jsx
<ReactYTFlexible
  videoId="GDlkCkcIqTs"
  mode="thumbnail"
  className="transition duration-500 hover:scale-105"
/>
```

**Result**:

![Thumbnail Example](./assets/thumbnail-example.png)

You can find more examples and live demos [here](https://stackblitz.com/~/github.com/luiserj/react-yt-flexible-examples).

## License

This project is licensed under the MIT License. You can find the full license [here](https://github.com/luiserj/react-yt-flexible/blob/main/LICENSE).