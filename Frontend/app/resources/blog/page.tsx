import { PageLayout } from "@/components/page-layout"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import Link from "next/link"

const blogPosts = [
  {
    title: "The Future of African Language AI",
    date: "2023-06-01",
    excerpt: "Exploring the potential impact of AI on African languages and communication.",
  },
  {
    title: "Improving Accuracy in Swahili Speech Recognition",
    date: "2023-05-15",
    excerpt: "Technical insights into our latest improvements in Swahili speech-to-text technology.",
  },
  {
    title: "Case Study: AfricaVoiceAI in Education",
    date: "2023-04-30",
    excerpt: "How our technology is being used to enhance language learning across Africa.",
  },
  {
    title: "Ethical Considerations in AI and African Languages",
    date: "2023-04-12",
    excerpt: "Discussing the ethical implications of AI in preserving and processing African languages.",
  },
]

export default function BlogPage() {
  return (
    <PageLayout title="Blog">
      <div className="grid gap-6">
        {blogPosts.map((post, index) => (
          <Card key={index}>
            <CardHeader>
              <CardTitle>{post.title}</CardTitle>
              <p className="text-sm text-gray-500">{post.date}</p>
            </CardHeader>
            <CardContent>
              <p className="mb-4">{post.excerpt}</p>
              <Link href="#" className="text-[#E94D35] hover:underline">
                Read More
              </Link>
            </CardContent>
          </Card>
        ))}
      </div>
    </PageLayout>
  )
}

