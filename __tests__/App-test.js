import reducer from '../src/views/screens/mainmodule/redux/MainModuleReducer';
import * as actions from '../src/views/screens/mainmodule/redux/MainModuleAction';
import * as mockData from '../mocks/data';

describe('sum reducer test', () => {
  it('should return the initial state', () => {
    expect(reducer(undefined, {})).toEqual(mockData.initialState);
  });
  it('should handle SUM action #1', () => {
    const startAction = actions.doSum({ inputX: 5, inputY: 5 });
    expect(reducer({}, startAction)).toEqual(mockData.sumSuccessState1);
  });
  it('should handle SUM action #2', () => {
    const startAction = actions.doSum({ inputX: 20, inputY: 2 });
    expect(reducer({}, startAction)).toEqual(mockData.sumSuccessState2);
  });
  it('should handle SUM action #3', () => {
    const startAction = actions.doSum({ inputX: 80, inputY: 50 });
    expect(reducer({}, startAction)).toEqual(mockData.sumSuccessState3);
  });
  it('should handle SUM action #4', () => {
    const startAction = actions.doSum({ inputX: 1250, inputY: 1250 });
    expect(reducer({}, startAction)).toEqual(mockData.sumSuccessState4);
  });
  it('should handle SUM action #5', () => {
    const startAction = actions.doSum({ inputX: 10000, inputY: 2000 });
    expect(reducer({}, startAction)).toEqual(mockData.sumSuccessState5);
  });
});

describe('multiply reducer test', () => {
  it('should return the initial state', () => {
    expect(reducer(undefined, {})).toEqual(mockData.initialState);
  });
  it('should handle multiply action #1', () => {
    const startAction = actions.doMultiply({ inputX: 2, inputY: 4 });
    expect(reducer({}, startAction)).toEqual(mockData.multiplySuccessState1);
  });
  it('should handle multiply action #2', () => {
    const startAction = actions.doMultiply({ inputX: 9, inputY: 6 });
    expect(reducer({}, startAction)).toEqual(mockData.multiplySuccessState2);
  });
  it('should handle multiply action #3', () => {
    const startAction = actions.doMultiply({ inputX: 10, inputY: 40 });
    expect(reducer({}, startAction)).toEqual(mockData.multiplySuccessState3);
  });
  it('should handle multiply action #4', () => {
    const startAction = actions.doMultiply({ inputX: 1900, inputY: 5 });
    expect(reducer({}, startAction)).toEqual(mockData.multiplySuccessState4);
  });
  it('should handle multiply action #5', () => {
    const startAction = actions.doMultiply({ inputX: 2000, inputY: 10 });
    expect(reducer({}, startAction)).toEqual(mockData.multiplySuccessState5);
  });
});

describe('prime reducer test', () => {
  it('should return the initial state', () => {
    expect(reducer(undefined, {})).toEqual(mockData.initialState);
  });
  it('should handle prime action #1', () => {
    const startAction = actions.doSearchPrime({ n: 2 });
    expect(reducer({}, startAction)).toEqual(mockData.primeSuccessState1);
  });
  it('should handle prime action #2', () => {
    const startAction = actions.doSearchPrime({ n: 6 });
    expect(reducer({}, startAction)).toEqual(mockData.primeSuccessState2);
  });
  it('should handle prime action #3', () => {
    const startAction = actions.doSearchPrime({ n: 11 });
    expect(reducer({}, startAction)).toEqual(mockData.primeSuccessState3);
  });
  it('should handle prime action #4', () => {
    const startAction = actions.doSearchPrime({ n: 20 });
    expect(reducer({}, startAction)).toEqual(mockData.primeSuccessState4);
  });
  it('should handle prime action #5', () => {
    const startAction = actions.doSearchPrime({ n: 27 });
    expect(reducer({}, startAction)).toEqual(mockData.primeSuccessState5);
  });
});

describe('fibo reducer test', () => {
  it('should return the initial state', () => {
    expect(reducer(undefined, {})).toEqual(mockData.initialState);
  });
  it('should handle fibo action #1', () => {
    const startAction = actions.doSearchFibo({ n: 2 });
    expect(reducer({}, startAction)).toEqual(mockData.fiboSuccessState1);
  });
  it('should handle fibo action #2', () => {
    const startAction = actions.doSearchFibo({ n: 4 });
    expect(reducer({}, startAction)).toEqual(mockData.fiboSuccessState2);
  });
  it('should handle fibo action #3', () => {
    const startAction = actions.doSearchFibo({ n: 8 });
    expect(reducer({}, startAction)).toEqual(mockData.fiboSuccessState3);
  });
  it('should handle fibo action #4', () => {
    const startAction = actions.doSearchFibo({ n: 13 });
    expect(reducer({}, startAction)).toEqual(mockData.fiboSuccessState4);
  });
  it('should handle fibo action #5', () => {
    const startAction = actions.doSearchFibo({ n: 17 });
    expect(reducer({}, startAction)).toEqual(mockData.fiboSuccessState5);
  });
});
