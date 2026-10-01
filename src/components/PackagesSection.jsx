import SectionLabel from './SectionLabel';
import PackageComparison from './PackageComparison';
import CostCalculator from './CostCalculator';
import './PackagesSection.css';

export default function PackagesSection() {
  return (
    <section id="packages" className="packages-section section">
      <div className="container">
        <div className="packages-section__header">
          <SectionLabel>Packages</SectionLabel>

          <h2 className="packages-section__title">
            Turnkey packages for house &amp; hall construction.
          </h2>

          <p className="packages-section__sub text-secondary">
            Six construction tiers, each fully specified for structure, flooring,
            kitchen, bathroom, electrical and finishing — with rates from{' '}
            <span className="packages-section__highlight">
              ₹1,549/sqft
            </span>.
          </p>
        </div>

        <PackageComparison />

        <CostCalculator />
      </div>
    </section>
  );
}