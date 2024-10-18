import { useEffect, useState } from "react";
import Button from "./Button";
import Row from "./Row";

export default function MultiSelect(
  props: { elements: string[]; onChange: (values: string[]) => void },
) {
  const [selected, setSelected] = useState<string[]>([]);

  function setElementSelected(element: string) {
    setSelected((old) => {
      if (old.includes(element)) {
        const newElements = [...old];
        newElements.splice(old.indexOf(element), 1);
        return [...newElements];
      }

      return [...old, element];
    });
  }

  useEffect(() => {
    props.onChange([...selected]);
  }, [selected]);

  return (
    <Row>
      {props.elements.map((x) => (
        <Button
          key={x}
          onClick={() => setElementSelected(x)}
          type={selected.includes(x) ? "success" : "normal"}
        >
          {x}
        </Button>
      ))}
    </Row>
  );
}
