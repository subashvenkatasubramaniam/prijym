import { useEffect, useRef, useState } from 'react';
import { LANGUAGES, flagUrl } from './languages';

const GT_SCRIPT_ID = 'google-translate-script';
let gtLoading = null;

// Load Google Translate once (hidden widget, used only as the translation engine)
function loadGoogleTranslate() {
  if (window.google?.translate?.TranslateElement) return Promise.resolve();
  if (gtLoading) return gtLoading;
  gtLoading = new Promise((resolve) => {
    window.googleTranslateElementInit = () => {
      if (!document.getElementById('google_translate_element')) {
        const holder = document.createElement('div');
        holder.id = 'google_translate_element';
        holder.style.display = 'none';
        document.body.appendChild(holder);
      }
      new window.google.translate.TranslateElement(
        { pageLanguage: 'en', autoDisplay: false },
        'google_translate_element'
      );
      resolve();
    };
    const s = document.createElement('script');
    s.id = GT_SCRIPT_ID;
    s.src = 'https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit';
    s.async = true;
    document.body.appendChild(s);
  });
  return gtLoading;
}

function setCookie(name, value) {
  const host = window.location.hostname;
  document.cookie = `${name}=${value}; path=/`;
  if (host && host !== 'localhost') document.cookie = `${name}=${value}; path=/; domain=${host}`;
}

function currentLangFromCookie() {
  const m = document.cookie.match(/(?:^|;\s*)googtrans=\/[^/]+\/([^;]+)/);
  return m ? decodeURIComponent(m[1]) : 'en';
}

function applyLanguage(code) {
  const combo = document.querySelector('select.goog-te-combo');
  if (!combo) return false;
  combo.value = code;
  combo.dispatchEvent(new Event('change'));
  return true;
}

export default function LanguagePicker() {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState('');
  const [current, setCurrent] = useState(() => currentLangFromCookie());
  const ref = useRef(null);

  const active = LANGUAGES.find((l) => l.code === current) || LANGUAGES[0];

  // restore previously selected language (cookie) on first mount
  useEffect(() => {
    if (current !== 'en') loadGoogleTranslate();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // close on outside click / Esc
  useEffect(() => {
    const onDown = (e) => {
      if (ref.current && !ref.current.contains(e.target)) setOpen(false);
    };
    const onKey = (e) => e.key === 'Escape' && setOpen(false);
    document.addEventListener('mousedown', onDown);
    document.addEventListener('keydown', onKey);
    return () => {
      document.removeEventListener('mousedown', onDown);
      document.removeEventListener('keydown', onKey);
    };
  }, []);

  const choose = async (code) => {
    setCurrent(code);
    setOpen(false);
    setQuery('');
    if (code === 'en') {
      // back to original English
      setCookie('googtrans', '/en/en');
      if (!applyLanguage('en')) window.location.reload();
      else setTimeout(() => window.location.reload(), 150);
      return;
    }
    setCookie('googtrans', `/en/${code}`);
    await loadGoogleTranslate();
    // wait for the hidden combo box to appear, then trigger translation
    let tries = 0;
    const timer = setInterval(() => {
      tries += 1;
      if (applyLanguage(code) || tries > 30) clearInterval(timer);
    }, 150);
  };

  const q = query.trim().toLowerCase();
  const list = q
    ? LANGUAGES.filter((l) => l.name.toLowerCase().includes(q) || l.code.toLowerCase().includes(q))
    : LANGUAGES;

  return (
    <div className="lang-picker mr_25 notranslate" ref={ref} translate="no">
      <button
        type="button"
        className="lang-picker__button"
        aria-haspopup="listbox"
        aria-expanded={open}
        onClick={() => setOpen((o) => !o)}
      >
        <img className="lang-picker__flag" src={flagUrl(active.flag)} alt="" />
        <span className="lang-picker__code">{active.code.split('-')[0].toUpperCase()}</span>
        <i className="fas fa-angle-down lang-picker__caret"></i>
      </button>

      {open && (
        <div className="lang-picker__dropdown" role="listbox">
          <input
            type="text"
            className="lang-picker__search"
            placeholder="Search language..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            autoFocus
          />
          <ul className="lang-picker__list">
            {list.map((l) => (
              <li key={l.code}>
                <button
                  type="button"
                  role="option"
                  aria-selected={l.code === current}
                  className={'lang-picker__item' + (l.code === current ? ' is-active' : '')}
                  onClick={() => choose(l.code)}
                >
                  <img src={flagUrl(l.flag)} alt="" loading="lazy" />
                  <span>{l.name}</span>
                </button>
              </li>
            ))}
            {list.length === 0 && <li className="lang-picker__empty">No language found</li>}
          </ul>
        </div>
      )}
    </div>
  );
}
