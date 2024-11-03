export const PATHS = {
  ROOT: '/',
  LOGIN: '/login',
  SIGN_UP: '/sign-up',
  ARTICLES: '/articles',
  SEARCH: '/search',
  SETTINGS: '/settings',
  ARTICLE_DETAIL: (articleId: number) => `${PATHS.ARTICLES}/${articleId}`,
  PROFILE: (userId: number) => `/user/${userId}`,
} as const;
