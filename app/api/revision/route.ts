export const dynamic = 'force-dynamic';

export async function GET() {
  const revision = process.env.GIT_COMMIT_SHA || process.env.COOLIFY_GIT_COMMIT_SHA || process.env.SOURCE_COMMIT || process.env.VERCEL_GIT_COMMIT_SHA || 'unavailable';
  return Response.json(
    { service: 'websitedesignoutsource', revision },
    { headers: { 'Cache-Control': 'no-store', 'X-Robots-Tag': 'noindex, nofollow' } },
  );
}
