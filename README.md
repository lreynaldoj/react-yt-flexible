
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

A flexible React component for embedding YouTube videos or thumbnails with customizable aspect ratios and advanced features.

## Features

- Embed YouTube videos or thumbnails
- Customizable aspect ratios
- Support for custom styles and class names
- Lightweight and easy to use

## Installation

```bash
npm install react-yt-flexible
```

## Usage

```jsx
import React from 'react';
import { ReactYTFlexible } from 'react-yt-flexible';

function App() {
  return (
    <div>
      <ReactYTFlexible videoId="dQw4w9WgXcQ" />
      <ReactYTFlexible
        videoId="dQw4w9WgXcQ"
        mode="thumbnail"
        aspectRatio="4:3"
        borderRadius="1rem"
      />
    </div>
  );
}

export default App;
```

## Props

- `videoId` (string, required): The YouTube video ID.
- `mode` (string, optional): 'video' or 'thumbnail'. Default is 'video'.
- `aspectRatio` (string, optional): '16:9', '4:3', '21:9', '1:1', '9:16', or '3:2'. Default is '16:9'.
- `borderRadius` (string, optional): CSS border-radius value. Default is '0px'.
- `style` (object, optional): Additional styles to apply to the container.
- `className` (string, optional): Additional class names to apply to the container.

## Example

Here is an example of how to use `ReactYTFlexible` in your project:

```jsx
import React from 'react';
import { ReactYTFlexible } from 'react-yt-flexible';

function VideoGallery() {
  return (
    <div>
      <ReactYTFlexible videoId="dQw4w9WgXcQ" />
      <ReactYTFlexible
        videoId="dQw4w9WgXcQ"
        mode="thumbnail"
        aspectRatio="4:3"
        borderRadius="1rem"
        style={{ border: '2px solid #000' }}
        className="custom-class"
      />
    </div>
  );
}

export default VideoGallery;
```

## License

MIT
