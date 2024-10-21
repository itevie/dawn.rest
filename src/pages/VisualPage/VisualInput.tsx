import { VisualOption } from "./visuals/Visualisation";
import ArrayInput from "../../dawn-ui/components/ArrayInput";
import Row from "../../dawn-ui/components/Row";

function getProps(option: VisualOption): { [key: string]: any } {
  if (option.type === "number") {
    return {
      type: "range",
      min: option.rangeMin,
      max: option.rangeMax,
      step: option.rangeMin || 1,
    };
  } else if (option.type === "boolean") {
    return {
      type: "checkbox",
      value: option.default ? "on" : "off",
    };
  } else if (option.type === "array") {
    return getProps(option.inner);
  } else if (option.type === "color") {
    return {
      type: "color",
      value: option.default,
    };
  }

  return {};
}

export default function VisualInput(
  { name, option, current, set }: {
    name: string;
    option: VisualOption;
    current: {
      [key: string]: any;
    };
    set: (
      option: VisualOption,
      key: string,
      event: React.ChangeEvent<HTMLInputElement>,
    ) => void;
  },
) {
  const props = getProps(option);

  return (
    <>
      {{
        "number": (
          <Row>
            <input
              {...props}
              value={current[name] ?? option.default}
              onChange={(i) => set(option, name, i)}
            />
            <label style={{ width: "40px" }}>{current[name] ?? option.default}</label>
          </Row>
        ),
        "color": (
          <input
            {...props}
            value={current[name] ?? option.default}
            onChange={(i) => set(option, name, i)}
          />
        ),
        "boolean": (
          <input
            {...props}
            checked={current[name] ?? option.default}
            onChange={(i) => set(option, name, i)}
          />
        ),
        "string": (
          <input {...props} value={current[name] ?? option.default} onChange={(i) => set(option, name, i)} />
        ),
        "array": (
          <ArrayInput
            currentValues={current[name] ?? option.default}
            input={props}
            onChange={(value) => set(option, name, value as any)}
          />
        ),
      }[option.type]}
    </>
  );
}
