import {interpolateRgbBasis} from "d3-interpolate";

export var scheme = [
  '#f0f0f0', '#f0f0f0', // grey
  '#f0f0f0', '#f0f0f0',
  '#f0f0f0', '#f0f0f0',
  '#f0f0f0', '#f0f0f0',
  '#f0f0f0',

  '#f7fbff', '#deebf7', // blue gradient
  '#c6dbef', '#9ecae1',
  '#6baed6', '#4292c6',
  '#2171b5', '#08519c',
  '#08306b'
];

export default interpolateRgbBasis(scheme.reverse());
