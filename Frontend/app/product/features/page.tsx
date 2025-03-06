import { PageLayout } from "@/components/page-layout"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Mic, Volume2, Globe, MessageSquare, Code, Shield } from "lucide-react"

const features = [
  { icon: Mic, title: "Speech-to-Text", description: "Accurate transcription for multiple African languages" },
  { icon: Volume2, title: "Text-to-Speech", description: "Natural-sounding voice synthesis in various dialects" },
  { icon: Globe, title: "Real-time Translation", description: "Seamless translation between African languages" },
  { icon: MessageSquare, title: "AI Chatbot", description: "Intelligent conversational AI in local languages" },
  { icon: Code, title: "Developer API", description: "Easy integration for developers" },
  { icon: Shield, title: "Offline Capabilities", description: "Functionality without constant internet connection" },
]

export default function FeaturesPage() {
  return (
    <PageLayout title="Features">
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {features.map((feature, index) => (
          <Card key={index}>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <feature.icon className="h-6 w-6 text-[#E94D35]" />
                {feature.title}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p>{feature.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </PageLayout>
  )
}

