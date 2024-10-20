import axios, { AxiosRequestConfig, AxiosResponse } from "axios";
import { showErrorAlert, showLoadingAlert } from "./components/AlertManager";

export function axiosWrapper<T extends "get" | "post" | "patch">(
  method: T,
  ...args: Parameters<typeof axios[T]>
): Promise<AxiosResponse> {
  return new Promise<AxiosResponse>((resolve, reject) => {
    const loader = showLoadingAlert();

    const data: AxiosRequestConfig = {
      ...(args[2] || {}),
      onUploadProgress: (ev) => loader.progress(ev.progress || 0),
    };
    args[2] = data;

    // @ts-ignore
    axios[method](...args).then((r) => {
      if (r.status !== 200) {
        showErrorAlert(
          `Request failed: ${r.status}: ${r.data?.message ?? "No Message"}`,
        );
        reject();
      } else resolve(r);
    }).catch((r) => {
      showErrorAlert(
        `Request failed: ${r.status}: ${r.data?.message ?? "No Message"}`,
      );
      reject();
    }).finally(() => {
      loader.stop();
    });
  });
}
