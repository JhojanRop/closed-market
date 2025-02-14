export default function InputText ({ label, type = "text", value, ...props }) {
  return (
    <div>
      <label htmlFor={`${label.toLowerCase()}-input`}>{label}</label>
      <input
        type={type}
        value={value}
        id={`${label.toLowerCase()}-input`}
        {...props}
        className="block w-full px-4 py-3 text-base border rounded-lg"
      />
    </div>
  )
}