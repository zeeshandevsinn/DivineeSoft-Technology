import { Metadata } from 'next';
import ContactClient from './ContactClient';

export const metadata: Metadata = {
  title: "Contact DivineeSoft Technology | Start Your Digital Growth Journey",
  description: "Get in touch with DivineeSoft Technology to discuss your web, app, AI, and marketing needs. Connect with us today and start driving real business growth.",
  keywords: "contact DivineeSoft Technology, digital agency contact, web development inquiry, app development contact, AI solutions inquiry, marketing services contact",
};

export default function ContactPage() {
  return <ContactClient />;
}
