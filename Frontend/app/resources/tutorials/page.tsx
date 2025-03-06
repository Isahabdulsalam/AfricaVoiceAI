import { PageLayout } from "@/components/page-layout"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import Link from "next/link"

const tutorials = [
  {
    title: "Getting Started with AfricaVoiceAI",
    description: "Learn the basics of integrating our API into your project.",
  },
  {
    title: "Building a Multilingual Chatbot",
    description: "Create a chatbot that can converse in multiple African languages.",
  },
  { title: "Real-time Translation App", description: "Develop a mobile app for real-time speech translation." },
  {
    title: "Voice-Controlled Smart Home",
    description: "Implement voice control in African languages for smart home devices.",
  },
]

export default function TutorialsPage() {
  return (
    <PageLayout title="Tutorials">
      <p className="mb-6">Explore our tutorials to learn how to make the most of AfricaVoiceAI's capabilities.</p>
      <div className="grid md:grid-cols-2 gap-6">
        {tutorials.map((tutorial, index) => (
          <Card key={index}>
            <CardHeader>
              <CardTitle>{tutorial.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="mb-4">{tutorial.description}</p>
              <Link href="#" className="text-[#E94D35] hover:underline">
                Read Tutorial
              </Link>
            </CardContent>
          </Card>
        ))}
      </div>
    </PageLayout>
  )
}

