import { PageLayout } from "@/components/page-layout"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

const pricingPlans = [
  { name: "Basic", price: "$9.99", features: ["100 minutes of speech processing", "5 languages", "Basic API access"] },
  {
    name: "Pro",
    price: "$29.99",
    features: ["500 minutes of speech processing", "10 languages", "Full API access", "Priority support"],
  },
  {
    name: "Enterprise",
    price: "Custom",
    features: ["Unlimited speech processing", "All languages", "Custom integrations", "Dedicated support"],
  },
]

export default function PricingPage() {
  return (
    <PageLayout title="Pricing">
      <div className="grid md:grid-cols-3 gap-6">
        {pricingPlans.map((plan, index) => (
          <Card key={index} className="flex flex-col">
            <CardHeader>
              <CardTitle>{plan.name}</CardTitle>
            </CardHeader>
            <CardContent className="flex-grow">
              <p className="text-3xl font-bold mb-4">{plan.price}</p>
              <ul className="list-disc list-inside">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex}>{feature}</li>
                ))}
              </ul>
            </CardContent>
            <CardFooter>
              <Button className="w-full">Choose Plan</Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </PageLayout>
  )
}

