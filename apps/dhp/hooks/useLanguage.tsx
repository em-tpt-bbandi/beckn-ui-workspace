import { useRouter } from 'next/router'
import en from '../locales/en'
import fa from '../locales/fa'
import { useTranslation, useLanguageQuery, LanguageSwitcher } from 'next-export-i18n'
export const useLanguage = () => {
  const { t } = useTranslation()
  const [query] = useLanguageQuery()
  const { locale } = useRouter()

  return { t, locale, query }
}
