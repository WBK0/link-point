import { useEffect, useRef, useState } from "react";
import { useDispatch } from "react-redux";
import Form from "./components/Form";
import handleSubmit from "./handleSubmit";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [loginError, setLoginError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);
  const form = useRef<HTMLFormElement | null>(null);
  const dispatch = useDispatch();

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    handleSubmit({
      setLoading,
      setPasswordError,
      setLoginError,
      setError,
      dispatch,
      form
    });
  }

  const navigate = useNavigate();

  const getUser = async () => {
    try {
      const response = await fetch(`${import.meta.env.VITE_API_URL}/user`, {
        headers: {
          "accept": "application/json",
          "Authorization": `Bearer ${sessionStorage.getItem('token')}`
      }
      });
      const json = await response.json();

      if(!response.ok){
        throw new Error(JSON.stringify(json));
      }

      navigate('/');
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    getUser();
  }, [])

  return (
    <div className="flex justify-center items-center h-screen bg-zinc-100">
      <Form
        handleSubmit={onSubmit}
        form={form}
        error={error || ""}
        loading={loading}
        loginError={loginError}
        passwordError={passwordError}
      />
    </div>
  )
}

export default Login;