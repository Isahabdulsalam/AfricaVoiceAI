import { PageLayout } from "@/components/page-layout"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

const jobOpenings = [
  { title: "Senior Machine Learning Engineer", department: "Engineering", location: "Nairobi, Kenya" },
  { title: "Linguistic Data Scientist", department: "Research", location: "Cape Town, South Africa" },
  { title: "Full Stack Developer", department: "Engineering", location: "Lagos, Nigeria" },
  { title: "UX/UI Designer", department: "Design", location: "Remote" },
  { title: "Business Development Manager", department: "Sales", location: "Accra, Ghana" },
]

export default function CareersPage() {
  return (
    <PageLayout title="Careers">
      <p className="mb-6">
        Join our team and help shape the future of African language technology. We're always looking for passionate
        individuals to contribute to our mission.
      </p>
      <h2 className="text-2xl font-semibold mb-4">Current Openings</h2>
      <div className="grid gap-6">
        {jobOpenings.map((job, index) => (
          <Card key={index}>
            <CardHeader>
              <CardTitle>{job.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <p>Department: {job.department}</p>
              <p>Location: {job.location}</p>
            </CardContent>
            <CardFooter>
              <Button>Apply Now</Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </PageLayout>
  )
}

