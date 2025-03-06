import Link from "next/link"
import { ArrowLeft, Code, Copy } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function DocsPage() {
  return (
    <div className="min-h-screen bg-[#FFF8F0]">
      <header className="container mx-auto py-6 px-4 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <Link href="/" className="flex items-center gap-2">
            <ArrowLeft className="h-5 w-5" />
            <span className="font-medium">Back to Home</span>
          </Link>
        </div>
        <div className="flex items-center gap-2">
          <Code className="h-6 w-6 text-[#E94D35]" />
          <span className="text-xl font-bold text-[#333333]">AfricaVoiceAI API Documentation</span>
        </div>
        <div></div>
      </header>

      <main className="container mx-auto py-8 px-4">
        <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-xl p-6 md:p-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="md:col-span-1">
              <nav className="space-y-1">
                <a href="#introduction" className="block px-3 py-2 rounded-md bg-[#FFF1E6] text-[#E94D35] font-medium">
                  Introduction
                </a>
                <a href="#authentication" className="block px-3 py-2 rounded-md hover:bg-gray-100">
                  Authentication
                </a>
                <a href="#speech-to-text" className="block px-3 py-2 rounded-md hover:bg-gray-100">
                  Speech-to-Text API
                </a>
                <a href="#text-to-speech" className="block px-3 py-2 rounded-md hover:bg-gray-100">
                  Text-to-Speech API
                </a>
                <a href="#translation" className="block px-3 py-2 rounded-md hover:bg-gray-100">
                  Translation API
                </a>
                <a href="#languages" className="block px-3 py-2 rounded-md hover:bg-gray-100">
                  Supported Languages
                </a>
                <a href="#sdks" className="block px-3 py-2 rounded-md hover:bg-gray-100">
                  Client SDKs
                </a>
                <a href="#rate-limits" className="block px-3 py-2 rounded-md hover:bg-gray-100">
                  Rate Limits
                </a>
              </nav>
            </div>

            <div className="md:col-span-3">
              <section id="introduction" className="mb-12">
                <h2 className="text-2xl font-bold mb-4">Introduction</h2>
                <p className="mb-4">
                  Welcome to the AfricaVoiceAI API documentation. Our API provides powerful speech recognition,
                  synthesis, and translation capabilities specifically optimized for African languages.
                </p>
                <p className="mb-4">
                  The API is organized around REST principles. It accepts form-encoded request bodies, returns
                  JSON-encoded responses, and uses standard HTTP response codes and authentication.
                </p>
                <div className="bg-gray-100 p-4 rounded-lg">
                  <p className="text-sm font-medium mb-2">Base URL</p>
                  <div className="flex items-center justify-between bg-gray-800 text-white p-2 rounded">
                    <code>https://api.africavoiceai.com/v1</code>
                    <Button variant="ghost" size="icon" className="h-8 w-8 text-gray-400 hover:text-white">
                      <Copy className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </section>

              <section id="authentication" className="mb-12">
                <h2 className="text-2xl font-bold mb-4">Authentication</h2>
                <p className="mb-4">
                  The AfricaVoiceAI API uses API keys for authentication. You can view and manage your API keys in the
                  <a href="#" className="text-[#E94D35] hover:underline">
                    {" "}
                    AfricaVoiceAI Dashboard
                  </a>
                  .
                </p>
                <p className="mb-4">
                  Authentication is performed via HTTP Bearer Auth. Provide your API key as the bearer token value.
                </p>
                <div className="bg-gray-100 p-4 rounded-lg">
                  <p className="text-sm font-medium mb-2">Example Request with Authentication</p>
                  <div className="bg-gray-800 text-white p-3 rounded overflow-x-auto">
                    <pre>
                      <code>{`curl -X POST https://api.africavoiceai.com/v1/speech-to-text \\
  -H "Authorization: Bearer YOUR_API_KEY" \\
  -H "Content-Type: multipart/form-data" \\
  -F "audio=@recording.wav" \\
  -F "language=swahili"`}</code>
                    </pre>
                  </div>
                </div>
              </section>

              <section id="speech-to-text" className="mb-12">
                <h2 className="text-2xl font-bold mb-4">Speech-to-Text API</h2>
                <p className="mb-4">
                  Convert spoken African languages to text with high accuracy, even in noisy environments.
                </p>

                <h3 className="text-xl font-semibold mt-6 mb-3">Endpoint</h3>
                <div className="flex items-center justify-between bg-gray-800 text-white p-2 rounded mb-4">
                  <code>POST /speech-to-text</code>
                  <Button variant="ghost" size="icon" className="h-8 w-8 text-gray-400 hover:text-white">
                    <Copy className="h-4 w-4" />
                  </Button>
                </div>

                <h3 className="text-xl font-semibold mt-6 mb-3">Request Parameters</h3>
                <div className="overflow-x-auto">
                  <table className="min-w-full border-collapse">
                    <thead>
                      <tr className="bg-gray-100">
                        <th className="border border-gray-200 px-4 py-2 text-left">Parameter</th>
                        <th className="border border-gray-200 px-4 py-2 text-left">Type</th>
                        <th className="border border-gray-200 px-4 py-2 text-left">Required</th>
                        <th className="border border-gray-200 px-4 py-2 text-left">Description</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="border border-gray-200 px-4 py-2">audio</td>
                        <td className="border border-gray-200 px-4 py-2">File</td>
                        <td className="border border-gray-200 px-4 py-2">Yes</td>
                        <td className="border border-gray-200 px-4 py-2">Audio file to transcribe (WAV, MP3, M4A)</td>
                      </tr>
                      <tr>
                        <td className="border border-gray-200 px-4 py-2">language</td>
                        <td className="border border-gray-200 px-4 py-2">String</td>
                        <td className="border border-gray-200 px-4 py-2">Yes</td>
                        <td className="border border-gray-200 px-4 py-2">Language code (e.g., "swahili", "yoruba")</td>
                      </tr>
                      <tr>
                        <td className="border border-gray-200 px-4 py-2">dialect</td>
                        <td className="border border-gray-200 px-4 py-2">String</td>
                        <td className="border border-gray-200 px-4 py-2">No</td>
                        <td className="border border-gray-200 px-4 py-2">
                          Specific dialect (e.g., "coastal", "urban")
                        </td>
                      </tr>
                      <tr>
                        <td className="border border-gray-200 px-4 py-2">noise_reduction</td>
                        <td className="border border-gray-200 px-4 py-2">Boolean</td>
                        <td className="border border-gray-200 px-4 py-2">No</td>
                        <td className="border border-gray-200 px-4 py-2">Apply noise reduction (default: true)</td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <h3 className="text-xl font-semibold mt-6 mb-3">Example Response</h3>
                <div className="bg-gray-800 text-white p-3 rounded overflow-x-auto">
                  <pre>
                    <code>{`{
  "text": "Habari ya leo! Ninafurahi kukutana nawe.",
  "language": "swahili",
  "confidence": 0.95,
  "duration_seconds": 3.2,
  "segments": [
    {
      "text": "Habari ya leo!",
      "start_time": 0.0,
      "end_time": 1.5,
      "confidence": 0.97
    },
    {
      "text": "Ninafurahi kukutana nawe.",
      "start_time": 1.6,
      "end_time": 3.2,
      "confidence": 0.93
    }
  ]
}`}</code>
                  </pre>
                </div>

                <Tabs defaultValue="curl" className="mt-6">
                  <TabsList>
                    <TabsTrigger value="curl">cURL</TabsTrigger>
                    <TabsTrigger value="python">Python</TabsTrigger>
                    <TabsTrigger value="javascript">JavaScript</TabsTrigger>
                  </TabsList>
                  <TabsContent value="curl" className="bg-gray-800 text-white p-3 rounded overflow-x-auto">
                    <pre>
                      <code>{`curl -X POST https://api.africavoiceai.com/v1/speech-to-text \\
  -H "Authorization: Bearer YOUR_API_KEY" \\
  -H "Content-Type: multipart/form-data" \\
  -F "audio=@recording.wav" \\
  -F "language=swahili" \\
  -F "noise_reduction=true"`}</code>
                    </pre>
                  </TabsContent>
                  <TabsContent value="python" className="bg-gray-800 text-white p-3 rounded overflow-x-auto">
                    <pre>
                      <code>{`import requests

url = "https://api.africavoiceai.com/v1/speech-to-text"
headers = {
    "Authorization": "Bearer YOUR_API_KEY"
}
files = {
    "audio": open("recording.wav", "rb")
}
data = {
    "language": "swahili",
    "noise_reduction": "true"
}

response = requests.post(url, headers=headers, files=files, data=data)
print(response.json())`}</code>
                    </pre>
                  </TabsContent>
                  <TabsContent value="javascript" className="bg-gray-800 text-white p-3 rounded overflow-x-auto">
                    <pre>
                      <code>{`const form = new FormData();
form.append('audio', audioFile); // From file input
form.append('language', 'swahili');
form.append('noise_reduction', 'true');

fetch('https://api.africavoiceai.com/v1/speech-to-text', {
  method: 'POST',
  headers: {
    'Authorization': 'Bearer YOUR_API_KEY'
  },
  body: form
})
.then(response => response.json())
.then(data => console.log(data))
.catch(error => console.error('Error:', error));`}</code>
                    </pre>
                  </TabsContent>
                </Tabs>
              </section>

              <div className="text-center mt-8">
                <p className="text-gray-500 mb-4">Ready to get started with AfricaVoiceAI?</p>
                <Button className="bg-[#E94D35] hover:bg-[#D43C25] text-white">Sign Up for API Access</Button>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}

