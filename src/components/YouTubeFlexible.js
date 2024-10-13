import React from 'react';

const aspectRatios = {
    '16:9': '56.25%',
    '4:3': '75%',
    '21:9': '42.85%',
    '1:1': '100%',
    '9:16': '177.78%',
    '3:2': '66.67%'
};

const ReactYTFlexible = ({
    videoId,
    mode = 'video',
    aspectRatio = '16:9',
    borderRadius = '0px',
    style = {},
}) => {
    const containerStyle = {
        position: 'relative',
        overflow: 'hidden',
        width: '100%',
        paddingTop: aspectRatios[aspectRatio] || aspectRatios['16:9'],
        borderRadius,
        ...style,
    };

    const contentStyle = {
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
    };

    return (
        <div style={containerStyle}>
            {mode === 'video' ? (
                <iframe
                    style={contentStyle}
                    src={`https://www.youtube.com/embed/${videoId}`}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                ></iframe>
            ) : (
                <img
                    style={contentStyle}
                    src={`https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`}
                    alt="YouTube video thumbnail"
                />
            )}
        </div>
    );
};

export { ReactYTFlexible };
export default ReactYTFlexible;
