import { Link } from 'react-router-dom';

export default function PageTitle({ title }) {
  return (
    <section className="page-title centred">
      <div className="bg-layer" style={{ backgroundImage: 'url(/assets/images/background/page-title-5.jpg)' }}></div>
      <div className="pattern-layer" style={{ backgroundImage: 'url(/assets/images/shape/shape-53.png)' }}></div>
      <div className="auto-container">
        <div className="content-box">
          <h2>{title}</h2>
          <ul className="bread-crumb">
            <li><Link to="/">Home</Link></li>
            <li>-</li>
            <li>{title}</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
