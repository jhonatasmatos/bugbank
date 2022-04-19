import { Container, AccordionHeader, AccordionBody } from './styles';

import { FiMinus, FiPlus } from 'react-icons/fi';

export type AccordionProps = {
  id: string;
  onClick: (arg: string) => void;
  accordionOpened: string;
  title: string;
  description: string[];
};

export const Accordion = ({
  id,
  onClick,
  accordionOpened,
  title,
  description,
}: AccordionProps) => {
  const isOpened = title === accordionOpened;

  return (
    <Container>
      <AccordionHeader
        id={`accordion-${id}`}
        isOpened={isOpened}
        onClick={() => onClick(id)}
      >
        {title}
        {isOpened ? (
          <FiMinus data-testid="minus-icon" size={26} />
        ) : (
          <FiPlus data-testid="plus-icon" size={26} />
        )}
      </AccordionHeader>

      {isOpened && (
        <AccordionBody
          data-testid={`textAccordion-${id}`}
          id={`textAccordion-${id}`}
        >
          {description.map((desc) => desc)}
        </AccordionBody>
      )}
    </Container>
  );
};
