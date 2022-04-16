import { fireEvent } from '@testing-library/react';
import { renderTheme } from '../../styles/render-theme';
import { theme } from '../../styles/theme';
import { ToggleSwitch } from '.';

const fn = jest.fn();

describe('<ToggleSwitch />', () => {
  it('should render background with gray color when isChecked is false', () => {
    const { container } = renderTheme(
      <ToggleSwitch id="toggleId" isChecked={false} onClick={fn} />,
    );

    const containerToggle = container.querySelector('label');
    const span = container.querySelector('span');

    expect(containerToggle).toHaveStyle(`background: ${theme.colors.gray};`);
    expect(span).toHaveStyle('left: 0;');
  });

  it('should render background with primary color when isChecked is true', () => {
    const { container } = renderTheme(
      <ToggleSwitch id="toggleId" isChecked={true} onClick={fn} />,
    );

    const containerToggle = container.querySelector('label');
    const inputToggle = container.querySelector('input');
    const span = container.querySelector('span');

    fireEvent.click(inputToggle);

    expect(fn).toHaveBeenCalledTimes(1);
    expect(containerToggle).toHaveStyle(`background: ${theme.colors.primary};`);
    expect(span).toHaveStyle('left: 60%;');
  });

  it('should render with checked false', () => {
    const { container } = renderTheme(
      <ToggleSwitch id="toggleId" isChecked={false} onClick={fn} />,
    );
    expect(container).toMatchSnapshot();
  });
});
