import { Metadata } from "next";
import Link from "next/link";
import BackButton from "@/components/ui/backButton";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Privacy Policy for the shamvoke blog.",
};

export default function PrivacyPolicyPage() {
  return (
    <main className="max-w-4xl mx-auto py-16 px-6 sm:px-8 lg:px-12">
      <div className="space-y-10">
        {/* Header */}
        <div className="border-b border-gray-200 dark:border-gray-800 pb-8">
          <h1 className="text-4xl font-bold tracking-tight mb-3">Privacy Policy for shamvoke blog</h1>
          <p className="text-sm text-gray-600 dark:text-gray-400 italic">
            Last Updated: June 12, 2026
          </p>
        </div>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold tracking-tight">Introduction</h2>
          <p className="leading-relaxed">
            shamvoke (&quot;we,&quot; &quot;us,&quot; or &quot;our&quot;) operates{" "}
            <Link href="https://shamvoke.com/" className="text-blue-600 dark:text-blue-400 hover:underline">
              https://shamvoke.com/
            </Link>{" "}
            (the &quot;Service&quot;). This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our Service. Please read this privacy policy carefully. If you do not agree with the terms of this privacy policy, please do not access the Service.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold tracking-tight">Information We Collect</h2>
          <p className="leading-relaxed">We may collect the following types of information:</p>
          <ul className="list-disc list-inside space-y-2 ml-4 text-gray-800 dark:text-gray-200">
            <li className="leading-relaxed">User name</li>
            <li className="leading-relaxed">Email address</li>
          </ul>
          <p className="leading-relaxed">
            We collect this information when you voluntarily provide it to us, when you use our Service, or through automated technologies.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold tracking-tight">How We Use Your Information</h2>
          <p className="leading-relaxed">We may use the information we collect for various purposes, including to:</p>
          <ul className="list-disc list-inside space-y-2 ml-4 text-gray-800 dark:text-gray-200">
            <li className="leading-relaxed">Provide, operate, and maintain our Service</li>
            <li className="leading-relaxed">Improve, personalize, and expand our Service</li>
            <li className="leading-relaxed">Understand and analyze how you use our Service</li>
            <li className="leading-relaxed">Develop new products, services, features, and functionality</li>
            <li className="leading-relaxed">Communicate with you for customer service, updates, and marketing purposes</li>
            <li className="leading-relaxed">Process transactions and send related information</li>
            <li className="leading-relaxed">Find and prevent fraud</li>
            <li className="leading-relaxed">Comply with legal obligations</li>
          </ul>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold tracking-tight">Third-Party Services</h2>
          <p className="leading-relaxed">
            We may use third-party service providers to monitor and analyze the use of our Service, process payments, or assist with other business functions.
          </p>
          <p className="leading-relaxed">
            We use Google Analytics to analyze website traffic. Google Analytics uses cookies to collect anonymous usage data. For more information, visit Google&apos;s privacy policy.
          </p>
          <p className="leading-relaxed">
            We use Facebook Pixel to measure the effectiveness of our advertising. Facebook may collect data about your browsing activity across websites.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold tracking-tight">Data Retention</h2>
          <p className="leading-relaxed">
            We will retain your personal information only for as long as is necessary for the purposes set out in this Privacy Policy. We will retain and use your information to the extent necessary to comply with our legal obligations, resolve disputes, and enforce our policies.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold tracking-tight">Data Security</h2>
          <p className="leading-relaxed">
            The security of your data is important to us, but remember that no method of transmission over the Internet or method of electronic storage is 100% secure. While we strive to use commercially acceptable means to protect your personal information, we cannot guarantee its absolute security.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold tracking-tight">Your Rights Under GDPR (European Users)</h2>
          <p className="leading-relaxed">
            If you are a resident of the European Economic Area (EEA), you have certain data protection rights under the General Data Protection Regulation (GDPR). shamvoke blog aims to take reasonable steps to allow you to correct, amend, delete, or limit the use of your personal data.
          </p>
          <p className="leading-relaxed">You have the following rights:</p>
          <ul className="list-disc list-inside space-y-2 ml-4 text-gray-800 dark:text-gray-200">
            <li className="leading-relaxed"><strong>Right to Access</strong> — You have the right to request copies of your personal data.</li>
            <li className="leading-relaxed"><strong>Right to Rectification</strong> — You have the right to request that we correct any information you believe is inaccurate or complete information you believe is incomplete.</li>
            <li className="leading-relaxed"><strong>Right to Erasure</strong> — You have the right to request that we erase your personal data, under certain conditions.</li>
            <li className="leading-relaxed"><strong>Right to Restrict Processing</strong> — You have the right to request that we restrict the processing of your personal data, under certain conditions.</li>
            <li className="leading-relaxed"><strong>Right to Data Portability</strong> — You have the right to request that we transfer the data we have collected to another organization, or directly to you, under certain conditions.</li>
            <li className="leading-relaxed"><strong>Right to Object</strong> — You have the right to object to our processing of your personal data, under certain conditions.</li>
          </ul>
          <p className="leading-relaxed">
            If you wish to exercise any of these rights, please contact us at <a href="mailto:shamvoke@webmeka.com" className="text-blue-600 dark:text-blue-400 hover:underline">shamvoke@webmeka.com</a>. We will respond to your request within 30 days.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold tracking-tight">Your Rights Under CCPA (California Residents)</h2>
          <p className="leading-relaxed">
            If you are a California resident, you have specific rights regarding your personal information under the California Consumer Privacy Act (CCPA).
          </p>
          <p className="leading-relaxed">You have the right to:</p>
          <ul className="list-disc list-inside space-y-2 ml-4 text-gray-800 dark:text-gray-200">
            <li className="leading-relaxed"><strong>Know</strong> — Request that we disclose what personal information we collect, use, and disclose about you.</li>
            <li className="leading-relaxed"><strong>Delete</strong> — Request that we delete your personal information, subject to certain exceptions.</li>
            <li className="leading-relaxed"><strong>Opt-Out</strong> — Opt out of the sale of your personal information. We do not sell personal information.</li>
            <li className="leading-relaxed"><strong>Non-Discrimination</strong> — Not be discriminated against for exercising your CCPA rights.</li>
          </ul>
          <p className="leading-relaxed">
            To exercise your rights, contact us at <a href="mailto:shamvoke@webmeka.com" className="text-blue-600 dark:text-blue-400 hover:underline">shamvoke@webmeka.com</a>. We will verify your identity before processing your request and respond within 45 days.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold tracking-tight">CalOPPA Compliance</h2>
          <p className="leading-relaxed">In accordance with the California Online Privacy Protection Act (CalOPPA), we agree to the following:</p>
          <ul className="list-disc list-inside space-y-2 ml-4 text-gray-800 dark:text-gray-200">
            <li className="leading-relaxed">Users can visit our site anonymously.</li>
            <li className="leading-relaxed">Our Privacy Policy link includes the word &quot;Privacy&quot; and can be easily found on our home page.</li>
            <li className="leading-relaxed">Users will be notified of any privacy policy changes on this page.</li>
            <li className="leading-relaxed">
              Users can change their personal information by contacting us at <a href="mailto:shamvoke@webmeka.com" className="text-blue-600 dark:text-blue-400 hover:underline">shamvoke@webmeka.com</a>.
            </li>
          </ul>
          <p className="leading-relaxed">
            We honor Do Not Track signals and do not track, plant cookies, or use advertising when a Do Not Track browser mechanism is in place.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold tracking-tight">Changes to This Privacy Policy</h2>
          <p className="leading-relaxed">
            We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the &quot;Last Updated&quot; date.
          </p>
          <p className="leading-relaxed">
            You are advised to review this Privacy Policy periodically for any changes. Changes to this Privacy Policy are effective when they are posted on this page.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold tracking-tight">Contact Us</h2>
          <p className="leading-relaxed">If you have any questions about this Privacy Policy, please contact us:</p>
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