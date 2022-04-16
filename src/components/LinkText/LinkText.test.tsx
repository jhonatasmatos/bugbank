import { fireEvent } from '@testing-library/react';
import { renderTheme } from '../../styles/render-theme';
import { LinkText } from '.';

const fn = jest.fn();

describe('<Modal />', () => {
  it('should render LinkText with text "text link" and href', () => {
    const { container, getByText, debug } = renderTheme(
      <LinkText href="/test">text link</LinkText>,
    );
    debug();

    const linkText = getByText('text link');

    expect(container).toHaveTextContent('text link');
    expect(linkText).toHaveAttribute('href', '/test');
  });

  it('should test click on link', () => {
    const { getByText } = renderTheme(
      <LinkText href="/test" onClick={fn}>
        text link
      </LinkText>,
    );

    const linkText = getByText('text link');

    fireEvent.click(linkText);

    expect(linkText).toHaveAttribute('href', '/test');
    expect(fn).toBeCalledTimes(1);
  });

  it('should render with checked false', () => {
    const { container } = renderTheme(<LinkText>text link</LinkText>);
    expect(container).toMatchSnapshot();
  });
});
