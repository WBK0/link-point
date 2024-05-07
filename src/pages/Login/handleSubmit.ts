import { Dispatch } from "react";
import { login } from "../../store/userSlice";

type HandleSubmitProps = {
  setLoading: React.Dispatch<React.SetStateAction<boolean>>,
  setPasswordError: React.Dispatch<React.SetStateAction<boolean>>,
  setLoginError: React.Dispatch<React.SetStateAction<boolean>>,
  setError: React.Dispatch<React.SetStateAction<string | null>>,
  dispatch: Dispatch<any>,
  form: React.RefObject<HTMLFormElement>
}

const handleSubmit = async ({ setLoading, setPasswordError, setLoginError, setError, dispatch, form} : HandleSubmitProps) => {
  setLoading(true);
  setPasswordError(false);
  setLoginError(false);
  try {
    if(!form.current){
      setError('An error occurred while logging in.');
      return;
    }
    
    const data = new FormData(form.current);

    const response = await fetch(`${import.meta.env.VITE_API_URL}/auth/login`, {
      method: 'POST',
      body: data,
      headers: {
        "accept": "application/json"
      }
    });

    const json = await response.json();

    if(!response.ok){
      throw new Error(JSON.stringify(json));
    }

    dispatch(login(json.token));

  } catch (error: unknown) {
    if(error instanceof Error){
      const parsedError = JSON.parse(error.message);

      if(parsedError?.errors?.login){
        setLoginError(true);
      }
      if(parsedError?.errors?.password){
        setPasswordError(true);
      }

      setError(parsedError.message || "An error occurred while logging in.");
    }
  } finally {
    setLoading(false);
  }
}

export default handleSubmit