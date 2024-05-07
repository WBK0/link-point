type InputProps = {
  type: string,
  name: string,
  placeholder: string,
  error: boolean
}

const Input = ({ type, name, placeholder, error } : InputProps) => {
  return (
    <input
      type={type}
      className={`rounded-xl shadow-xl w-full text-lg px-3 py-1.5 outline-none ring-blue-500 focus:ring-2 placeholder:font-bold font-semibold ${error && 'ring-red-500 ring-2'}`}
      placeholder={placeholder}
      name={name}
    />
  )
}

export default Input;