import {describe, expect, it} from '@jest/globals';
import {render, screen} from '@testing-library/react-native';
import {useEffect, useRef} from 'react';
import {Text} from 'react-native';

// @ts-ignore
function StateChanged(props) {
  const renderCountRef = useRef(0);

  useEffect(() => {
    renderCountRef.current = renderCountRef.current + 1;
  }, [props]);

  return (
    <Text
      testID={'renderCount'}>{`${renderCountRef.current} 번 리렌더링`}</Text>
  );
}

describe('상태 변경 시 렌더링 횟수', () => {
  it('컴포넌트 두번 업데이트하기', () => {
    render(<StateChanged />);

    screen.update(<StateChanged />);

    screen.update(<StateChanged />);

    const renderCount = screen.getByTestId('renderCount');
    expect(renderCount).toHaveTextContent('2 번 리렌더링');
  });
});
