# react-youtube-embed

A flexible React component for embedding YouTube videos or thumbnails with customizable aspect ratios.

## Installation

```bash
npm install react-youtube-embed
```

## Usage

```jsx
function App() {
  return (
    <div>
      <YouTubeEmbed videoId="dQw4w9WgXcQ" />
      <YouTubeEmbed
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