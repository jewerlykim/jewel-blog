import Link from 'next/link';

export default function NotFound() {
  return (
    <main className="min-h-screen bg-background flex items-center justify-center px-6">
      <div className="text-center">
        <p className="text-[#666] text-sm uppercase tracking-widest mb-6">
          Error
        </p>
        <h1 className="font-serif text-7xl sm:text-9xl font-normal text-white mb-8">
          404
        </h1>
        <p className="text-[#666] text-lg mb-12">
          This page could not be found.
        </p>
        <Link
          href="/"
          className="rounded-full border border-[#333] px-8 py-2.5 text-sm text-[#666] hover:text-white hover:border-[#666] transition-colors duration-200"
        >
          Back to home
        </Link>
      </div>
    </main>
  );
}
