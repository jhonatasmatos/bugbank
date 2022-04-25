import { screen, fireEvent } from '@testing-library/react';
import { renderTheme } from '../../styles/render-theme';
import { theme } from '../../styles/theme';
import { Button } from '.';

const fn = jest.fn();

describe('<Button />', () => {
  it('should render with success', () => {
    const { container, getByText } = renderTheme(
      <Button label="Enviar" onClick={fn} />,
    );

    const button = getByText('Enviar');

    fireEvent.click(button);

    expect(container).toBeInTheDocument();
    expect(fn).toHaveBeenCalledTimes(1);
    expect(button).toHaveTextContent('Enviar');
  });

  it('should render pink button', () => {
    const { container } = renderTheme(
      <Button label="Enviar" appearance="pink" />,
    );

    const button = container.querySelector('button');

    expect(button).toHaveStyle(`background-color: ${theme.colors.primary}`);
    expect(button).toHaveStyle(`color: ${theme.colors.white}`);
  });

  it('should render white button', () => {
    const { container } = renderTheme(
      <Button label="Enviar" appearance="white" />,
    );

    const button = container.querySelector('button');

    expect(button).toHaveStyle(`background-color: ${theme.colors.white}`);
    expect(button).toHaveStyle(`color: ${theme.colors.secondary}`);
  });

  it('should render purple button', () => {
    const { container } = renderTheme(
      <Button label="Enviar" appearance="purple" />,
    );

    const button = container.querySelector('button');

    expect(button).toHaveStyle(`background-color: ${theme.colors.secondary}`);
    expect(button).toHaveStyle(`color: ${theme.colors.white}`);
  });

  it('should render with success', () => {
    const { container } = renderTheme(<Button label="Enviar" onClick={fn} />);
    expect(container).toMatchSnapshot();
  });
});
