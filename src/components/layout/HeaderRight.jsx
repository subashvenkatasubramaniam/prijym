import LanguagePicker from './LanguagePicker';

// Right side of every header: search + language picker + Request Demo / Request Pricing
// (the two buttons intentionally have no action yet)
export default function HeaderRight({ className = '' }) {
  return (
    <div className={'menu-right-content ' + className}>
      <div className="search-box-outer search-toggler mr_25">
        <i className="icon-2"></i>
      </div>
      <LanguagePicker />
      <div className="btn-box header-cta">
        <button type="button" className="cta-btn cta-btn--demo">Request Demo</button>
        <button type="button" className="cta-btn cta-btn--pricing">Request Pricing</button>
      </div>
    </div>
  );
}
