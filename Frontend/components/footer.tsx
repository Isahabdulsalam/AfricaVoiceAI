import Link from "next/link"
import { Volume2 } from "lucide-react"

const FooterSection = ({ title, links }: { title: string; links: { label: string; href: string }[] }) => (
  <div>
    <h3 className="text-lg font-semibold mb-4">{title}</h3>
    <ul className="space-y-2">
      {links.map((link, index) => (
        <li key={index}>
          <Link href={link.href} className="text-gray-300 hover:text-white transition-colors">
            {link.label}
          </Link>
        </li>
      ))}
    </ul>
  </div>
)

export function Footer() {
  const productLinks = [
    { label: "Features", href: "/product/features" },
    { label: "Pricing", href: "/product/pricing" },
    { label: "API", href: "/product/api" },
    { label: "Integration", href: "/product/integration" },
  ]

  const resourcesLinks = [
    { label: "Documentation", href: "/resources/documentation" },
    { label: "Tutorials", href: "/resources/tutorials" },
    { label: "Blog", href: "/resources/blog" },
    { label: "Community", href: "/resources/community" },
  ]

  const companyLinks = [
    { label: "About Us", href: "/company/about" },
    { label: "Careers", href: "/company/careers" },
    { label: "Contact", href: "/company/contact" },
    { label: "Privacy Policy", href: "/company/privacy-policy" },
  ]

  return (
    <footer className="bg-[#333333] text-white py-12 px-4">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-5 gap-8">
          <div className="col-span-2">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <Volume2 className="h-6 w-6 text-[#E94D35]" />
              <span className="text-xl font-bold">AfricaVoiceAI</span>
            </Link>
            <p className="text-gray-300 mb-4">
              Bridging language barriers across Africa with advanced AI voice technology.
            </p>
            <div className="flex space-x-4">
              <Link href="#" className="text-gray-300 hover:black">
                Twitter
              </Link>
              <Link href="#" className="text-gray-300 hover:black">
                LinkedIn
              </Link>
              <Link href="#" className="text-gray-300 hover:black">
                Facebook
              </Link>
            </div>
          </div>
          <FooterSection title="Product" links={productLinks} />
          <FooterSection title="Resources" links={resourcesLinks} />
          <FooterSection title="Company" links={companyLinks} />
        </div>
        <div className="border-t border-gray-700 mt-12 pt-8 text-center text-gray-300">
          <p>&copy; {new Date().getFullYear()} AfricaVoiceAI. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

