import Logo from "./Logo"
import Error from "./Error"
import Button from "./Button"
import Input from "./Input"

type FormProps = {
  handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void,
  form: React.RefObject<HTMLFormElement>,
  error: string,
  loading: boolean
  loginError: boolean,
  passwordError: boolean
}

const Form = ({ handleSubmit, form, error, loading, loginError, passwordError } : FormProps) => {
  return (
    <form
      className="flex flex-col items-center gap-4 max-w-sm w-full"
      onSubmit={handleSubmit}
      ref={form}
    >
      <Logo />
      <Input
        type="text"
        name="login"
        placeholder="Login"
        error={loginError}
      />
      <Input
        type="password"
        name="password"
        placeholder="Password"
        error={passwordError}
      />
      <Error error={error} />
      <Button loading={loading} />
    </form>
  )
}

export default Form;