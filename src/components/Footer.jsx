// components/Footer.tsx
export default function Footer() {
  return (
    <footer className="bg-black text-white py-6 mt-auto text-center border-t border-neutral-800">
      <p className="text-sm">© {new Date().getFullYear()} TEDxVJIT. All rights reserved.</p>
    </footer>
  )
}
