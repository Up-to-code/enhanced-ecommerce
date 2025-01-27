"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export default function CheckoutPage() {
  const [step, setStep] = useState(1)

  const renderShippingForm = () => (
    <div className="space-y-4">
      <h2 className="text-2xl font-semibold mb-4">Shipping Information</h2>
      <div className="grid grid-cols-2 gap-4">
        <div>
          <Label htmlFor="firstName">First Name</Label>
          <Input id="firstName" placeholder="John" />
        </div>
        <div>
          <Label htmlFor="lastName">Last Name</Label>
          <Input id="lastName" placeholder="Doe" />
        </div>
      </div>
      <div>
        <Label htmlFor="address">Address</Label>
        <Input id="address" placeholder="123 Main St" />
      </div>
      <div className="grid grid-cols-2 gap-4">
        <div>
          <Label htmlFor="city">City</Label>
          <Input id="city" placeholder="New York" />
        </div>
        <div>
          <Label htmlFor="zipCode">Zip Code</Label>
          <Input id="zipCode" placeholder="10001" />
        </div>
      </div>
      <div>
        <Label htmlFor="country">Country</Label>
        <Select>
          <SelectTrigger id="country">
            <SelectValue placeholder="Select a country" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="us">United States</SelectItem>
            <SelectItem value="ca">Canada</SelectItem>
            <SelectItem value="uk">United Kingdom</SelectItem>
          </SelectContent>
        </Select>
      </div>
      <Button onClick={() => setStep(2)}>Continue to Payment</Button>
    </div>
  )

  const renderPaymentForm = () => (
    <div className="space-y-4">
      <h2 className="text-2xl font-semibold mb-4">Payment Information</h2>
      <RadioGroup defaultValue="card">
        <div className="flex items-center space-x-2">
          <RadioGroupItem value="card" id="card" />
          <Label htmlFor="card">Credit Card</Label>
        </div>
        <div className="flex items-center space-x-2">
          <RadioGroupItem value="paypal" id="paypal" />
          <Label htmlFor="paypal">PayPal</Label>
        </div>
      </RadioGroup>
      <div>
        <Label htmlFor="cardNumber">Card Number</Label>
        <Input id="cardNumber" placeholder="1234 5678 9012 3456" />
      </div>
      <div className="grid grid-cols-2 gap-4">
        <div>
          <Label htmlFor="expiryDate">Expiry Date</Label>
          <Input id="expiryDate" placeholder="MM/YY" />
        </div>
        <div>
          <Label htmlFor="cvv">CVV</Label>
          <Input id="cvv" placeholder="123" />
        </div>
      </div>
      <Button onClick={() => setStep(3)}>Place Order</Button>
    </div>
  )

  const renderConfirmation = () => (
    <div className="text-center">
      <h2 className="text-2xl font-semibold mb-4">Order Confirmed!</h2>
      <p>Thank you for your purchase. Your order has been placed successfully.</p>
      <Button className="mt-4" asChild>
        <a href="/">Return to Home</a>
      </Button>
    </div>
  )

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Checkout</h1>
      {step === 1 && renderShippingForm()}
      {step === 2 && renderPaymentForm()}
      {step === 3 && renderConfirmation()}
    </div>
  )
}

