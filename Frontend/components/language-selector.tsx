"use client"

import { useState } from "react"
import { Check, ChevronDown } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList } from "@/components/ui/command"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"

const languages = [
  { value: "swahili", label: "Swahili" },
  { value: "yoruba", label: "Yoruba" },
  { value: "amharic", label: "Amharic" },
  { value: "hausa", label: "Hausa" },
  { value: "igbo", label: "Igbo" },
  { value: "zulu", label: "Zulu" },
  { value: "xhosa", label: "Xhosa" },
  { value: "twi", label: "Twi" },
  { value: "wolof", label: "Wolof" },
  { value: "oromo", label: "Oromo" },
  { value: "somali", label: "Somali" },
  { value: "kinyarwanda", label: "Kinyarwanda" },
]

export default function LanguageSelector() {
  const [open, setOpen] = useState(false)
  const [value, setValue] = useState("swahili")

  return (
    <div className="w-full">
      <label className="block text-sm font-medium text-gray-700 mb-2">Select Language</label>
      <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger asChild>
          <Button variant="outline" role="combobox" aria-expanded={open} className="w-full justify-between">
            {value ? languages.find((language) => language.value === value)?.label : "Select language..."}
            <ChevronDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-full p-0">
          <Command>
            <CommandInput placeholder="Search language..." />
            <CommandList>
              <CommandEmpty>No language found.</CommandEmpty>
              <CommandGroup>
                {languages.map((language) => (
                  <CommandItem
                    key={language.value}
                    value={language.value}
                    onSelect={(currentValue) => {
                      setValue(currentValue === value ? "" : currentValue)
                      setOpen(false)
                    }}
                  >
                    <Check className={`mr-2 h-4 w-4 ${value === language.value ? "opacity-100" : "opacity-0"}`} />
                    {language.label}
                  </CommandItem>
                ))}
              </CommandGroup>
            </CommandList>
          </Command>
        </PopoverContent>
      </Popover>
    </div>
  )
}