import { motion } from 'framer-motion';
import { packages } from '../data/packages';
import { company } from '../data/company';
import './PackageComparison.css';

// Helper: clean phone number for WhatsApp (digits only)
const cleanPhone = (phone) => phone.replace(/[^0-9]/g, '');

// Generate a custom WhatsApp message for each package
const generateWhatsAppMessage = (pkg) => {
  const sections = pkg.sections.slice(0, 2);
  const features = sections
    .map((s) => `${s.title}: ${s.items.slice(0, 2).join(' • ')}`)
    .join('\n');

  return `Hello AMRA Construction,

I am interested in your *${pkg.name}* (${pkg.rate}).

Could you please share more details about this package?

Key features I noticed:
${features}

Thank you!`;
};

export default function PackageComparison() {
  const waNumber = cleanPhone(company.phone);

  return (
    <div className="package-comparison">
      <div className="package-comparison__grid">
        {packages.map((pkg, i) => {
          const message = generateWhatsAppMessage(pkg);
          const waLink = `https://wa.me/${waNumber}?text=${encodeURIComponent(message)}`;

          return (
            <motion.div
              key={pkg.id}
              className="package-comparison__card"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.5, delay: i * 0.06, ease: [0.16, 1, 0.3, 1] }}
            >
              <div className="package-comparison__header">
                <h3 className="package-comparison__name">{pkg.name}</h3>
                <span className="package-comparison__rate">{pkg.rate}</span>
                {pkg.rateNote && (
                  <span className="package-comparison__note">{pkg.rateNote}</span>
                )}
              </div>
              <ul className="package-comparison__features">
                {pkg.sections.slice(0, 3).map((section) => (
                  <li key={section.title}>
                    <span className="package-comparison__feature-title">
                      {section.title}
                    </span>
                    <span className="package-comparison__feature-items">
                      {section.items.slice(0, 2).join(' • ')}
                      {section.items.length > 2 && ' …'}
                    </span>
                  </li>
                ))}
              </ul>
              {/* Inquire button – opens WhatsApp with auto‑filled message */}
              <a
                href={waLink}
                target="_blank"
                rel="noopener noreferrer"
                className="package-comparison__cta"
              >
                Inquire
              </a>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}