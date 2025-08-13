import { useState, ChangeEvent, FormEvent } from 'react';
import { motion } from 'framer-motion';

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
        <motion.h2
          className="text-4xl font-bold text-center mb-8"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Register for TEDxVJIT
        </motion.h2>

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
          <motion.button
            type="submit"
            className="w-full py-3 bg-red-600 hover:bg-red-700 rounded-md font-semibold text-white transition"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Submit
          </motion.button>
        </form>
      </div>
    </section>
  );
}
