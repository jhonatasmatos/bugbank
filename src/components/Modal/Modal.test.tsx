import { screen, fireEvent } from '@testing-library/react';
import { renderTheme } from '../../styles/render-theme';
import { Modal } from '.';

const fn = jest.fn();

describe('<Modal />', () => {
  it('should render success modal', () => {
    const { container, getByText } = renderTheme(
      <Modal
        type="ok"
        text="A conta 123-4 foi criada com sucesso"
        onClose={fn}
      />,
    );

    const modalText = container.querySelector('p');
    const iconError = screen.queryByTestId('ok-icon') as HTMLImageElement;
    const button = getByText('Fechar');

    fireEvent.click(button);

    expect(iconError).toHaveStyle('color: green;');
    expect(button).toBeInTheDocument();
    expect(fn).toHaveBeenCalledTimes(1);
    expect(modalText).toHaveTextContent('A conta 123-4 foi criada com sucesso');
  });

  it('should render error modal', () => {
    const { container, getByText } = renderTheme(
      <Modal type="error" text="Conta inválida ou inexistente" onClose={fn} />,
    );

    const modalText = container.querySelector('p');
    const iconError = screen.queryByTestId('error-icon') as HTMLImageElement;
    const button = getByText('Fechar');

    fireEvent.click(button);

    expect(iconError).toHaveStyle('color: red;');
    expect(button).toBeInTheDocument();
    expect(fn).toHaveBeenCalledTimes(1);
    expect(modalText).toHaveTextContent('Conta inválida ou inexistente');
  });

  it('should render alert modal', () => {
    const { container, getByText } = renderTheme(
      <Modal
        type="alert"
        text="Funcionalidade em desenvolvimento"
        onClose={fn}
      />,
    );

    const modalText = container.querySelector('p');
    const iconError = screen.queryByTestId('alert-icon') as HTMLImageElement;
    const button = getByText('Fechar');

    fireEvent.click(button);

    expect(iconError).toHaveStyle('color: yellow;');
    expect(button).toBeInTheDocument();
    expect(fn).toHaveBeenCalledTimes(1);
    expect(modalText).toHaveTextContent('Funcionalidade em desenvolvimento');
  });

  it('should render with checked false', () => {
    const { container } = renderTheme(
      <Modal
        type="ok"
        text="A conta 123-4 foi criada com sucesso"
        onClose={fn}
      />,
    );
    expect(container).toMatchSnapshot();
  });
});
