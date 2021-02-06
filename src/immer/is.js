export const isObject = (val) => Object.prototype.toString.call(val)==='[object Object]';
export const isArray = (val) => Array.isArray(val);
export const isFunction = (val) => typeof val ==='function';