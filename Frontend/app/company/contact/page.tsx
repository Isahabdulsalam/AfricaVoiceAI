import { PageLayout } from "@/components/page-layout"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"

export default function ContactPage() {
  return (
    <PageLayout title="Contact Us">
      <div className="grid md:grid-cols-2 gap-12">
        <div>
          <h2 className="text-2xl font-semibold mb-4">Get in Touch</h2>
          <p className="mb-4">
            We'd love to hear from you. Please fill out the form below and we'll get back to you as soon as possible.
          </p>
          <form className="space-y-4">
            <div>
              <Label htmlFor="name">Name</Label>
              <Input id="name" placeholder="Your name" />
            </div>
            <div>
              <Label htmlFor="email">Email</Label>
              <Input id="email" type="email" placeholder="Your email" />
            </div>
            <div>
              <Label htmlFor="message">Message</Label>
              <Textarea id="message" placeholder="Your message" />
            </div>
            <Button type="submit">Send Message</Button>
          </form>
        </div>
        <div>
          <h2 className="text-2xl font-semibold mb-4">Contact Information</h2>
          <p className="mb-2">Email: info@africavoiceai.com</p>
          <p className="mb-2">Phone: +234 906 370 0385</p>
          <p className="mb-4">Address: Dutse, Jigawa state, Nigeria</p>
          <h3 className="text-xl font-semibold mb-2">Follow Us</h3>
          <div className="flex space-x-4">
            <a href="#" className="text-[#E94D35] hover:underline">
              Twitter
            </a>
            <a href="#" className="text-[#E94D35] hover:underline">
              LinkedIn
            </a>
            <a href="#" className="text-[#E94D35] hover:underline">
              Facebook
            </a>
          </div>
        </div>
      </div>
    </PageLayout>
  )
}

