export const ON_SUM = 'ON_SUM';
export const ON_MULTIPLY = 'ON_MULTIPLY';
export const ON_PRIME = 'ON_PRIME';
export const ON_FIBO = 'ON_FIBO';

export function doSum(params) {
  return {
    type: ON_SUM,
    params
  };
}

export function doMultiply(params) {
  return {
    type: ON_MULTIPLY,
    params
  };
}

export function doSearchPrime(params) {
  return {
    type: ON_PRIME,
    params
  };
}

export function doSearchFibo(params) {
  return {
    type: ON_FIBO,
    params
  };
}
