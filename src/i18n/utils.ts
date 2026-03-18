import { getRelativeLocaleUrl } from 'astro:i18n';
import es from './es.json';
import pt from './pt.json';

export const locales = {
  es,
  pt,
} as const;

export type Locale = keyof typeof locales;

export function getLocaleFromUrl(url: URL): Locale {
  const pathname = url.pathname;
  const segments = pathname.split('/').filter(Boolean);
  const firstSegment = segments[0];
  
  if (firstSegment === 'pt') {
    return 'pt';
  }
  return 'es';
}

export function t(key: string, locale: Locale = 'es'): string {
  const keys = key.split('.');
  let value: any = locales[locale];
  
  for (const k of keys) {
    if (value && typeof value === 'object' && k in value) {
      value = value[k];
    } else {
      return key;
    }
  }
  
  return typeof value === 'string' ? value : key;
}

export function getLocaleUrl(path: string, locale: Locale): string {
  const cleanPath = path.replace(/^\/+/, '/');
  if (locale === 'es') {
    return cleanPath === '/' ? '/es/' : `/es${cleanPath}`;
  }
  return cleanPath === '/' ? `/${locale}/` : `/${locale}${cleanPath}`;
}
