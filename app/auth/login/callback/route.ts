import { NextRequest } from 'next/server';
import { handleOAuthCallback } from '@/src/features/auth/api/callback/route';

export async function GET(request: NextRequest) {
  return handleOAuthCallback(request);
}
