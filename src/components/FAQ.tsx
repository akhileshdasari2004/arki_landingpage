import { FAQSection } from './ui/faqsection';

const faqs = [
  { question: 'What if we don\'t have enough data?', answer: 'ARKI works with as little as a single project. The more data you upload, the more powerful the search and reuse capabilities become — but you can start small and grow your library over time.' },
  { question: 'We already have a detail library. Why do we need ARKI?', answer: 'Traditional detail libraries are static and hard to maintain. ARKI uses AI to automatically organize, deduplicate, and make your existing details searchable — turning a passive library into an active productivity tool.' },
  { question: 'Will ARKI cause our team to blindly copy details without verifying them?', answer: 'ARKI encourages verification by providing full context for every detail — including project origin, version history, and related notes. It helps your team make informed decisions faster, not skip due diligence.' },
  { question: 'Our margins are slim, why do we need to invest in ARKI?', answer: 'ARKI pays for itself by reducing the hours spent recreating existing work. Firms report up to 50% faster design cycles, directly improving your project margins and profitability.' },
  { question: 'Who has access to our data?', answer: 'Only authorized members of your organization. ARKI uses enterprise-grade access controls and your data is never shared with other firms or used to train external AI models.' },
  { question: 'How does ARKI secure your system?', answer: 'ARKI uses end-to-end encryption, SOC 2 compliant infrastructure, and regular security audits to ensure your intellectual property remains protected at all times.' },
  { question: 'What compliance frameworks does ARKI have?', answer: 'ARKI is SOC 2 Type II compliant and follows industry best practices for data security, privacy, and governance in the AEC industry.' },
  { question: 'What type of file or format do we get from search results?', answer: 'Search results return the original file formats — including DWG, RVT, PDF, and more — so you can immediately use them in your existing workflows without conversion.' },
  { question: 'What AI engine does ARKI use?', answer: 'ARKI uses a proprietary AI engine specifically trained on architectural and engineering drawings, combined with state-of-the-art vision and language models for accurate visual understanding.' },
  { question: 'Will the tool be an app or SaaS?', answer: 'ARKI is a cloud-based SaaS platform with native plugins for Revit and AutoCAD, giving you access from anywhere while integrating directly into your existing design tools.' },
  { question: 'What are the system requirements for the Revit plugin?', answer: 'The ARKI Revit plugin supports Revit 2021 and later on Windows 10/11. It requires an internet connection and minimal system resources beyond what Revit already needs.' },
  { question: 'How do architects add their past work?', answer: 'Simply upload your project files — Revit models, AutoCAD drawings, or PDFs — through the ARKI web platform or directly from the Revit plugin. Our AI handles the rest, automatically indexing and organizing your content.' },
];

const faqsLeft = faqs.slice(0, Math.ceil(faqs.length / 2));
const faqsRight = faqs.slice(Math.ceil(faqs.length / 2));

const FAQ = () => {
  return (
    <FAQSection
      title="Everything you need to know about ARKI"
      subtitle="Frequently Asked Questions"
      description="Get instant answers about how ARKI organizes your data, integrates with your tools, and protects your intellectual property."
      buttonLabel="Book a Guided Demo →"
      onButtonClick={() => document.getElementById('book-a-call')?.scrollIntoView({ behavior: 'smooth' })}
      faqsLeft={faqsLeft}
      faqsRight={faqsRight}
    />
  );
};

export default FAQ;
