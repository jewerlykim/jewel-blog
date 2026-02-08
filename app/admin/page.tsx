import Link from 'next/link';

export default function AdminPage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen px-4 py-8">
      <div className="max-w-md w-full text-center">
        <h1 className="text-3xl font-bold mb-4">관리자 페이지</h1>
        <p className="text-text-secondary mb-6">
          글 작성 및 관리는 Keystatic CMS로 이동되었습니다.
        </p>
        <Link
          href="/keystatic"
          className="inline-block px-6 py-3 bg-accent text-white rounded-lg font-semibold hover:bg-accent-hover transition-colors"
        >
          Keystatic으로 이동
        </Link>
      </div>
    </div>
  );
}
