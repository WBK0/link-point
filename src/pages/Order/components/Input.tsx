type InputProps = {
  value: string,
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void,
  maxLength?: number,
  name: string,
  placeholder: string,
  label: string,
  error?: string
}

const Input = ({
  value,
  handleChange,
  maxLength = 255,
  name,
  placeholder,
  label,
  error
} : InputProps) => {
  return (
    <div className="w-full group">
      <label>{label}</label>
      <input
        type="text"
        name={name}
        placeholder={placeholder}
        maxLength={maxLength}
        value={value}
        className={`ring-2 outline-none w-full py-1 px-3 rounded-full text-lg font-semibold focus:ring-blue-500 ${error && 'ring-red-500 ring-2'}`}
        onChange={handleChange}
      />
      {error &&
        <div className="absolute bg-red-500 text-white p-1 text-sm -mt-16 rounded-lg hidden group-hover:block w-fit">
          {error}
        </div>
      }
    </div>
  )
}

export default Input;