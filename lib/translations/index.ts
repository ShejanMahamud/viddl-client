import { ar } from './ar';
import { de } from './de';
import { en } from './en';
import { es } from './es';
import { fr } from './fr';
import { it } from './it';
import { ja } from './ja';
import { ko } from './ko';
import { pt } from './pt';
import { zh } from './zh';

export const translations = {
  'en-US': en,
  'es-ES': es,
  'fr-FR': fr,
  'de-DE': de,
  'pt-BR': pt,
  'it-IT': it,
  'ja-JP': ja,
  'ko-KR': ko,
  'zh-CN': zh,
  'ar-SA': ar,
} as const;

export type Language = keyof typeof translations;
export type Translation = typeof en;

export function getTranslation(lang: Language): Translation {
  return translations[lang] || translations['en-US'];
}
