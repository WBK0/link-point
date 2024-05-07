import { UserDataType } from "../../../types/UserDataType";

type CardExpirationProps = {
  value: UserDataType
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void
  error?: UserDataType | null
}

const CardExpiration = ({ value, handleChange, error } : CardExpirationProps) => {

  console.log(error)
  return (
    <div>
      <label>Expiration Date</label>
      <div className="flex items-center gap-2">
        <div className="group">
          <input
            type="text"
            name="cardExpirationMonth"
            placeholder="MM"
            maxLength={2}
            value={value.cardExpirationMonth}
            className={`ring-2 outline-none w-full py-1 px-3 rounded-full text-lg font-semibold focus:ring-blue-500 ${error && 'ring-red-500 ring-2'}`}
            onChange={handleChange}
          />
          {
            error?.cardExpirationMonth &&
            <div className="absolute bg-red-500 text-white p-1 text-sm -mt-16 rounded-lg hidden group-hover:block w-fit">
              {error.cardExpirationMonth}
            </div>
          }
        </div>
        <span className="font-bold">/</span>
        <div className="group">    
          <input
            type="text"
            name="cardExpirationYear"
            placeholder="YY"
            maxLength={2}
            value={value.cardExpirationYear}
            className={`ring-2 outline-none w-full py-1 px-3 rounded-full text-lg font-semibold focus:ring-blue-500 ${error && 'ring-red-500 ring-2'}`}
            onChange={handleChange}
          />
          {
            error?.cardExpirationYear &&
            <div className="absolute bg-red-500 text-white p-1 text-sm -mt-16 rounded-lg hidden group-hover:block w-fit">
              {error.cardExpirationYear}
            </div>
          }
        </div>
      </div>
    </div>
  )
}
export default CardExpiration