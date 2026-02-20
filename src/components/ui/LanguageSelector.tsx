import { Languages } from 'lucide-react';
import { useState } from 'react';
import { type Language, useTranslations } from '~/i18n/utils';
import { DropdownMenu, DropdownMenuContent, DropdownMenuGroup, DropdownMenuLabel, DropdownMenuRadioGroup, DropdownMenuRadioItem, DropdownMenuTrigger } from './dropdown-menu';

interface LanguageSelectorProps {
  currentLang: Language;
  currentPath: string;
}

const languages: Record<Language, string> = {
  es: 'ES',
  ca: 'CA',
  en: 'EN',
};

export default function LanguageSelector({ currentLang, currentPath }: LanguageSelectorProps) {
  const [isOpen, setIsOpen] = useState(false);
  const t = useTranslations(currentLang);

  const getLocalizedPath = (lang: string) => {
    // Remove current language prefix if exists
    let path = currentPath;

    for (const l of Object.keys(languages)) {
      if (path.startsWith(`/${l}/`)) {
        path = path.substring(3);
      } else if (path === `/${l}`) {
        path = '/';
      }
    }

    // Add new language prefix (except for default language 'es')
    if (lang === 'es') {
      return path || '/';
    }
    return `/${lang}${path}`;
  };

  function handleLanguageChange(lang: string) {
    window.location.href = getLocalizedPath(lang);
  }
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <button
          type='button'
          onClick={() => setIsOpen(!isOpen)}
          className="p-2 rounded-full bg-foreground/10 backdrop-blur-lg hover:bg-foreground/20 transition-all flex items-center gap-1"
          aria-label="Select language"
        >
          <Languages className="size-5 text-foreground" />
          <span className="text-sm font-medium text-foreground">{languages[currentLang as keyof typeof languages]}</span>
        </button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-32">
        <DropdownMenuGroup>
          <DropdownMenuLabel>
            {t("language")}
          </DropdownMenuLabel>
          <DropdownMenuRadioGroup value={currentLang} onValueChange={handleLanguageChange}>
            {Object.entries(languages).map(([lang, label]) => (
              <DropdownMenuRadioItem key={lang} value={lang}>
                {label}
              </DropdownMenuRadioItem>
            ))}
          </DropdownMenuRadioGroup>
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

