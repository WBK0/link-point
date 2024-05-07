import { useState } from "react"
import handleSubmit from "./handleSubmit"
import Form from "./components/Form"
import { UserDataType } from "../../types/UserDataType"
import Wrapper from "../../components/Wrapper"

const Order = () => {
  const [userData, setUserData] = useState<UserDataType>({
    fullname: '',
    zipCode: '',
    city: '',
    street: '',
    phone: '',
    cardOwner: '',
    cardNumber: '',
    cardExpirationMonth: '',
    cardExpirationYear: '',
    cardCvc: ''
  })
  const [errors, setErrors] = useState<UserDataType | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUserData({
      ...userData,
      [e.target.name]: e.target.value
    })
  }

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    handleSubmit({userData, setErrors});
  }

  return (
    <Wrapper>
      <div className="max-w-md mx-auto">
        <h1>Complete your order</h1>
        <div>
          <Form 
            onSubmit={onSubmit}
            userData={userData}
            handleChange={handleChange}
            errors={errors}
          />
        </div>
      </div>
    </Wrapper>
  )
}

export default Order;