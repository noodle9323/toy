import { NextRequest, NextResponse } from 'next/server';
import { createServerSideClient } from '@/src/shared/api/supabase';

export async function GET(request: NextRequest) {
  const overrideOrigin = process.env.NEXT_PUBLIC_AUTH_REDIRECT_TO_HOME;
  const { searchParams } = new URL(request.url);

  const code = searchParams.get('code');
  const next = searchParams.get('next');

  if (code) {
    const supabase = await createServerSideClient();
    const { error } = await supabase.auth.exchangeCodeForSession(code);
    if (error) return NextResponse.redirect(`${overrideOrigin}`);

    return NextResponse.redirect(`${overrideOrigin}${next}`);
  }
  return NextResponse.redirect(`${overrideOrigin}`);
}

/**
 * 콜백 라우트는 OAuth 인증 흐름에서 중요한 부분이다.
 *
 * 1. 인증 흐름의 완성
 * 2. 보안 토큰 교환
 * 3. 사용자 경험 관리
 */
