import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { updateIsLoggedIn } from "../store/userSlice";
import { useEffect } from "react";
import Navbar from "./Navbar";

const Wrapper = ({ children } : { children: React.ReactNode}) => {
  const dispatch = useDispatch();

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

      dispatch(updateIsLoggedIn());
    } catch (error) {
      navigate('/login');
    }
  }

  useEffect(() => {
    getUser();
  }, [])

  return (
    <div className="pt-16">
      <Navbar />
      {children}
    </div>
  )
}
export default Wrapper