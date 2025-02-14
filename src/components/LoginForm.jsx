import Link from "next/link";

export default function LoginForm () {
  return (
    <section className="w-5/6 max-w-xl py-8 px-6 bg-slate-300 rounded-lg flex flex-col gap-2">
      {/* Logo */}
      <form className="w-full flex flex-col gap-3 flex-grow justify-center">
        <label>
          <span className="">Email</span>
          <input
            required
            type="email"
            name="email"
            // placeholder="johnDoe@email.com"
            className="block w-full px-3 py-2 border rounded"
          />
        </label>

        <label>
          Password
          <input
            required
            type="password"
            name="password"
            // placeholder="***********"
            className="block w-full px-3 py-2 border rounded"
          />
        </label>

        <button type="submit" className="block w-fit mx-auto px-6 py-2 text-white font-medium bg-matisse-500 rounded transition-colors duration-300 hover:bg-matisse-600">Login</button>
      </form>

      <span className="block text-center text-gray-500">
        Need an account?
        <Link href="/register" className="text-matisse-700 font-medium"> Register now</Link>
      </span>
    </section>
  )
}