"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import { ArrowLeft, Download, ExternalLink } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Progress } from "@/components/ui/progress"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function Dashboard() {
  const [uploadProgress, setUploadProgress] = useState(0)

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0]
    if (file) {
      // Simulate file upload progress
      let progress = 0
      const interval = setInterval(() => {
        progress += 10
        setUploadProgress(progress)
        if (progress >= 100) {
          clearInterval(interval)
          // Here you would typically process the uploaded file
          console.log("File uploaded:", file.name)
        }
      }, 500)
    }
  }

  return (
    <div className="min-h-screen bg-[#FFF8F0]">
      <header className="container mx-auto py-6 px-4 flex justify-between items-center">
        <Link href="/" className="flex items-center gap-2">
          <ArrowLeft className="h-5 w-5" />
          <span className="font-medium">Back to Home</span>
        </Link>
        <h1 className="text-2xl font-bold text-[#333333]">AfricaVoiceAI Dashboard</h1>
        <div></div>
      </header>

      <main className="container mx-auto py-8 px-4">
        <Tabs defaultValue="upload" className="w-full">
          <TabsList className="grid w-full grid-cols-4 mb-8">
            <TabsTrigger value="upload">Upload Samples</TabsTrigger>
            <TabsTrigger value="customize">Customize Models</TabsTrigger>
            <TabsTrigger value="accuracy">Accuracy Tracking</TabsTrigger>
            <TabsTrigger value="mobile">Mobile Integration</TabsTrigger>
          </TabsList>

          <TabsContent value="upload">
            <Card>
              <CardHeader>
                <CardTitle>Upload Voice Samples</CardTitle>
                <CardDescription>Upload voice samples to improve our AI models for your dialect.</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid w-full max-w-sm items-center gap-1.5">
                  <Label htmlFor="voice-sample">Voice Sample</Label>
                  <Input id="voice-sample" type="file" accept="audio/*" onChange={handleFileUpload} />
                </div>
                {uploadProgress > 0 && (
                  <div className="mt-4">
                    <Progress value={uploadProgress} className="w-full" />
                    <p className="text-sm text-gray-500 mt-2">Upload progress: {uploadProgress}%</p>
                  </div>
                )}
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="customize">
            <Card>
              <CardHeader>
                <CardTitle>Customize Voice Models</CardTitle>
                <CardDescription>Adjust parameters to fine-tune the AI for your specific needs.</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid gap-4">
                  <div className="grid grid-cols-4 items-center gap-4">
                    <Label htmlFor="dialect">Dialect</Label>
                    <Input id="dialect" className="col-span-3" placeholder="e.g., Coastal Swahili" />
                  </div>
                  <div className="grid grid-cols-4 items-center gap-4">
                    <Label htmlFor="accent">Accent Strength</Label>
                    <Input id="accent" type="range" min="0" max="100" className="col-span-3" />
                  </div>
                  <div className="grid grid-cols-4 items-center gap-4">
                    <Label htmlFor="speed">Speech Speed</Label>
                    <Input id="speed" type="range" min="0" max="100" className="col-span-3" />
                  </div>
                  <Button className="mt-4">Save Customizations</Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="accuracy">
            <Card>
              <CardHeader>
                <CardTitle>Transcription Accuracy Tracking</CardTitle>
                <CardDescription>Monitor the performance of our AI models for your language.</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span>Overall Accuracy</span>
                    <span className="font-bold">92%</span>
                  </div>
                  <Progress value={92} className="w-full" />
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <h4 className="font-semibold mb-2">Accuracy by Dialect</h4>
                      <ul className="space-y-2">
                        <li className="flex justify-between">
                          <span>Standard Swahili</span>
                          <span>95%</span>
                        </li>
                        <li className="flex justify-between">
                          <span>Coastal Swahili</span>
                          <span>89%</span>
                        </li>
                        <li className="flex justify-between">
                          <span>Tanzanian Swahili</span>
                          <span>91%</span>
                        </li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2">Recent Improvements</h4>
                      <ul className="space-y-2">
                        <li className="flex justify-between">
                          <span>Last Week</span>
                          <span className="text-green-500">+2%</span>
                        </li>
                        <li className="flex justify-between">
                          <span>Last Month</span>
                          <span className="text-green-500">+5%</span>
                        </li>
                        <li className="flex justify-between">
                          <span>Last Quarter</span>
                          <span className="text-green-500">+8%</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="mobile">
            <Card>
              <CardHeader>
                <CardTitle>Mobile Integration</CardTitle>
                <CardDescription>Seamlessly integrate AfricaVoiceAI with your mobile applications.</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <h4 className="font-semibold mb-2">Android SDK</h4>
                      <p className="text-sm text-gray-500 mb-2">Version 1.2.3</p>
                      <Button className="w-full">
                        <Download className="mr-2 h-4 w-4" /> Download SDK
                      </Button>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2">iOS SDK</h4>
                      <p className="text-sm text-gray-500 mb-2">Version 1.1.5</p>
                      <Button className="w-full">
                        <Download className="mr-2 h-4 w-4" /> Download SDK
                      </Button>
                    </div>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">API Documentation</h4>
                    <p className="text-sm text-gray-500 mb-2">Comprehensive guide for integrating our API</p>
                    <Button variant="outline" className="w-full">
                      <ExternalLink className="mr-2 h-4 w-4" /> View Documentation
                    </Button>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Sample Projects</h4>
                    <ul className="space-y-2">
                      <li>
                        <a href="#" className="text-blue-500 hover:underline">
                          Android Voice Recorder App
                        </a>
                      </li>
                      <li>
                        <a href="#" className="text-blue-500 hover:underline">
                          iOS Translation Assistant
                        </a>
                      </li>
                      <li>
                        <a href="#" className="text-blue-500 hover:underline">
                          React Native Multilingual Chat
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </main>
    </div>
  )
}