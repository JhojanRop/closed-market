export default function RegisterForm() {
    return (
        <section className="w-5/6 max-w-xl py-8 px-6 bg-slate-300 rounded-lg flex flex-col gap-2">
            {/* Logo */}
            <form className="w-full flex flex-col gap-3 flex-grow justify-center">
                <div className="flex justify-between gap-3">

                    <label>
                        <span className="">Name</span>
                        <input
                            required
                            type="text"
                            name="name"
                            className="block w-full px-3 py-2 border rounded"
                        />
                    </label>

                    <label>
                        <span className="">Last name</span>
                        <input
                            required
                            type="text"
                            name="lastname"
                            className="block w-full px-3 py-2 border rounded"
                        />
                    </label>

                </div>

                <label>
                    Email
                    <input
                        required
                        type="password"
                        name="password"
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

                <button type="submit" className="block w-fit mx-auto px-6 py-2 text-white font-medium bg-matisse-500 rounded transition-colors duration-300 hover:bg-matisse-600">Register</button>
            </form>
        </section>
    )
}