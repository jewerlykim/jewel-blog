import { NextRequest, NextResponse } from 'next/server';

export function proxy(request: NextRequest) {
  const host = request.headers.get('host') || '';

  // Allow access only from localhost or 127.0.0.1
  if (!host.includes('localhost') && !host.includes('127.0.0.1')) {
    return NextResponse.rewrite(new URL('/not-found', request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/admin/:path*'],
};
