import { useRef } from "react";
import DawnPage from "../../components/DawnPage";
import Button from "../../dawn-ui/components/Button";
import Container from "../../dawn-ui/components/Container";
import { axiosWrapper } from "../../dawn-ui/util";
import { showInfoAlert } from "../../dawn-ui/components/AlertManager";

export default function Login() {
  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);

  async function startLogin() {
    const email = emailRef.current?.value;
    const password = passwordRef.current?.value;
    if (!email || !password) return;

    try {
      await axiosWrapper(
        "post",
        "http://localhost:3000/api/login",
        {
          email,
          password,
        },
        {
          withCredentials: true,
        }
      );
      showInfoAlert("Succesfully logged in!");
      setTimeout(() => {
        let cb = new URLSearchParams(window.location.search).get("cb");
        if (cb) window.location.href = cb;
        else window.location.href = "/";
      }, 1000);
    } catch {}
  }

  return (
    <DawnPage>
      <Container title="Login to dawn.rest">
        <label>
          Login to your dawn.rest account.
          <br />
          Note: This feature is just a concept, it isn't meant to be taken
          seriously.
        </label>
        <table>
          <tbody>
            <tr>
              <td>Email</td>
              <td>
                <input ref={emailRef} />
              </td>
            </tr>
            <tr>
              <td>Password</td>
              <td>
                <input ref={passwordRef} type="password" />
              </td>
            </tr>
          </tbody>
        </table>
        <Button big onClick={startLogin}>
          Login
        </Button>
      </Container>
    </DawnPage>
  );
}
