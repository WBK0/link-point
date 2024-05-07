type ErrorProps = {
  error: string
}

const Error = ({ error } : ErrorProps) => {
  return (
    <>
      {
        error && 
        <p className="text-red-500 font-bold">
          {error}
        </p>
      }
    </>
  )
}

export default Error;