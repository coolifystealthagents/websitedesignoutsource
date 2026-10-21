import { NextRequest, NextResponse } from 'next/server';

const canonicalHost = 'websitedesignoutsource.com';

export function proxy(request: NextRequest) {
  const host = (request.headers.get('host') || '').split(':')[0].toLowerCase();
  const forwardedProtocol = (request.headers.get('x-forwarded-proto') || request.nextUrl.protocol.replace(':', '')).split(',')[0].trim();
  if ((host === canonicalHost || host === `www.${canonicalHost}`) && (host !== canonicalHost || forwardedProtocol !== 'https')) {
    const destination = request.nextUrl.clone();
    destination.protocol = 'https:';
    destination.host = canonicalHost;
    destination.port = '';
    return NextResponse.redirect(destination, 308);
  }
  return NextResponse.next();
}

export const config = {
  matcher: ['/((?!_next/static|_next/image).*)'],
};
