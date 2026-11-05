import { useEffect } from 'react';

export default function Preloader() {
  useEffect(() => {
    const $ = window.jQuery;
    if (!$) return;
    const hide = () => $('.loader-wrap').delay(1000).fadeOut(500);
    if (document.readyState === 'complete') hide();
    else window.addEventListener('load', hide, { once: true });
    $('.preloader-close').on('click', () => $('.loader-wrap').delay(200).fadeOut(500));
  }, []);

  return (
    <div className="loader-wrap">
      <div className="preloader">
        <div className="preloader-close">close</div>
        <div id="handle-preloader" className="handle-preloader">
          <div className="animation-preloader">
            <div className="spinner"></div>
            <div className="txt-loading">
              {['P', 'R', 'I', 'J', 'Y', 'M'].map((c) => (
                <span key={c} data-text-preloader={c} className="letters-loading">{c}</span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
