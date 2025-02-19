'use client'
import { FaFacebook } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc"
import Button from "@/components/Button";
import InputText from "@/components/InputText";
import Link from "next/link";
import LogoIconButton from "@/components/LogoIconButton";
import Message from "@/components/Message";
import useLogin from "@/hooks/useLogin";

export default function LoginPage () {
  const { username, password, message, handleInputChanges, handleSubmit, clearMessage } = useLogin();

  return (
    <div className="bg-gradient-to-tr from-primary-300 to-white">
      <main className="container px-5 mx-auto w-full h-screen flex flex-col justify-center">
        <header className="py-5">
          <Link href="/" className="text-lg font-medium">Closed Market</Link>
        </header>

        <section className="w-full max-w-md mx-auto space-y-5 flex flex-grow flex-col justify-center">
          <h2 className="text-center text-xl">Please enter your account details</h2>
          {message.text && <Message message={message.text} type={message.type} clearMessage={clearMessage} />}
          <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
            <InputText label="Username" name="username" type="text" value={username} onChange={handleInputChanges} />
            <InputText label="Password" name="password" type="password" value={password} onChange={handleInputChanges} />
            <Link href="/forgot-password" className="text-right text-sm font-light underline">Forgot password</Link>
            <Button type="submit">Sign in</Button>
          </form>

          <footer className="flex justify-center gap-4">
            <LogoIconButton icon={<FcGoogle />} />
            <LogoIconButton icon={<FaFacebook color="#0571E6" />} />
          </footer>

          <Link href="/register" className="inline-block w-full py-5 text-center text-sm font-light underline">Create an account</Link>
        </section>
      </main>
    </div>
  )
}