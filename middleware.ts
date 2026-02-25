import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(req: NextRequest) {
  const path = req.nextUrl.pathname;
  const isOrgDashboard = /^\/[a-z0-9-]+\/(projects|tasks|boq)/.test(path);

  if (isOrgDashboard && !req.cookies.get('eq_session')) {
    const loginUrl = new URL('/login', req.url);
    return NextResponse.redirect(loginUrl);
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/:orgSlug/projects', '/:orgSlug/tasks', '/:orgSlug/boq']
};
