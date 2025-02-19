import { FaXmark } from "react-icons/fa6";

export default function Message ({ message, clearMessage, type }) {
  const colors = {
    success: "bg-green-200 border-green-500 text-green-700",
    error: "bg-red-200 border-red-500 text-red-700",
    warning: "bg-yellow-200 border-yellow-500 text-yellow-700",
    info: "bg-blue-200 border-blue-500 text-blue-700"
  }

  return (
    <div className={`p-4 ${colors[type]} border-l-4 flex justify-between items-center`} role="alert">
      <p>{message}</p>
      <button onClick={clearMessage}><FaXmark /></button>
    </div>
  )
}