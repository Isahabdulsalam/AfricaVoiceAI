import { PageLayout } from "@/components/page-layout"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function APIPage() {
  return (
    <PageLayout title="API">
      <p className="mb-6">
        Integrate AfricaVoiceAI's powerful speech recognition, synthesis, and translation capabilities into your
        applications with our easy-to-use API.
      </p>
      <h2 className="text-2xl font-semibold mb-4">Key Features</h2>
      <ul className="list-disc list-inside mb-6">
        <li>RESTful API design</li>
        <li>Supports multiple African languages</li>
        <li>Real-time processing capabilities</li>
        <li>Comprehensive documentation</li>
        <li>Flexible authentication options</li>
      </ul>
      <div className="flex gap-4">
        <Button asChild>
          <Link href="/docs">View API Documentation</Link>
        </Button>
        <Button variant="outline">Get API Key</Button>
      </div>
    </PageLayout>
  )
}

