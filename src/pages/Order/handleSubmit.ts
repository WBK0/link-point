import { toast } from "react-toastify";
import { UserDataType } from "../../types/UserDataType";
import { schema } from "./schema";

type HandleSubmitProps = {
  userData: UserDataType,
  setErrors: React.Dispatch<React.SetStateAction<UserDataType | null>>
}

const handleSubmit = async ({userData, setErrors} : HandleSubmitProps) => {
  setErrors(null);
  try {
    await schema.validate(userData, {
      abortEarly: false
    }).then(async () => {
      try {
        const formData = new FormData();
      
        formData.append('fullname', userData.fullname);
        formData.append('zip_code', userData.zipCode);
        formData.append('city', userData.city);
        formData.append('street', userData.street);
        formData.append('phone', userData.phone);
        formData.append('card_owner', userData.cardOwner);
        formData.append('card_number', userData.cardNumber);
        formData.append('card_expiration', `${userData.cardExpirationMonth}${userData.cardExpirationYear}`);
        formData.append('card_cvc', userData.cardCvc); 

        const response = await fetch(`${import.meta.env.VITE_API_URL}/orders`, {
          method: 'POST',
          body: formData,
          headers: {
            "accept": "application/json",
            "Authorization": `Bearer ${sessionStorage.getItem('token')}`
          }
        });

        const json = await response.json();

        if(!response.ok){
          throw new Error(JSON.stringify(json));
        }

        toast.success('Order completed successfully', {
          autoClose: 2000
        });
      } catch (error) {
        toast.error('An error occurred while completing the order');
      }     
    }).catch((err) => {
      const errors = err.inner.reduce((acc: string[], curr: { message: string, path: number }) => {
        acc[curr.path] = curr.message;
        return acc;
      }, {});
      setErrors(errors);
    });

  } catch (error) {
    console.error(error);
  }
}

export default handleSubmit;