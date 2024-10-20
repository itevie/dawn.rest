import axios, { AxiosRequestConfig, AxiosResponse } from "axios";
import { showErrorAlert, showLoadingAlert } from "./components/AlertManager";

export function axiosPostWrapper(
  ...args: Parameters<typeof axios.post>
): Promise<AxiosResponse> {
  return new Promise<AxiosResponse>((resolve, _) => {
    const loader = showLoadingAlert();

    const data: AxiosRequestConfig = {
      ...(args[2] || {}),
      onUploadProgress: (ev) => loader.progress(ev.progress || 0),
    };
    args[2] = data;

    axios.post(...args).then((r) => {
      if (r.status !== 200) {
        return showErrorAlert(
          `Request failed: ${r.status}: ${r.data?.message ?? "No Message"}`,
        );
      }

      resolve(r);
    }).catch((r) => {
      return showErrorAlert(
        `Request failed: ${r.status}: ${r.data?.message ?? "No Message"}`,
      );
    }).finally(() => {
      loader.stop();
    });
  });
}
