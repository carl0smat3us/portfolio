export default function Footer() {
  const actualYear = new Date().getFullYear()
  return (
    <footer className="w-full mt-28 flex items-center justify-between py-6">
      © {actualYear} by Carlos Mateus.
    </footer>
  )
}
