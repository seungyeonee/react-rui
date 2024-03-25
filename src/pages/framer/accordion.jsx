import { Container } from "../../components";
import {
  Accordion,
  AccordionItem,
  AccordionHeader,
  AccordionPanel,
} from "../../components/framer-motion/Accordion";

const AccordionPage = () => {
  return (
    <Container>
      <Accordion>
        {[...Array(2)].map((_, i) => (
          <AccordionItem key={i}>
            <AccordionHeader>Accordion</AccordionHeader>
            <AccordionPanel>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos quod
              explicabo, nam sapiente id nostrum ex, ab numquam, doloremque
              aspernatur quisquam illo! Officiis explicabo laborum incidunt
              corrupti provident esse eligendi.
            </AccordionPanel>
          </AccordionItem>
        ))}
      </Accordion>

      <Accordion multiple>
        {[...Array(2)].map((_, i) => (
          <AccordionItem key={i}>
            <AccordionHeader>Accordion</AccordionHeader>
            <AccordionPanel>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos quod
              explicabo, nam sapiente id nostrum ex, ab numquam, doloremque
              aspernatur quisquam illo! Officiis explicabo laborum incidunt
              corrupti provident esse eligendi.
            </AccordionPanel>
          </AccordionItem>
        ))}
      </Accordion>
    </Container>
  );
};

export default AccordionPage;
