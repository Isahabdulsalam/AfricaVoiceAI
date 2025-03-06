import type { ReactNode } from "react"

interface FeatureCardProps {
  icon: ReactNode
  title: string
  description: string
}

export default function FeatureCard({ icon, title, description }: FeatureCardProps) {
  return (
    <div className="bg-white rounded-xl shadow-md p-6 transition-all duration-300 hover:shadow-xl">
      <div className="mb-4">{icon}</div>
      <h3 className="text-xl font-semibold mb-2 text-[#333333]">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  )
}

