import { PageLayout } from "@/components/page-layout"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

const integrations = [
  { title: "Web Applications", description: "Easily integrate our API into your web apps using our JavaScript SDK." },
  { title: "Mobile Apps", description: "Use our iOS and Android SDKs for seamless mobile integration." },
  {
    title: "Desktop Software",
    description: "Integrate AfricaVoiceAI into your desktop applications with our cross-platform SDK.",
  },
  {
    title: "Cloud Services",
    description: "Connect our API to your cloud services for scalable, server-side processing.",
  },
]

export default function IntegrationPage() {
  return (
    <PageLayout title="Integration">
      <p className="mb-6">
        AfricaVoiceAI offers multiple integration options to suit your development needs. Our flexible API and SDKs make
        it easy to add powerful voice AI capabilities to your applications.
      </p>
      <div className="grid md:grid-cols-2 gap-6">
        {integrations.map((integration, index) => (
          <Card key={index}>
            <CardHeader>
              <CardTitle>{integration.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <p>{integration.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </PageLayout>
  )
}

