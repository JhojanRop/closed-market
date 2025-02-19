import Link from 'next/link';
import Button from '@/components/Button';
import InputText from '@/components/InputText';
import InputAvatar from '@/components/InputAvatar';

export default function RegisterPage () {
  return (
    <div className="bg-gradient-to-tr from-primary-300 to-white">
      <main className="container px-5 mx-auto w-full h-screen flex flex-col justify-center">
        <header className="py-5">
          <Link href="/" className="text-lg font-medium">Closed Market</Link>
        </header>

        <section className="w-full max-w-md mx-auto space-y-5 flex flex-grow flex-col justify-center">
          <h2 className="text-center text-xl">Please enter your account details</h2>
          <form className="flex flex-col gap-5">
            <InputAvatar />

            <InputText label="First Name" type="text" />
            <InputText label="Last Name" type="text" />
            <InputText label="Username" type="text" />
            <InputText label="Email" type="email" />
            <InputText label="Password" type="password" />
            <div className='mt-5'><Button className="" type="submit">Sign up</Button></div>
          </form>

        </section>
      </main>
    </div>
  )
}