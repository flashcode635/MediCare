"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent } from "@/components/ui/card"
import { Bell, Plus, Trash } from "lucide-react"

export default function RemindersPage() {
  const [reminders, setReminders] = useState([
    {
      id: 1,
      medicineName: "Paracetamol",
      time: "09:00",
      frequency: "daily",
    },
    {
      id: 2,
      medicineName: "Vitamin C",
      time: "14:00",
      frequency: "daily",
    },
  ])

  const [newReminder, setNewReminder] = useState({
    medicineName: "",
    time: "",
    frequency: "daily",
  })

  const addReminder = (e) => {
    e.preventDefault()
    if (newReminder.medicineName && newReminder.time) {
      setReminders([
        ...reminders,
        {
          id: Date.now(),
          ...newReminder,
        },
      ])
      setNewReminder({
        medicineName: "",
        time: "",
        frequency: "daily",
      })
    }
  }

  const deleteReminder = (id) => {
    setReminders(reminders.filter((reminder) => reminder.id !== id))
  }

  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-bold">Medicine Reminders</h1>
        <Bell className="h-6 w-6 text-primary" />
      </div>

      <Card className="mb-8">
        <CardContent className="p-6">
          <form onSubmit={addReminder} className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <Input
                placeholder="Medicine Name"
                value={newReminder.medicineName}
                onChange={(e) =>
                  setNewReminder({
                    ...newReminder,
                    medicineName: e.target.value,
                  })
                }
              />
              <Input
                type="time"
                value={newReminder.time}
                onChange={(e) =>
                  setNewReminder({
                    ...newReminder,
                    time: e.target.value,
                  })
                }
              />
              <select
                value={newReminder.frequency}
                onChange={(e) =>
                  setNewReminder({
                    ...newReminder,
                    frequency: e.target.value,
                  })
                }
                className="w-full p-2 border rounded-md"
              >
                <option value="daily">Daily</option>
                <option value="weekly">Weekly</option>
                <option value="monthly">Monthly</option>
              </select>
            </div>
            <Button type="submit" className="w-full">
              <Plus className="h-4 w-4 mr-2" />
              Add Reminder
            </Button>
          </form>
        </CardContent>
      </Card>

      <div className="space-y-4">
        {reminders.map((reminder) => (
          <Card key={reminder.id}>
            <CardContent className="p-4">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="font-semibold">{reminder.medicineName}</h3>
                  <p className="text-sm text-gray-500">
                    {reminder.time} - {reminder.frequency}
                  </p>
                </div>
                <Button variant="ghost" size="icon" onClick={() => deleteReminder(reminder.id)}>
                  <Trash className="h-4 w-4" />
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}

