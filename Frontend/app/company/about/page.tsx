import { PageLayout } from "@/components/page-layout"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function AboutPage() {
  return (
    <PageLayout title="About Us" showFooter={false}>
      <p className="mb-6">
        AfricaVoiceAI is dedicated to bridging language barriers across Africa through advanced AI technology. Our
        mission is to preserve and promote African languages while enabling seamless communication and technological
        integration.
      </p>
      <h2 className="text-2xl font-semibold mb-4">Our Vision</h2>
      <p className="mb-6">
        We envision a world where language is no longer a barrier to access information, education, and opportunities.
        By leveraging cutting-edge AI technology, we aim to empower African communities and businesses to communicate
        effectively on a global scale.
      </p>
      <h2 className="text-2xl font-semibold mb-4 text-center">Our Team</h2><br />
      <div className="grid md:grid-cols-3 gap-6 text-center">
        <Card>
          <CardHeader>
            <CardTitle>Isah Abdulsalam</CardTitle>
          </CardHeader>
          <CardContent>
            <p>Founder & CEO</p>
            <p>Certified Software  Engineer at ALX</p>
          </CardContent>
        </Card>
      </div>
    </PageLayout>
  )
}

