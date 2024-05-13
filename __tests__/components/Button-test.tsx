import {describe, expect, it} from '@jest/globals';
import {render, screen, userEvent} from '@testing-library/react-native';
import {useState} from 'react';
import {Button, Text, View} from 'react-native';

// @ts-ignore
function MyButton(props) {
  const [pressCount, setPressCount] = useState(0);

  return (
    <View>
      <Text>{`${pressCount} 클릭`}</Text>
      <Button
        onPress={() => setPressCount(pressCount + 1)}
        title={'클릭!'}
        testID={'button'}
      />
    </View>
  );
}

describe('사용자 행동 결과 검증', () => {
  it('버튼 클릭', async () => {
    jest.useFakeTimers();

    render(<MyButton />);

    const button = screen.getByTestId('button');

    const user = userEvent.setup();

    await user.press(button);
    await user.press(button);

    expect(screen.getByText('2 클릭')).toBeTruthy();
  });
});
