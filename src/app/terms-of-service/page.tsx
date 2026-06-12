import { Metadata } from "next";
import Link from "next/link";
import BackButton from "@/components/ui/backButton";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: "Terms of Service for the shamvoke blog.",
};

export default function TermsOfServicePage() {
  return (
    <main className="max-w-4xl mx-auto py-16 px-6 sm:px-8 lg:px-12">
      <div className="space-y-10">
        {/* Header */}
        <div className="border-b border-gray-200 dark:border-gray-800 pb-8">
          <h1 className="text-4xl font-bold tracking-tight mb-3">Terms of Service for shamvoke blog</h1>
          <p className="text-sm text-gray-600 dark:text-gray-400 italic">
            Last Updated: June 12, 2026
          </p>
        </div>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold tracking-tight">Agreement to Terms</h2>
          <p className="leading-relaxed">
            By accessing or using the services provided by shamvoke at{" "}
            <Link href="https://shamvoke.com/" className="text-blue-600 dark:text-blue-400 hover:underline">
              https://shamvoke.com/
            </Link>{" "}
            (the &quot;Service&quot;), you agree to be bound by these Terms of Service (&quot;Terms&quot;). If you disagree with any part of these terms, you may not access the Service.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold tracking-tight">Use of Service</h2>
          <p className="leading-relaxed">You agree to use the Service only for lawful purposes and in accordance with these Terms. You agree not to:</p>
          <ul className="list-disc list-inside space-y-2 ml-4 text-gray-800 dark:text-gray-200">
            <li className="leading-relaxed">Use the Service in any way that violates any applicable law or regulation</li>
            <li className="leading-relaxed">Use the Service to transmit any harmful, threatening, abusive, or otherwise objectionable material</li>
            <li className="leading-relaxed">Attempt to gain unauthorized access to any portion of the Service</li>
            <li className="leading-relaxed">Use the Service to infringe upon the rights of others</li>
            <li className="leading-relaxed">Use any automated system to access the Service in a manner that sends more requests than a human can reasonably produce</li>
          </ul>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold tracking-tight">Intellectual Property</h2>
          <p className="leading-relaxed">
            The Service and its original content, features, and functionality are and will remain the exclusive property of shamvoke. The Service is protected by copyright, trademark, and other laws. Our trademarks may not be used in connection with any product or service without our prior written consent.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold tracking-tight">User Content</h2>
          <p className="leading-relaxed">
            You retain ownership of any content you submit to or through the Service. By submitting content, you grant shamvoke a non-exclusive, worldwide, royalty-free license to use, reproduce, and display such content in connection with operating the Service.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold tracking-tight">Termination</h2>
          <p className="leading-relaxed">
            We may terminate or suspend your access to the Service immediately, without prior notice or liability, for any reason, including without limitation if you breach the Terms.
          </p>
          <p className="leading-relaxed">
            Upon termination, your right to use the Service will cease immediately.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold tracking-tight">Limitation of Liability</h2>
          <p className="leading-relaxed">
            In no event shall shamvoke, nor its directors, employees, partners, agents, suppliers, or affiliates, be liable for any indirect, incidental, special, consequential, or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses, resulting from:
          </p>
          <ul className="list-disc list-inside space-y-2 ml-4 text-gray-800 dark:text-gray-200">
            <li className="leading-relaxed">Your access to or use of (or inability to access or use) the Service</li>
            <li className="leading-relaxed">Any conduct or content of any third party on the Service</li>
            <li className="leading-relaxed">Any content obtained from the Service</li>
            <li className="leading-relaxed">Unauthorized access, use, or alteration of your transmissions or content</li>
          </ul>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold tracking-tight">Disclaimer</h2>
          <p className="leading-relaxed">
            The Service is provided on an &quot;AS IS&quot; and &quot;AS AVAILABLE&quot; basis. The Service is provided without warranties of any kind, whether express or implied, including, but not limited to, implied warranties of merchantability, fitness for a particular purpose, non-infringement, or course of performance.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold tracking-tight">Governing Law (EU Users)</h2>
          <p className="leading-relaxed">
            For users in the European Union, these Terms shall be governed by and construed in accordance with applicable EU laws. Nothing in these Terms shall affect your statutory rights as a consumer under applicable EU consumer protection legislation.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold tracking-tight">Governing Law</h2>
          <p className="leading-relaxed">
            These Terms shall be governed and construed in accordance with the laws of the jurisdiction in which shamvoke operates, without regard to its conflict of law provisions.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold tracking-tight">Changes to Terms</h2>
          <p className="leading-relaxed">
            We reserve the right to modify or replace these Terms at any time. If a revision is material, we will try to provide at least 30 days&apos; notice prior to any new terms taking effect.
          </p>
          <p className="leading-relaxed">
            By continuing to access or use our Service after those revisions become effective, you agree to be bound by the revised terms.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold tracking-tight">Contact Us</h2>
          <p className="leading-relaxed">If you have any questions about these Terms of Service, please contact us:</p>
          <ul className="list-disc list-inside space-y-2 ml-4 text-gray-800 dark:text-gray-200">
            <li className="leading-relaxed">
              By email: <a href="mailto:shamvoke@webmeka.com" className="text-blue-600 dark:text-blue-400 hover:underline">shamvoke@webmeka.com</a>
            </li>
            <li className="leading-relaxed">
              By visiting: <Link href="https://shamvoke.com/contact" className="text-blue-600 dark:text-blue-400 hover:underline">https://shamvoke.com/contact</Link>
            </li>
          </ul>
        </section>
        <BackButton />
      </div>
    </main>
  );
}