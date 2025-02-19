'use client'
import { useState } from 'react';

export default function InputAvatar ({ src, enabled = true }) {
  const [avatar, setAvatar] = useState(src);

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => setAvatar(reader.result);
      reader.readAsDataURL(file);
    }
  };

  return (
    <label className="block">
      <input type="file" className='hidden' onChange={handleFileChange} disabled={!enabled} />
      <img src={avatar || '/images/avatar.png'} alt="avatar" className="w-20 h-20 mx-auto rounded-full" />
    </label>
  )
}