import { ON_SUM, ON_MULTIPLY, ON_PRIME, ON_FIBO } from './MainModuleAction';

const initialState = {
  sumResult: 0,
  multiplyResult: 0,
  primeResult: [],
  fiboResult: []
};

function homeData(state = initialState, action) {
  switch (action.type) {
    case ON_SUM: {
      const { inputX, inputY } = action.params;
      const resultSUm = parseInt(inputX, 10) + parseInt(inputY, 10);
      return { ...state, sumResult: resultSUm };
    }
    case ON_MULTIPLY: {
      const { inputX, inputY } = action.params;
      const resultMultiply = parseInt(inputX, 10) * parseInt(inputY, 10);

      return {
        ...state,
        multiplyResult: resultMultiply
      };
    }
    case ON_PRIME: {
      const { n } = action.params;
      let count = 0;
      let num = 2;
      const primes = [];
      while (count < n) {
        let prime = true;
        for (let i = 2; i <= Math.sqrt(num); i += 1) {
          if (num % i === 0) {
            prime = false;
            break;
          }
        }
        if (prime) {
          count += 1;
          primes.push(num);
        }
        num += 1;
      }
      return { ...state, primeResult: primes };
    }
    case ON_FIBO: {
      const { n } = action.params;
      let i;
      const fib = [];
      const fibonaci = [];
      fib[0] = 0;
      fib[1] = 1;

      if (parseInt(n, 10) === 1) {
        fibonaci.push(fib[0]);
      } else if (parseInt(n, 10) === 2) {
        fibonaci.push(fib[0]);
        fibonaci.push(fib[1]);
      } else {
        fibonaci.push(fib[0]);
        fibonaci.push(fib[1]);
        for (i = 2; i <= parseInt(n, 10) + 1; i += 1) {
          fib[i] = fib[i - 2] + fib[i - 1];

          if (fibonaci.length > n - 1) break;

          fibonaci.push(fib[i]);
        }
      }
      return { ...state, fiboResult: fibonaci };
    }

    default: {
      return { ...state };
    }
  }
}

export default homeData;
