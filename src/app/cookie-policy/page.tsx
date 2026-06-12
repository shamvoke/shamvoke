import { Metadata } from "next";
import Link from "next/link";
import BackButton from "@/components/ui/backButton";

export const metadata: Metadata = {
  title: "Cookie Policy",
  description: "Cookie Policy for the shamvoke blog.",
};

export default function CookiePolicyPage() {
  return (
    <main className="max-w-4xl mx-auto py-16 px-6 sm:px-8 lg:px-12">
      <div className="space-y-10">
        <div className="border-b border-gray-200 dark:border-gray-800 pb-8">
          <h1 className="text-4xl font-bold tracking-tight mb-3">Cookie Policy for shamvoke blog</h1>
          <p className="text-sm text-gray-600 dark:text-gray-400 italic">
            Last Updated: June 12, 2026
          </p>
        </div>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold tracking-tight">What Are Cookies</h2>
          <p className="leading-relaxed">
            Cookies are small text files that are stored on your computer or mobile device when you visit a website. They are widely used to make websites work more efficiently and to provide information to the owners of the site.
          </p>
          <p className="leading-relaxed">
            shamvoke blog uses cookies and similar technologies on{" "}
            <Link href="https://shamvoke.com/" className="text-blue-600 dark:text-blue-400 hover:underline">
              https://shamvoke.com/
            </Link>{" "}
            (the &quot;Service&quot;) to enhance your browsing experience and analyze how the Service is used.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold tracking-tight">Types of Cookies We Use</h2>
          <p className="leading-relaxed">We use the following types of cookies:</p>
          <ul className="list-disc list-inside space-y-2 ml-4 text-gray-800 dark:text-gray-200">
            <li className="leading-relaxed">
              <strong>Essential Cookies</strong> — These cookies are necessary for the Service to function properly. They enable basic features like page navigation and access to secure areas.
            </li>
            <li className="leading-relaxed">
              <strong>Preference Cookies</strong> — These cookies allow the Service to remember choices you make (such as your language or region) and provide enhanced, personalized features.
            </li>
            <li className="leading-relaxed">
              <strong>Analytics Cookies</strong> — These cookies help us understand how visitors interact with the Service by collecting and reporting information anonymously.
            </li>
            <li className="leading-relaxed">
              <strong>Marketing Cookies</strong> — These cookies are used to track visitors across websites to display relevant advertisements.
            </li>
          </ul>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold tracking-tight">Third-Party Cookies</h2>
          <p className="leading-relaxed">We use cookies from the following third-party services:</p>
          <ul className="list-disc list-inside space-y-2 ml-4 text-gray-800 dark:text-gray-200">
            <li className="leading-relaxed">Google Analytics — Uses cookies to collect anonymous usage statistics and website traffic data.</li>
            <li className="leading-relaxed">Facebook Pixel — Uses cookies to track conversions and build targeted audiences for advertising.</li>
          </ul>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold tracking-tight">Managing Cookies</h2>
          <p className="leading-relaxed">You can control and manage cookies in several ways. Most browsers allow you to:</p>
          <ul className="list-disc list-inside space-y-2 ml-4 text-gray-800 dark:text-gray-200">
            <li className="leading-relaxed">View what cookies are stored and delete them individually</li>
            <li className="leading-relaxed">Block third-party cookies</li>
            <li className="leading-relaxed">Block cookies from specific sites</li>
            <li className="leading-relaxed">Block all cookies</li>
            <li className="leading-relaxed">Delete all cookies when you close your browser</li>
          </ul>
          <p className="leading-relaxed">
            Please note that if you choose to block or delete cookies, some features of the Service may not function properly.
          </p>
          <p className="leading-relaxed">
            To manage cookies in your browser, check your browser&apos;s help section or visit the browser&apos;s settings.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold tracking-tight">Cookie Consent (GDPR)</h2>
          <p className="leading-relaxed">
            If you are located in the European Economic Area, we will request your consent before placing non-essential cookies on your device, in accordance with the General Data Protection Regulation (GDPR) and the ePrivacy Directive.
          </p>
          <p className="leading-relaxed">
            You can withdraw your consent at any time by adjusting your cookie preferences or contacting us at <a href="mailto:shamvoke@webmeka.com" className="text-blue-600 dark:text-blue-400 hover:underline">shamvoke@webmeka.com</a>.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold tracking-tight">Changes to This Cookie Policy</h2>
          <p className="leading-relaxed">
            We may update this Cookie Policy from time to time to reflect changes in technology, regulation, or our business practices. Any changes will be posted on this page with an updated &quot;Last Updated&quot; date.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold tracking-tight">Contact Us</h2>
          <p className="leading-relaxed">If you have any questions about this Cookie Policy, please contact us:</p>
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