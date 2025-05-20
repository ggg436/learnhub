import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  // Public routes
  const publicRoutes = ['/', '/sign-in', '/sign-up'];
  const path = request.nextUrl.pathname;
  
  // Check if the current path is public
  const isPublicRoute = publicRoutes.some(route => 
    path === route || path.startsWith(`${route}/`)
  );
  
  // Check if user is authenticated
  const isAuthenticated = request.cookies.has('__clerk_session');
  
  // If the route is not public and the user is not authenticated,
  // redirect to the sign-in page
  if (!isPublicRoute && !isAuthenticated) {
    return NextResponse.redirect(new URL('/sign-in', request.url));
  }
  
  return NextResponse.next();
}

export const config = {
  matcher: [
    '/((?!_next/static|_next/image|favicon.ico).*)',
  ],
}; 