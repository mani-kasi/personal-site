function Footer() {
  return (
    <footer data-tone="dark" className="bg-ink text-paper">
      <div className="mx-auto flex w-full max-w-[1200px] items-baseline justify-between gap-6 px-5 py-5 text-sm sm:px-8 lg:px-12">
        <p>© 2026 Mani Kasi</p>
        <a href="#top" className="hover:underline hover:underline-offset-4">
          Back to top <span aria-hidden="true">↑</span>
        </a>
      </div>
    </footer>
  )
}

export default Footer
