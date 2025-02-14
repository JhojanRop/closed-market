export default function LogoIconButton ({ icon, ...props }) {
  return (
    <button className="w-12 h-12 bg-white shadow-sm rounded-full flex justify-center text-3xl items-center" {...props}>{icon}</button>
  )
}