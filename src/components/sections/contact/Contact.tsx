import { ContactForm } from './ContactForm';

export default function Contact() {
  return (
    <>
      <section id="contact-section" className="mt-30 mb-10 p-6 flex flex-col text-center gap-8">
        <h2 className="text-3xl font-semibold">Contact</h2>
        <ContactForm />
        <p className="text-lg text-muted-foreground">Reach out! Let&apos;s collaborate or just chat!</p>
      </section>
    </>
  );
}
