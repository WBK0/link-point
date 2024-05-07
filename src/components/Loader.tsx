const Loader = () => {
  return (
    <div
      className={`inline-block h-12 w-12 animate-spin rounded-full border-8 border-solid border-black border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]`}
      role="status">
    </div>
  )
}

export default Loader;