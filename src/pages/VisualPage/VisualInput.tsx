import { NumberVisualOption, VisualOption } from "./visuals/Visualisation";

export default function VisualInput(
    { name, option, current, set }: {
        name: string,
        option: VisualOption,
        current: {
            [key: string]: any
        },
        set: (option: VisualOption, key: string, event: React.ChangeEvent<HTMLInputElement>) => void,
    }
) {
    return (
        <>
            {
                {
                    "number": <>
                        <input
                            type="range"
                            min={(option as NumberVisualOption).rangeMin}
                            max={(option as NumberVisualOption).rangeMax}
                            step={(option as NumberVisualOption).rangeMin || 1}
                            value={current[name] ?? option.default}
                            onChange={i => set(option, name, i)} />
                        <label>{current[name] ?? ""}</label>
                    </>,
                    "boolean": <input
                        type="checkbox"
                        checked={current[name] ?? option.default}
                        onChange={i => set(option, name, i)} />
                }[option.type]
            }
        </>
    );
}