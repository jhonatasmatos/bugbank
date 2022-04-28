// import { screen, fireEvent } from '@testing-library/react';
import { renderTheme } from '../../styles/render-theme';
// import { theme } from '../../styles/theme';
import { FieldInput } from '.';

const fn = jest.fn();

describe('<FieldInput />', () => {
  it('should render with success', () => {
    const { container } = renderTheme(
      <FieldInput
        label="test"
        name="test"
        visible={true}
        type="text"
        placeholder="test"
        messageError="error"
        register={fn}
      />,
    );

    expect(container).toBeInTheDocument();
  });

  it('should render with password type and not visible', () => {
    const { container } = renderTheme(
      <FieldInput
        label="test"
        name="test"
        visible={false}
        type="password"
        placeholder="test"
        messageError="error"
        register={fn}
      />,
    );

    const input = container.querySelector('input');
    const warningText = container.querySelector('p');

    expect(input).toHaveProperty('type', 'password');
    expect(warningText).toHaveStyle('opacity: 0');
  });

  it('should render with success', () => {
    const { container } = renderTheme(
      <FieldInput
        label="test"
        name="test"
        visible={true}
        type="text"
        placeholder="test"
        messageError="error"
        register={fn}
      />,
    );

    expect(container).toMatchSnapshot();
  });
});
