import { ReactNode, useEffect, useState } from "react";
import Button, { ButtonType } from "./Button";
import Row from "./Row";
import Loader from "react-spinners/PulseLoader";

interface Model {
  id?: string;
  icon?: string;
  title?: string;
  body: ReactNode;
  buttons?: ModelButton[];
}

interface ModelButton {
  id: string;
  text: string;
  type?: ButtonType;
  click: (close: () => void) => void;
}

export let modelStack: Model[] = [];
export let addModel: (data: Model) => void = () => {};
export let closeModel: (id?: string) => void = () => {};
export let updateModal: (id: string, newElement: ReactNode) => void = () => {};

export default function AlertManager() {
  const [current, setCurrent] = useState<Model | null>(null);

  useEffect(() => {
    addModel = (model) => {
      modelStack.push(model);
      reload();
    };

    closeModel = (id) => {
      if (id) {
        const index = modelStack.findIndex((x) => x.id === id);
        if (index < 0) return;
        modelStack.splice(index, 1);
        reload();
      } else {
        modelStack.pop();
        reload();
      }
    };

    updateModal = (id, el) => {
      const index = modelStack.findIndex((x) => x.id === id);
      if (index < 0) return;
      modelStack[index] = {
        ...modelStack[index],
        body: el,
      };
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
            {current.title && (
              <label className="dawn-alert-title">{current.title}</label>
            )}
            <div className="dawn-alert-content">{current.body}</div>
            <Row>
              {current.buttons?.map((button) => (
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

export function showLoadingAlert(): {
  stop: () => void;
  progress: (amount: number) => void;
} {
  const id = Math.random().toString();

  addModel({
    id,
    body: <Loader color="white" />,
  });

  return {
    stop: () => closeModel(id),
    progress: (amount) => {
      console.log(amount);
      updateModal(
        id,
        <div>
          <Loader color="white" />
          <label>{(amount * 100).toFixed(2)}%</label>
        </div>,
      );
    },
  };
}
