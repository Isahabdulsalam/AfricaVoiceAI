import { PageLayout } from "@/components/page-layout"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function DocumentationPage() {
  return (
    <PageLayout title="Documentation">
      <p className="mb-6">Comprehensive documentation to help you integrate and use AfricaVoiceAI in your projects.</p>
      <h2 className="text-2xl font-semibold mb-4">Quick Links</h2>
      <ul className="list-disc list-inside mb-6">
        <li>Getting Started Guide</li>
        <li>API Reference</li>
        <li>SDK Documentation</li>
        <li>Best Practices</li>
        <li>Troubleshooting</li>
      </ul>
      <Button asChild>
        <Link href="/docs">View Full Documentation</Link>
      </Button>
    </PageLayout>
  )
}

