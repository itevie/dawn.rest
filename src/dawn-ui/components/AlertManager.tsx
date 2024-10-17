import { ReactNode, useEffect, useState } from "react";
import Button, { ButtonType } from "./Button";
import Panel from "./Panel";
import Row from "./Row";

interface Model {
  icon?: string;
  title: string;
  body: ReactNode;
  buttons: ModelButton[];
}

interface ModelButton {
  id: string;
  text: string;
  type?: ButtonType;
  click: (close: () => void) => void;
}

export let modelStack: Model[] = [];
export let addModel: (data: Model) => void = () => {};

export default function AlertManager() {
  const [current, setCurrent] = useState<Model | null>(null);

  useEffect(() => {
    addModel = (model) => {
      modelStack.push(model);
      reload();
    };
  }, []);

  function reload() {
    setCurrent(modelStack[modelStack.length - 1]);
  }

  function close() {
    modelStack.pop();
    reload();
  }

  return (
    current && (
      <div className="dawn-fullscreen">
        <div className="dawn-page-center">
          <div className="dawn-alert">
            <label className="dawn-alert-title">{current.title}</label>
            <div className="dawn-alert-content">{current.body}</div>
            <Row>
              {current.buttons.map((button) => (
                <Button
                  big
                  onClick={() => button.click(() => close())}
                >
                  {button.text}
                </Button>
              ))}
            </Row>
          </div>
        </div>
      </div>
    )
  );
}

export function showErrorAlert(message: string) {
  addModel({
    title: "Error!",
    body: <label>{message}</label>,
    buttons: [
      {
        id: "ok",
        text: "OK!",
        click: (close) => close(),
      },
    ],
  });
}

export function showInformation(message: string) {
  return new Promise<void>((resolve) => {
    addModel({
      title: "Information",
      body: <label>{message}</label>,
      buttons: [
        {
          id: "ok",
          text: "OK!",
          click: (close) => {
            close();
            resolve();
          },
        },
      ],
    });
  });
}
