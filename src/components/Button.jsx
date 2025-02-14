export default function Button ({ variant = 'default', children, ...props }) {
  const variants = {
    default: "bg-primary-500 text-white border-primary-500",
  }

  return (
    <button
      {...props}
      className={`block w-full px-4 py-3 text-base border font-medium rounded-lg ${variants[variant]} hover:bg-primary-600 hover:border-primary-600 active:bg-primary-700 active:border-primary-700 disabled:bg-primary-100 disabled:text-primary-400`}
    >
      {children}
    </button>
  )
}