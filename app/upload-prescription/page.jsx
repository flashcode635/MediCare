"use client"

import { useState } from "react"
import { Upload, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card } from "@/components/ui/card"

export default function UploadPrescriptionPage() {
  const [files, setFiles] = useState([])
  const [dragging, setDragging] = useState(false)

  const handleDrag = (e) => {
    e.preventDefault()
    e.stopPropagation()
  }

  const handleDragIn = (e) => {
    e.preventDefault()
    e.stopPropagation()
    setDragging(true)
  }

  const handleDragOut = (e) => {
    e.preventDefault()
    e.stopPropagation()
    setDragging(false)
  }

  const handleDrop = (e) => {
    e.preventDefault()
    e.stopPropagation()
    setDragging(false)

    const newFiles = [...e.dataTransfer.files]
    setFiles((prev) => [...prev, ...newFiles])
  }

  const removeFile = (index) => {
    setFiles((prev) => prev.filter((_, i) => i !== index))
  }

  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <Card className="p-8">
        <h1 className="text-2xl font-bold text-center mb-6">Upload Prescription</h1>

        <div
          className={`border-2 border-dashed rounded-lg p-8 text-center ${
            dragging ? "border-primary bg-primary/5" : "border-gray-300"
          }`}
          onDragEnter={handleDragIn}
          onDragLeave={handleDragOut}
          onDragOver={handleDrag}
          onDrop={handleDrop}
        >
          <Upload className="mx-auto h-12 w-12 text-gray-400" />
          <p className="mt-4 text-sm text-gray-600">Drag and drop your prescription here, or</p>
          <Input
            type="file"
            accept="image/*,.pdf"
            multiple
            onChange={(e) => setFiles((prev) => [...prev, ...e.target.files])}
            className="hidden"
            id="file-upload"
          />
          <label htmlFor="file-upload">
            <Button variant="outline" className="mt-2" as="span">
              Browse Files
            </Button>
          </label>
        </div>

        {files.length > 0 && (
          <div className="mt-6">
            <h3 className="font-semibold mb-4">Uploaded Files</h3>
            <div className="space-y-2">
              {files.map((file, index) => (
                <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                  <span className="text-sm text-gray-600">{file.name}</span>
                  <Button variant="ghost" size="icon" onClick={() => removeFile(index)}>
                    <X className="h-4 w-4" />
                  </Button>
                </div>
              ))}
            </div>
          </div>
        )}

        <div className="mt-8">
          <h3 className="font-semibold mb-4">Delivery Details</h3>
          <div className="space-y-4">
            <Input placeholder="Full Name" />
            <Input placeholder="Phone Number" />
            <Input placeholder="Delivery Address" />
            <Input placeholder="Pin Code" />
          </div>
        </div>

        <Button className="w-full mt-6">Submit Prescription</Button>

        <p className="mt-4 text-sm text-gray-500 text-center">
          By uploading your prescription, you agree to our Terms of Service and Privacy Policy
        </p>
      </Card>
    </div>
  )
}

