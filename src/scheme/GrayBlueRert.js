import {interpolateRgbBasis} from "d3-interpolate";

export var scheme = [
  '#969696', '#969696',
  '#969696', '#969696',
  '#969696', '#969696',
  '#969696', '#969696',
  '#969696',
  '#f7fbff', '#deebf7',
  '#c6dbef', '#9ecae1',
  '#6baed6', '#4292c6',
  '#2171b5', '#08519c',
  '#08306b'
];

export default interpolateRgbBasis(scheme.reverse());
