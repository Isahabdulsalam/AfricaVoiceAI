import { PageLayout } from "@/components/page-layout"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function CommunityPage() {
  return (
    <PageLayout title="Community">
      <p className="mb-6">
        Join the AfricaVoiceAI community to connect with other developers, share your projects, and get support.
      </p>
      <div className="grid md:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Forum</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="mb-4">Discuss ideas, ask questions, and share your experiences with other developers.</p>
            <Button>Join Forum</Button>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>GitHub</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="mb-4">Contribute to our open-source projects and access code samples.</p>
            <Button>Visit GitHub</Button>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Events</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="mb-4">Attend webinars, workshops, and conferences focused on African language AI.</p>
            <Button>View Events</Button>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Showcase</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="mb-4">Show off your projects built with AfricaVoiceAI and get inspired by others.</p>
            <Button>Explore Showcase</Button>
          </CardContent>
        </Card>
      </div>
    </PageLayout>
  )
}

