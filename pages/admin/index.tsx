// pages/admin/local-create-post.tsx
import { useState } from 'react';
import { useRouter } from 'next/router';
import { GetServerSideProps } from 'next';
import ReactMarkdown from 'react-markdown';

export const getServerSideProps: GetServerSideProps = async ({ req }) => {
  const host = req.headers.host || '';

  // 로컬(예: localhost 또는 127.0.0.1)에서만 접근 가능하도록 제한
  if (!host.includes('localhost') && !host.includes('127.0.0.1')) {
    return { notFound: true };
  }

  return { props: {} };
};

export default function LocalCreatePost() {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [image, setImage] = useState('');
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    const response = await fetch('/api/create-post-local', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ title, content, image }),
    });

    const result = await response.json();
    setLoading(false);

    if (!response.ok) {
      alert(result.error || '오류가 발생했습니다.');
    } else {
      alert('포스트가 성공적으로 생성되었습니다.');
      // 입력값 초기화
      setTitle('');
      setContent('');
      setImage('');
    }
  };

  return (
    <div style={{ padding: '1rem' }}>
      <h1>글 작성 (Localhost 전용)</h1>
      <form onSubmit={handleSubmit}>
        {/* 제목 입력 */}
        <div style={{ marginBottom: '1rem' }}>
          <label htmlFor="title">제목</label>
          <br />
          <input
            id="title"
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
            style={{
              width: '100%',
              padding: '0.5rem',
              border: '1px solid #ccc',
              borderRadius: '4px',
            }}
          />
        </div>
        {/* 내용 입력 (Markdown 지원) */}
        <div style={{ marginBottom: '1rem' }}>
          <label htmlFor="content">내용 (Markdown 지원)</label>
          <br />
          <textarea
            id="content"
            value={content}
            onChange={(e) => setContent(e.target.value)}
            required
            rows={8}
            style={{
              width: '100%',
              padding: '0.5rem',
              border: '1px solid #ccc',
              borderRadius: '4px',
            }}
          />
        </div>
        {/* 이미지 URL 입력 */}
        <div style={{ marginBottom: '1rem' }}>
          <label htmlFor="image">이미지 URL</label>
          <br />
          <input
            id="image"
            type="text"
            value={image}
            onChange={(e) => setImage(e.target.value)}
            required
            style={{
              width: '100%',
              padding: '0.5rem',
              border: '1px solid #ccc',
              borderRadius: '4px',
            }}
          />
        </div>
        <button
          type="submit"
          disabled={loading}
          style={{
            padding: '0.5rem 1rem',
            border: 'none',
            borderRadius: '4px',
            backgroundColor: '#0070f3',
            color: '#fff',
            cursor: 'pointer',
          }}
        >
          {loading ? '처리 중...' : '포스트 작성'}
        </button>
      </form>

      {/* 미리보기 영역 */}
      <div style={{ marginTop: '2rem' }}>
        <h2>미리보기</h2>
        {image && (
          <div style={{ marginBottom: '1rem' }}>
            <h3>이미지 미리보기</h3>
            <img
              src={image}
              alt="이미지 미리보기"
              style={{
                maxWidth: '100%',
                height: 'auto',
                border: '1px solid #ccc',
                padding: '4px',
              }}
            />
          </div>
        )}
        <div>
          <h3>Markdown 미리보기</h3>
          <div
            style={{
              border: '1px solid #ccc',
              padding: '1rem',
              borderRadius: '4px',
              backgroundColor: '#f9f9f9',
            }}
          >
            <ReactMarkdown>
              {content || '내용 미리보기가 여기에 표시됩니다.'}
            </ReactMarkdown>
          </div>
        </div>
      </div>
    </div>
  );
}
