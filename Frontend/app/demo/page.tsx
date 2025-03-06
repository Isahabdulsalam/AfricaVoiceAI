"use client"

import { useState } from "react"
import Link from "next/link"
import { Mic, Volume2, Globe, Pause, Play, ArrowLeft, Loader2, RefreshCw, Download } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Slider } from "@/components/ui/slider"
import { Switch } from "@/components/ui/switch"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export default function DemoPage() {
  const [isRecording, setIsRecording] = useState(false)
  const [isProcessing, setIsProcessing] = useState(false)
  const [transcription, setTranscription] = useState("")
  const [sourceLanguage, setSourceLanguage] = useState("swahili")
  const [targetLanguage, setTargetLanguage] = useState("english")
  const [textToSpeak, setTextToSpeak] = useState("")
  const [isPlaying, setIsPlaying] = useState(false)

  const handleStartRecording = () => {
    setIsRecording(true)
    // In a real app, this would start the recording process
  }

  const handleStopRecording = () => {
    setIsRecording(false)
    setIsProcessing(true)

    // Simulate processing delay
    setTimeout(() => {
      setIsProcessing(false)
      setTranscription("Habari ya leo! Ninafurahi kukutana nawe. Jina langu ni Maria.")
    }, 2000)
  }

  const handleGenerateSpeech = () => {
    setIsProcessing(true)

    // Simulate processing delay
    setTimeout(() => {
      setIsProcessing(false)
      setIsPlaying(true)
    }, 2000)
  }

  const handleTranslate = () => {
    setIsProcessing(true)

    // Simulate processing delay
    setTimeout(() => {
      setIsProcessing(false)
      if (transcription) {
        setTranscription(
          "Habari ya leo! Ninafurahi kukutana nawe. Jina langu ni Maria.\n\nTranslation: Hello today! I'm happy to meet you. My name is Maria.",
        )
      }
    }, 2000)
  }

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
          <Volume2 className="h-6 w-6 text-[#E94D35]" />
          <span className="text-xl font-bold text-[#333333]">AfricaVoiceAI Demo</span>
        </div>
        <div></div>
      </header>

      <main className="container mx-auto py-8 px-4">
        <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-xl p-6 md:p-8">
          <Tabs defaultValue="speech-to-text" className="w-full">
            <TabsList className="grid grid-cols-3 mb-8">
              <TabsTrigger value="speech-to-text" className="text-sm md:text-base">
                <Mic className="h-4 w-4 mr-2" />
                Speech-to-Text
              </TabsTrigger>
              <TabsTrigger value="text-to-speech" className="text-sm md:text-base">
                <Volume2 className="h-4 w-4 mr-2" />
                Text-to-Speech
              </TabsTrigger>
              <TabsTrigger value="translation" className="text-sm md:text-base">
                <Globe className="h-4 w-4 mr-2" />
                Translation
              </TabsTrigger>
            </TabsList>

            <TabsContent value="speech-to-text" className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-lg font-semibold mb-4">Settings</h3>
                  <div className="space-y-4">
                    <div>
                      <Label htmlFor="language">Language</Label>
                      <Select defaultValue={sourceLanguage} onValueChange={setSourceLanguage}>
                        <SelectTrigger id="language">
                          <SelectValue placeholder="Select language" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="swahili">Swahili</SelectItem>
                          <SelectItem value="yoruba">Yoruba</SelectItem>
                          <SelectItem value="amharic">Amharic</SelectItem>
                          <SelectItem value="hausa">Hausa</SelectItem>
                          <SelectItem value="igbo">Igbo</SelectItem>
                          <SelectItem value="zulu">Zulu</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div>
                      <Label htmlFor="dialect">Dialect (Optional)</Label>
                      <Select defaultValue="standard">
                        <SelectTrigger id="dialect">
                          <SelectValue placeholder="Select dialect" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="standard">Standard</SelectItem>
                          <SelectItem value="coastal">Coastal</SelectItem>
                          <SelectItem value="urban">Urban</SelectItem>
                          <SelectItem value="rural">Rural</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="flex items-center justify-between">
                      <div className="space-y-0.5">
                        <Label htmlFor="noise-reduction">Noise Reduction</Label>
                        <div className="text-sm text-gray-500">Filter background noise</div>
                      </div>
                      <Switch id="noise-reduction" defaultChecked />
                    </div>

                    <div>
                      <div className="flex justify-between mb-2">
                        <Label>Sensitivity</Label>
                        <span className="text-sm text-gray-500">Medium</span>
                      </div>
                      <Slider defaultValue={[50]} max={100} step={1} />
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-semibold mb-4">Record Audio</h3>
                  <div className="flex flex-col items-center justify-center h-40 bg-gray-50 rounded-lg mb-4">
                    {isProcessing ? (
                      <div className="flex flex-col items-center">
                        <Loader2 className="h-12 w-12 text-[#E94D35] animate-spin" />
                        <p className="mt-2 text-gray-600">Processing audio...</p>
                      </div>
                    ) : isRecording ? (
                      <Button
                        className="bg-red-500 hover:bg-red-600 text-white h-20 w-20 rounded-full"
                        onClick={handleStopRecording}
                      >
                        <Pause className="h-8 w-8" />
                      </Button>
                    ) : (
                      <Button
                        className="bg-[#E94D35] hover:bg-[#D43C25] text-white h-20 w-20 rounded-full"
                        onClick={handleStartRecording}
                      >
                        <Mic className="h-8 w-8" />
                      </Button>
                    )}
                  </div>
                  <div className="text-center">
                    {isRecording ? (
                      <p className="text-red-500 font-medium">Recording... Click to stop</p>
                    ) : (
                      <p className="text-gray-600">Click the microphone to start recording</p>
                    )}
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-4">Transcription</h3>
                <div className="bg-gray-50 rounded-lg p-4 min-h-32">
                  {transcription ? (
                    <p>{transcription}</p>
                  ) : (
                    <p className="text-gray-400 italic">Transcription will appear here...</p>
                  )}
                </div>
                <div className="flex justify-end gap-2 mt-4">
                  <Button variant="outline" disabled={!transcription}>
                    <Download className="h-4 w-4 mr-2" />
                    Download
                  </Button>
                  <Button variant="outline" disabled={!transcription} onClick={handleTranslate}>
                    <Globe className="h-4 w-4 mr-2" />
                    Translate
                  </Button>
                  <Button variant="outline" onClick={() => setTranscription("")} disabled={!transcription}>
                    <RefreshCw className="h-4 w-4 mr-2" />
                    Clear
                  </Button>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="text-to-speech" className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-lg font-semibold mb-4">Settings</h3>
                  <div className="space-y-4">
                    <div>
                      <Label htmlFor="tts-language">Language</Label>
                      <Select defaultValue="swahili">
                        <SelectTrigger id="tts-language">
                          <SelectValue placeholder="Select language" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="swahili">Swahili</SelectItem>
                          <SelectItem value="yoruba">Yoruba</SelectItem>
                          <SelectItem value="amharic">Amharic</SelectItem>
                          <SelectItem value="hausa">Hausa</SelectItem>
                          <SelectItem value="igbo">Igbo</SelectItem>
                          <SelectItem value="zulu">Zulu</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div>
                      <Label htmlFor="voice">Voice</Label>
                      <Select defaultValue="female1">
                        <SelectTrigger id="voice">
                          <SelectValue placeholder="Select voice" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="female1">Amina (Female)</SelectItem>
                          <SelectItem value="female2">Zuri (Female)</SelectItem>
                          <SelectItem value="male1">Kwame (Male)</SelectItem>
                          <SelectItem value="male2">Jabari (Male)</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div>
                      <div className="flex justify-between mb-2">
                        <Label>Speaking Rate</Label>
                        <span className="text-sm text-gray-500">Normal</span>
                      </div>
                      <Slider defaultValue={[50]} max={100} step={1} />
                    </div>

                    <div>
                      <div className="flex justify-between mb-2">
                        <Label>Pitch</Label>
                        <span className="text-sm text-gray-500">Medium</span>
                      </div>
                      <Slider defaultValue={[50]} max={100} step={1} />
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-semibold mb-4">Text Input</h3>
                  <textarea
                    className="w-full h-40 p-4 border border-gray-200 rounded-lg resize-none focus:outline-none focus:ring-2 focus:ring-[#E94D35]"
                    placeholder="Enter text to convert to speech..."
                    value={textToSpeak}
                    onChange={(e) => setTextToSpeak(e.target.value)}
                  ></textarea>
                  <div className="flex justify-end gap-2 mt-4">
                    {isProcessing ? (
                      <Button disabled>
                        <Loader2 className="h-4 w-4 mr-2 animate-spin" />
                        Processing...
                      </Button>
                    ) : isPlaying ? (
                      <Button
                        className="bg-[#E94D35] hover:bg-[#D43C25] text-white"
                        onClick={() => setIsPlaying(false)}
                      >
                        <Pause className="h-4 w-4 mr-2" />
                        Pause
                      </Button>
                    ) : (
                      <Button
                        className="bg-[#E94D35] hover:bg-[#D43C25] text-white"
                        onClick={handleGenerateSpeech}
                        disabled={!textToSpeak.trim()}
                      >
                        <Play className="h-4 w-4 mr-2" />
                        Generate & Play
                      </Button>
                    )}
                    <Button variant="outline" disabled={!isPlaying}>
                      <Download className="h-4 w-4 mr-2" />
                      Download Audio
                    </Button>
                  </div>
                </div>
              </div>

              {isPlaying && (
                <div className="bg-gray-50 rounded-lg p-4">
                  <div className="flex items-center gap-4">
                    <Button
                      size="icon"
                      variant="outline"
                      className="h-10 w-10 rounded-full"
                      onClick={() => setIsPlaying(false)}
                    >
                      <Pause className="h-4 w-4" />
                    </Button>
                    <div className="w-full">
                      <Slider defaultValue={[30]} max={100} step={1} />
                      <div className="flex justify-between text-xs text-gray-500 mt-1">
                        <span>0:12</span>
                        <span>0:40</span>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </TabsContent>

            <TabsContent value="translation" className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <div className="flex justify-between mb-4">
                    <h3 className="text-lg font-semibold">Source Language</h3>
                    <Button variant="ghost" size="sm" className="h-8 text-[#E94D35]">
                      <RefreshCw className="h-3 w-3 mr-1" />
                      Clear
                    </Button>
                  </div>
                  <Select defaultValue={sourceLanguage} onValueChange={setSourceLanguage}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select language" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="swahili">Swahili</SelectItem>
                      <SelectItem value="yoruba">Yoruba</SelectItem>
                      <SelectItem value="amharic">Amharic</SelectItem>
                      <SelectItem value="hausa">Hausa</SelectItem>
                      <SelectItem value="igbo">Igbo</SelectItem>
                      <SelectItem value="zulu">Zulu</SelectItem>
                      <SelectItem value="english">English</SelectItem>
                      <SelectItem value="french">French</SelectItem>
                    </SelectContent>
                  </Select>
                  <textarea
                    className="w-full h-40 p-4 border border-gray-200 rounded-lg resize-none focus:outline-none focus:ring-2 focus:ring-[#E94D35] mt-4"
                    placeholder="Enter text to translate..."
                    value={transcription || ""}
                    onChange={(e) => setTranscription(e.target.value)}
                  ></textarea>
                  <div className="flex items-center gap-2 mt-2">
                    <Button
                      size="icon"
                      variant="outline"
                      className="rounded-full h-8 w-8"
                      onClick={handleStartRecording}
                      disabled={isRecording}
                    >
                      <Mic className="h-4 w-4" />
                    </Button>
                    <p className="text-sm text-gray-500">Click to dictate</p>
                  </div>
                </div>

                <div>
                  <div className="flex justify-between mb-4">
                    <h3 className="text-lg font-semibold">Target Language</h3>
                    <Button
                      variant="outline"
                      size="icon"
                      className="h-8 w-8"
                      onClick={() => {
                        const temp = sourceLanguage
                        setSourceLanguage(targetLanguage)
                        setTargetLanguage(temp)
                      }}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M17 1l4 4-4 4"></path>
                        <path d="M3 11V9a4 4 0 0 1 4-4h14"></path>
                        <path d="M7 23l-4-4 4-4"></path>
                        <path d="M21 13v2a4 4 0 0 1-4 4H3"></path>
                      </svg>
                    </Button>
                  </div>
                  <Select defaultValue={targetLanguage} onValueChange={setTargetLanguage}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select language" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="swahili">Swahili</SelectItem>
                      <SelectItem value="yoruba">Yoruba</SelectItem>
                      <SelectItem value="amharic">Amharic</SelectItem>
                      <SelectItem value="hausa">Hausa</SelectItem>
                      <SelectItem value="igbo">Igbo</SelectItem>
                      <SelectItem value="zulu">Zulu</SelectItem>
                      <SelectItem value="english">English</SelectItem>
                      <SelectItem value="french">French</SelectItem>
                    </SelectContent>
                  </Select>
                  <div className="w-full h-40 p-4 border border-gray-200 rounded-lg mt-4 bg-gray-50">
                    {transcription.includes("Translation:") ? (
                      <div>
                        <p className="text-gray-500 mb-2">Original:</p>
                        <p className="mb-4">Habari ya leo! Ninafurahi kukutana nawe. Jina langu ni Maria.</p>
                        <p className="text-gray-500 mb-2">Translation:</p>
                        <p>Hello today! I'm happy to meet you. My name is Maria.</p>
                      </div>
                    ) : (
                      <p className="text-gray-400 italic">Translation will appear here...</p>
                    )}
                  </div>
                  <div className="flex justify-end gap-2 mt-4">
                    <Button variant="outline" disabled={!transcription.includes("Translation:")}>
                      <Download className="h-4 w-4 mr-2" />
                      Download
                    </Button>
                    <Button
                      className="bg-[#E94D35] hover:bg-[#D43C25] text-white"
                      onClick={handleTranslate}
                      disabled={!transcription || isProcessing}
                    >
                      {isProcessing ? (
                        <>
                          <Loader2 className="h-4 w-4 mr-2 animate-spin" />
                          Translating...
                        </>
                      ) : (
                        <>
                          <Globe className="h-4 w-4 mr-2" />
                          Translate
                        </>
                      )}
                    </Button>
                  </div>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </main>
    </div>
  )
}

