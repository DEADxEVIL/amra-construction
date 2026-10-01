import { useMemo, useState } from 'react';
import { Calculator, MessageCircle } from 'lucide-react';
import { packages } from '../data/packages';
import { company } from '../data/company';
import './CostCalculator.css';

const cleanPhone = (phone) => phone.replace(/[^0-9]/g, '');

const getRate = (rate) => {
  const numericRate = Number(String(rate).replace(/[^0-9.]/g, ''));
  return Number.isFinite(numericRate) ? numericRate : 0;
};

const formatCurrency = (value) =>
  new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency: 'INR',
    maximumFractionDigits: 0,
  }).format(value);

export default function CostCalculator() {
  const [selectedId, setSelectedId] = useState(packages[0]?.id || '');
  const [area, setArea] = useState('');

  const selectedPackage = packages.find((pkg) => pkg.id === selectedId);

  const rate = selectedPackage ? getRate(selectedPackage.rate) : 0;

  const numericArea = Number(area);

  const estimatedCost = useMemo(() => {
    if (!Number.isFinite(numericArea) || numericArea <= 0 || rate <= 0) {
      return 0;
    }

    return numericArea * rate;
  }, [numericArea, rate]);

  const whatsappNumber = cleanPhone(company.phone);

  const whatsappMessage = selectedPackage
    ? `Hello AMRA Construction,

I used your online cost calculator and would like to discuss a project.

Package: ${selectedPackage.name}
Rate: ${selectedPackage.rate}
Built-up area: ${numericArea > 0 ? `${numericArea.toLocaleString('en-IN')} sqft` : 'Not entered'}
Estimated cost: ${estimatedCost > 0 ? formatCurrency(estimatedCost) : 'Not calculated'}

Please help me with the detailed quotation and next steps.

Thank you!`
    : '';

  const whatsappUrl =
    `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;

  return (
    <section className="cost-calculator" aria-labelledby="cost-calculator-title">
      <div className="cost-calculator__header">
        <span className="cost-calculator__icon" aria-hidden="true">
          <Calculator size={22} strokeWidth={1.5} />
        </span>

        <div>
          <span className="cost-calculator__eyebrow">
            Estimate your project
          </span>

          <h3 id="cost-calculator-title" className="cost-calculator__title">
            Construction Cost Calculator
          </h3>
        </div>
      </div>

      <div className="cost-calculator__grid">
        <div className="cost-calculator__form">
          <label htmlFor="package-select" className="cost-calculator__label">
            Select package
          </label>

          <select
            id="package-select"
            className="cost-calculator__select"
            value={selectedId}
            onChange={(event) => setSelectedId(event.target.value)}
          >
            {packages.map((pkg) => (
              <option key={pkg.id} value={pkg.id}>
                {pkg.name} — {pkg.rate}
              </option>
            ))}
          </select>

          <label htmlFor="built-up-area" className="cost-calculator__label">
            Built-up area
          </label>

          <div className="cost-calculator__input-wrap">
            <input
              id="built-up-area"
              type="number"
              min="1"
              step="1"
              inputMode="numeric"
              placeholder="e.g. 1500"
              value={area}
              onChange={(event) => setArea(event.target.value)}
              className="cost-calculator__input"
              aria-describedby="area-help"
            />
            <span className="cost-calculator__unit">sqft</span>
          </div>

          <p id="area-help" className="cost-calculator__help">
            Enter the total built-up area you want to estimate.
          </p>
        </div>

        <div className="cost-calculator__result">
          <span className="cost-calculator__result-label">
            Estimated construction cost
          </span>

          <strong className="cost-calculator__amount">
            {estimatedCost > 0 ? formatCurrency(estimatedCost) : '₹0'}
          </strong>

          <div className="cost-calculator__rate">
            <span>{selectedPackage?.name}</span>
            <span>{selectedPackage?.rate}</span>
          </div>

          {estimatedCost > 0 && (
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="cost-calculator__whatsapp"
            >
              <MessageCircle size={17} strokeWidth={1.7} />
              Discuss this estimate
            </a>
          )}

          <p className="cost-calculator__disclaimer">
            This is an indicative estimate based on the selected package rate
            and built-up area. Final pricing may vary after site assessment,
            design and detailed quotation.
          </p>
        </div>
      </div>
    </section>
  );
}