import {describe, expect, it} from '@jest/globals';
import {render} from '@testing-library/react-native';
import React from 'react';
import {Text} from 'react-native';

export function HelloWorld() {
  return <Text testID={'helloWorld'}>Hello, World!</Text>;
}

export function HiWorld() {
  return <Text testID={'hiWorld'}>Hi, World!</Text>;
}

describe('HelloWorld', () => {
  it('Hello, World!', () => {
    const {getByTestId} = render(<HelloWorld />);
    const helloWorld = getByTestId('helloWorld');

    expect(helloWorld).toHaveTextContent('Hello, World!');
  });

  it('Hi, World!', () => {
    const {getByTestId} = render(<HiWorld />);
    const helloWorld = getByTestId('hiWorld');

    expect(helloWorld).toHaveTextContent('Hi, World!');
  });
});
