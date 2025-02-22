"use client"

export function initializeRazorpay(options) {
  return new Promise((resolve) => {
    const script = document.createElement("script")
    script.src = "https://checkout.razorpay.com/v1/checkout.js"

    script.onload = () => {
      const rzp = new window.Razorpay(options)
      resolve(rzp)
    }

    document.body.appendChild(script)
  })
}

export async function handlePayment(amount) {
  const options = {
    key: process.env.NEXT_PUBLIC_RAZORPAY_KEY,
    amount: amount * 100, // Amount in paise
    currency: "INR",
    name: "MediQuick",
    description: "Medicine Purchase",
    handler: (response) => {
      // Handle successful payment
      console.log(response)
    },
    prefill: {
      name: "",
      email: "",
      contact: "",
    },
    theme: {
      color: "#0070f3",
    },
  }

  const rzp = await initializeRazorpay(options)
  rzp.open()
}

