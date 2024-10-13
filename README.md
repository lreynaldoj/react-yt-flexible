# react-yt-flexible

A flexible React component for embedding YouTube videos or thumbnails with customizable aspect ratios and advanced features.

## Installation

```bash
npm install react-yt-flexible
```

## Usage

```jsx
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
```

## Props

- `videoId` (string, required): The YouTube video ID.
- `mode` (string, optional): 'video' or 'thumbnail'. Default is 'video'.
- `aspectRatio` (string, optional): '16:9', '4:3', '21:9', '1:1', '9:16', or '3:2'. Default is '16:9'.
- `borderRadius` (string, optional): CSS border-radius value. Default is '0px'.
- `style` (object, optional): Additional styles to apply to the container.

## License

MIT
