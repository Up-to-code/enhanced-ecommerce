"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function AccountPage() {
  const [profile, setProfile] = useState({
    name: "John Doe",
    email: "john.doe@example.com",
  })

  const handleProfileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setProfile((prevState) => ({ ...prevState, [name]: value }))
  }

  const handleProfileSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Here you would typically update the user's profile in your backend
    console.log("Profile updated:", profile)
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Your Account</h1>
      <Tabs defaultValue="profile">
        <TabsList>
          <TabsTrigger value="profile">Profile</TabsTrigger>
          <TabsTrigger value="orders">Orders</TabsTrigger>
          <TabsTrigger value="wishlist">Wishlist</TabsTrigger>
        </TabsList>
        <TabsContent value="profile">
          <form onSubmit={handleProfileSubmit} className="space-y-4 mt-4">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                Name
              </label>
              <Input type="text" id="name" name="name" value={profile.name} onChange={handleProfileChange} />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                Email
              </label>
              <Input type="email" id="email" name="email" value={profile.email} onChange={handleProfileChange} />
            </div>
            <Button type="submit">Update Profile</Button>
          </form>
        </TabsContent>
        <TabsContent value="orders">
          <div className="space-y-4 mt-4">
            <h2 className="text-xl font-semibold">Your Orders</h2>
            {[1, 2, 3].map((order) => (
              <div key={order} className="border p-4 rounded-lg">
                <p>
                  <strong>Order #{order}</strong>
                </p>
                <p>Date: {new Date().toLocaleDateString()}</p>
                <p>Total: $99.99</p>
                <Button variant="outline" className="mt-2">
                  View Details
                </Button>
              </div>
            ))}
          </div>
        </TabsContent>
        <TabsContent value="wishlist">
          <div className="space-y-4 mt-4">
            <h2 className="text-xl font-semibold">Your Wishlist</h2>
            {[1, 2, 3].map((item) => (
              <div key={item} className="border p-4 rounded-lg flex justify-between items-center">
                <div>
                  <p>
                    <strong>Product {item}</strong>
                  </p>
                  <p>$49.99</p>
                </div>
                <Button>Add to Cart</Button>
              </div>
            ))}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}

