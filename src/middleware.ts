import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  // Get the response
  const response = NextResponse.next();

  // Add the headers to allow embedding in iframes from any domain
  response.headers.set('X-Frame-Options', 'ALLOWALL');
  response.headers.set('Content-Security-Policy', 'frame-ancestors *');
  response.headers.set('Access-Control-Allow-Origin', '*');

  return response;
}

// Configure the middleware to run on all routes
export const config = {
  matcher: '/:path*',
};
