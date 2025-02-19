import { useState } from "react";

export default function useLogin () {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState({ text: '', type: '' });

  const handleInputChanges = (e) => {
    const { name, value } = e.target;
    if (name === 'username') setUsername(value);
    if (name === 'password') setPassword(value);
  }

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      if (!username || !password) return setMessage({ text: "Please fill in all fields", type: "error" });

      const response = await fetch("/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, password })
      });

      const data = await response.json();
      if (response.ok) {
        setMessage({ text: data.message, type: "success" });
      } else {
        setMessage({ text: data.message, type: "error" });
      }
    } catch (error) {
      setMessage({ text: "Internal server error", type: "error" });
    }
  }

  return { username, password, message, handleInputChanges, handleSubmit };
}