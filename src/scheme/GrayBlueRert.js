import {interpolateRgbBasis} from "d3-interpolate";

export var scheme = [
  '#d9d9d9', '#d9d9d9', // grey
  '#d9d9d9', '#d9d9d9',
  '#d9d9d9',
  '#6baed6', '#4292c6', // blue gradient
  '#2171b5', '#08519c',
  '#08306b'
];

export default interpolateRgbBasis(scheme.reverse());
