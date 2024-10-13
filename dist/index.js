'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

function _defineProperty(e, r, t) {
  return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, {
    value: t,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[r] = t, e;
}
function ownKeys(e, r) {
  var t = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e);
    r && (o = o.filter(function (r) {
      return Object.getOwnPropertyDescriptor(e, r).enumerable;
    })), t.push.apply(t, o);
  }
  return t;
}
function _objectSpread2(e) {
  for (var r = 1; r < arguments.length; r++) {
    var t = null != arguments[r] ? arguments[r] : {};
    r % 2 ? ownKeys(Object(t), !0).forEach(function (r) {
      _defineProperty(e, r, t[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) {
      Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r));
    });
  }
  return e;
}
function _toPrimitive(t, r) {
  if ("object" != typeof t || !t) return t;
  var e = t[Symbol.toPrimitive];
  if (void 0 !== e) {
    var i = e.call(t, r || "default");
    if ("object" != typeof i) return i;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return ("string" === r ? String : Number)(t);
}
function _toPropertyKey(t) {
  var i = _toPrimitive(t, "string");
  return "symbol" == typeof i ? i : i + "";
}

var aspectRatios = {
  '16:9': '56.25%',
  '4:3': '75%',
  '21:9': '42.85%',
  '1:1': '100%',
  '9:16': '177.78%',
  '3:2': '66.67%'
};
var ReactYTFlexible = function ReactYTFlexible(_ref) {
  var videoId = _ref.videoId,
    _ref$mode = _ref.mode,
    mode = _ref$mode === void 0 ? 'video' : _ref$mode,
    _ref$aspectRatio = _ref.aspectRatio,
    aspectRatio = _ref$aspectRatio === void 0 ? '16:9' : _ref$aspectRatio,
    _ref$borderRadius = _ref.borderRadius,
    borderRadius = _ref$borderRadius === void 0 ? '0px' : _ref$borderRadius,
    _ref$style = _ref.style,
    style = _ref$style === void 0 ? {} : _ref$style;
  var containerStyle = _objectSpread2({
    position: 'relative',
    overflow: 'hidden',
    width: '100%',
    paddingTop: aspectRatios[aspectRatio] || aspectRatios['16:9'],
    borderRadius: borderRadius
  }, style);
  var contentStyle = {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%'
  };
  return /*#__PURE__*/React__default["default"].createElement("div", {
    style: containerStyle
  }, mode === 'video' ? /*#__PURE__*/React__default["default"].createElement("iframe", {
    style: contentStyle,
    src: "https://www.youtube.com/embed/".concat(videoId),
    allow: "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",
    allowFullScreen: true
  }) : /*#__PURE__*/React__default["default"].createElement("img", {
    style: contentStyle,
    src: "https://img.youtube.com/vi/".concat(videoId, "/maxresdefault.jpg"),
    alt: "YouTube video thumbnail"
  }));
};

exports.ReactYTFlexible = ReactYTFlexible;
//# sourceMappingURL=index.js.map
