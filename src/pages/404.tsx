import { useEffect } from "react";
import { addAlert } from "../dawn-ui/components/AlertManager";

export default function Page404() {
  useEffect(() => {
    addAlert({
      title: "Oops - 404",
      body: <label>It looks like the page you wanted doesn't exist!</label>,
      buttons: [
        {
          id: "ok",
          text: "Oki Doki! Take me home!",
          click: () => (window.location.href = "/"),
        },
      ],
    });
  }, []);

  return <></>;
}
