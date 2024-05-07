type ButtonProps = {
  loading: boolean
}

const Button = ({ loading } : ButtonProps) => {
  return (
    <button
      type="submit"
      className="w-full rounded-xl bg-blue-500 text-white py-1.5 text-lg hover:bg-blue-600 duration-150"
      disabled={loading}
    >
      {
        !loading 
        ? 'Zaloguj się' 
        : <div
            className={`inline-block h-4 w-4 animate-spin rounded-full border-4 border-solid border-white border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]`}
            role="status">
          </div>
      }
    </button>
  )
}

export default Button;