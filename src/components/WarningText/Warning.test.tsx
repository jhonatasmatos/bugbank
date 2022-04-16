import { renderTheme } from '../../styles/render-theme';
import { theme } from '../../styles/theme';
import { WarningText } from '.';

describe('<WarningText />', () => {
  it('should render with white color', () => {
    const { container } = renderTheme(
      <WarningText color="white">text test</WarningText>,
    );

    const warningText = container.querySelector('p');

    expect(warningText).toHaveStyle(`color: ${theme.colors.white};`);
  });

  it('should render with primary color', () => {
    const { container } = renderTheme(
      <WarningText color="secondary">text test</WarningText>,
    );

    const warningText = container.querySelector('p');

    expect(warningText).toHaveStyle(`color: ${theme.colors.secondary};`);
  });

  it('should render with primary color', () => {
    const { container } = renderTheme(
      <WarningText color="secondary">text test</WarningText>,
    );

    const warningText = container.querySelector('p');

    expect(warningText).toHaveTextContent('text test');
  });

  it('should render with texto "text test"', () => {
    const { container } = renderTheme(<WarningText>text test</WarningText>);

    expect(container).toMatchSnapshot();
  });
});
