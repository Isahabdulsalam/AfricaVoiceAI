import { PageLayout } from "@/components/page-layout"

export default function PrivacyPolicyPage() {
  return (
    <PageLayout title="Privacy Policy">
      <p className="mb-6">
        At AfricaVoiceAI, we are committed to protecting your privacy and ensuring the security of your personal
        information. This Privacy Policy outlines how we collect, use, and safeguard your data.
      </p>
      <h2 className="text-2xl font-semibold mb-4">Information We Collect</h2>
      <p className="mb-6">
        We collect information that you provide directly to us, such as when you create an account, use our services, or
        contact us for support. This may include your name, email address, and usage data.
      </p>
      <h2 className="text-2xl font-semibold mb-4">How We Use Your Information</h2>
      <ul className="list-disc list-inside mb-6">
        <li>To provide and improve our services</li>
        <li>To communicate with you about our products and services</li>
        <li>To ensure the security and integrity of our platform</li>
        <li>To comply with legal obligations</li>
      </ul>
      <h2 className="text-2xl font-semibold mb-4">Data Security</h2>
      <p className="mb-6">
        We implement industry-standard security measures to protect your personal information from unauthorized access,
        disclosure, alteration, and destruction.
      </p>
      <h2 className="text-2xl font-semibold mb-4">Your Rights</h2>
      <p className="mb-6">
        You have the right to access, correct, or delete your personal information. You may also have the right to
        restrict or object to certain processing of your data.
      </p>
      <p>
        If you have any questions or concerns about our Privacy Policy, please contact us at privacy@africavoiceai.com.
      </p>
    </PageLayout>
  )
}

