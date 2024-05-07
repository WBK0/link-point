import { UserDataType } from "../../../types/UserDataType";
import CardExpiration from "./CardExpiration";
import Input from "./Input";

type FormProps = {
  onSubmit: (e: React.FormEvent<HTMLFormElement>) => void,
  userData: UserDataType
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void,
  errors: UserDataType | null
}

const Form = ({ onSubmit, userData, handleChange, errors } : FormProps) => {
  return (
    <form
      className="flex flex-wrap items-center gap-4 w-full flex-col"
      onSubmit={onSubmit}
    >
      <Input
        value={userData.fullname}
        handleChange={handleChange}
        name="fullname"
        placeholder="Fullname"
        label="Fullname"
        error={errors?.fullname}
      />
      <Input
        value={userData.zipCode}
        handleChange={handleChange}
        name="zipCode"
        placeholder="Zip code"
        maxLength={6}
        label="Zip code"
        error={errors?.zipCode}
      />
      <Input
        value={userData.city}
        handleChange={handleChange}
        name="city"
        placeholder="City"
        label="City"
        error={errors?.city}
      />
      <Input
        value={userData.street}
        handleChange={handleChange}
        name="street"
        placeholder="Street"
        label="Street"
        error={errors?.street}
      />
      <Input
        value={userData.phone}
        handleChange={handleChange}
        name="phone"
        placeholder="Phone"
        maxLength={15}
        label="Phone"
        error={errors?.phone}
      />
      <Input
        value={userData.cardOwner}
        handleChange={handleChange}
        name="cardOwner"
        placeholder="Card owner"
        label="Card owner"
        error={errors?.cardOwner}
      />
      <Input
        value={userData.cardNumber}
        handleChange={handleChange}
        name="cardNumber"
        placeholder="Card number"
        maxLength={16}
        label="Card number"
        error={errors?.cardNumber}
      />
      <CardExpiration 
        value={userData}
        handleChange={handleChange}
        error={errors}
      />
      <Input
        value={userData.cardCvc}
        handleChange={handleChange}
        name="cardCvc"
        placeholder="Card cvc"
        maxLength={3}
        label="Card cvc"
        error={errors?.cardCvc}
      />
      <button
        type="submit"
        className="bg-blue-500 text-white rounded-full font-bold px-6 py-1 h-min hover:bg-blue-600"
      >
        Order
      </button>
    </form>
  )
}

export default Form;