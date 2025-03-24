import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  // Get the response
  const response = NextResponse.next();

  // Add the headers to allow embedding in iframes
  response.headers.set('X-Frame-Options', 'ALLOW-FROM https://iframely.com');
  response.headers.set('Content-Security-Policy', 'frame-ancestors https://iframely.com https://*.iframely.com https://*.medium.com https://*.facebook.com https://facebook.com https://*.twitter.com https://twitter.com *');
  
  // CORS headers
  response.headers.set('Access-Control-Allow-Origin', '*');
  response.headers.set('Access-Control-Allow-Methods', 'GET, OPTIONS');
  response.headers.set('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  
  // Add Link header for iframely discovery
  response.headers.set('Link', '<https://react-reports-cyiomdvuk-stump-works.vercel.app/embed>; rel="alternate"; type="text/html"');

  return response;
}

// Configure the middleware to run on all routes
export const config = {
  matcher: '/:path*',
};
