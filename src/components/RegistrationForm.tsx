'use client'
import { useState, ChangeEvent, FormEvent } from 'react';

interface FormData {
  name: string;
  email: string;
  college: string;
}

export default function RegistrationForm() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    college: '',
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    console.log(formData);
    alert("Registered successfully!");
  };

  return (
    <section id="register" className="bg-gradient-to-br from-red-700 to-black text-white py-20 px-6 md:px-12">
      <div className="max-w-xl mx-auto bg-white/10 backdrop-blur-md p-8 rounded-lg shadow-xl">
        <h2 className="text-4xl font-bold text-center mb-8 animate-fade-in">
          Register for TEDxVJIT
        </h2>

        <form className="space-y-6" onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Full Name"
            required
            className="w-full px-5 py-3 rounded-md border border-white/30 bg-black/40 text-white focus:outline-none focus:ring-2 focus:ring-red-500"
            onChange={handleChange}
          />
          <input
            type="email"
            name="email"
            placeholder="Email Address"
            required
            className="w-full px-5 py-3 rounded-md border border-white/30 bg-black/40 text-white focus:outline-none focus:ring-2 focus:ring-red-500"
            onChange={handleChange}
          />
          <input
            type="text"
            name="college"
            placeholder="College Name"
            required
            className="w-full px-5 py-3 rounded-md border border-white/30 bg-black/40 text-white focus:outline-none focus:ring-2 focus:ring-red-500"
            onChange={handleChange}
          />
          <button
            type="submit"
            className="w-full py-3 bg-red-600 hover:bg-red-700 rounded-md font-semibold text-white transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-red-500/25"
          >
            Submit
          </button>
        </form>
      </div>
    </section>
  );
}
