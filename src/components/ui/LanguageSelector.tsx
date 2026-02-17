import { Languages } from 'lucide-react';
import { useState, useEffect, useRef } from 'react';

interface LanguageSelectorProps {
  currentLang: string;
  currentPath: string;
}

const languages = {
  es: 'ES',
  ca: 'CA',
  en: 'EN',
};

export default function LanguageSelector({ currentLang, currentPath }: LanguageSelectorProps) {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const getLocalizedPath = (lang: string) => {
    // Remove current language prefix if exists
    let path = currentPath;
    Object.keys(languages).forEach(l => {
      if (path.startsWith(`/${l}/`)) {
        path = path.substring(3);
      } else if (path === `/${l}`) {
        path = '/';
      }
    });

    // Add new language prefix (except for default language 'es')
    if (lang === 'es') {
      return path || '/';
    }
    return `/${lang}${path}`;
  };

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="p-2 rounded-full bg-background/10 backdrop-blur-lg hover:bg-background/20 transition-all flex items-center gap-1"
        aria-label="Select language"
      >
        <Languages className="h-5 w-5 text-foreground" />
        <span className="text-sm font-medium text-foreground">{languages[currentLang as keyof typeof languages]}</span>
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-2 w-32 rounded-lg bg-background/95 backdrop-blur-lg border border-border shadow-lg overflow-hidden">
          {Object.entries(languages).map(([code, label]) => (
            <a
              key={code}
              href={getLocalizedPath(code)}
              className={`block px-4 py-2 text-sm hover:bg-primary/10 transition-colors ${
                currentLang === code ? 'bg-primary/20 font-semibold' : ''
              }`}
            >
              {label}
            </a>
          ))}
        </div>
      )}
    </div>
  );
}

