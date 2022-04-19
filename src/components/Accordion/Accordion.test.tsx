import { screen, fireEvent } from '@testing-library/react';
import { renderTheme } from '../../styles/render-theme';
import { Accordion } from '.';

const fn = jest.fn();

describe('<Accordion />', () => {
  it('should render accordion closed when tittle and accordionOpened are different', () => {
    renderTheme(
      <Accordion
        id="xpto-1234-0000"
        onClick={fn}
        accordionOpened="xpto-1234-0000"
        title="xpto-12345-0000"
        description={['Description 1', 'Description 2']}
      />,
    );

    const iconPlus = screen.queryByTestId('plus-icon') as HTMLImageElement;
    const accordionBody = screen.queryByTestId('textAccordion-xpto-1234-0000');

    expect(accordionBody).not.toBeInTheDocument();
    expect(iconPlus).toBeVisible();
  });

  it('should render accordion opened when tittle and accordionOpened are equals', () => {
    renderTheme(
      <Accordion
        id="xpto-1234-0000"
        onClick={fn}
        accordionOpened="xpto-1234-0000"
        title="xpto-1234-0000"
        description={['Description 1', 'Description 2']}
      />,
    );

    const iconMinus = screen.queryByTestId('minus-icon') as HTMLImageElement;
    const accordionBody = screen.queryByTestId('textAccordion-xpto-1234-0000');

    expect(accordionBody).toBeInTheDocument();
    expect(iconMinus).toBeVisible();
  });

  it('should click once time', () => {
    const { getByText } = renderTheme(
      <Accordion
        id="xpto-1234-0000"
        onClick={fn}
        accordionOpened="xpto-1234-0000"
        title="xpto-1234-0000"
        description={['Description 1', 'Description 2']}
      />,
    );

    const accordionHeader = getByText('xpto-1234-0000');
    fireEvent.click(accordionHeader);

    expect(fn).toBeCalledTimes(1);
  });

  it('should render with accordion closed', () => {
    const { container } = renderTheme(
      <Accordion
        id="xpto-1234-0000"
        onClick={fn}
        accordionOpened="xpto-1234-0000"
        title="xpto-12345-0000"
        description={['Description 1', 'Description 2']}
      />,
    );
    expect(container).toMatchSnapshot();
  });
});
