import {describe, expect, it} from '@jest/globals';
import {render} from '@testing-library/react-native';
import React from 'react';
import {Text} from 'react-native';

function Answer(props: {rude?: boolean}) {
  if (props.rude) {
    return <Text testID={'ignore'} />;
  }

  return <Text testID={'answer'}>Hi, Test Code</Text>;
}

describe('답변하기', () => {
  it('무례하게 답변하기', () => {
    const {getByTestId} = render(<Answer rude={true} />);
    const answer = getByTestId('ignore');
    expect(answer).toHaveTextContent('');
  });

  it('친절하게 답변하기', () => {
    const {getByTestId} = render(<Answer />);
    const answer = getByTestId('answer');

    expect(answer).toHaveTextContent('Hi, Test Code');
  });
});
