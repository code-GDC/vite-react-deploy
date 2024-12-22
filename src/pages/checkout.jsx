import React, { useState } from "react";

const CheckoutPage = () => {
  const [shippingMethod, setShippingMethod] = useState("standard");
  const [orderSummary] = useState({
    subtotal: 199.99,
    shipping: shippingMethod === "standard" ? 0 : shippingMethod === "express" ? 10 : 25,
    total: 199.99 + (shippingMethod === "standard" ? 0 : shippingMethod === "express" ? 10 : 25),
  });

  return (
    <div className="max-w-screen-xl mx-auto p-6 bg-white shadow-md rounded-lg">
      <h1 className="text-3xl font-semibold mb-6">Checkout</h1>

      {/* Step 1: Billing Address */}
      <div className="mb-6">
        <h2 className="text-2xl font-semibold mb-4">Billing Address</h2>
        <form>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label htmlFor="first-name" className="block text-sm font-medium text-gray-700">First Name</label>
              <input type="text" id="first-name" name="first-name" className="mt-1 p-2 w-full border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500" required />
            </div>
            <div>
              <label htmlFor="last-name" className="block text-sm font-medium text-gray-700">Last Name</label>
              <input type="text" id="last-name" name="last-name" className="mt-1 p-2 w-full border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500" required />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
              <input type="email" id="email" name="email" className="mt-1 p-2 w-full border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500" required />
            </div>
            <div>
              <label htmlFor="phone" className="block text-sm font-medium text-gray-700">Phone</label>
              <input type="tel" id="phone" name="phone" className="mt-1 p-2 w-full border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500" required />
            </div>
            <div>
              <label htmlFor="address" className="block text-sm font-medium text-gray-700">Street Address</label>
              <input type="text" id="address" name="address" className="mt-1 p-2 w-full border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500" required />
            </div>
            <div>
              <label htmlFor="city" className="block text-sm font-medium text-gray-700">City</label>
              <input type="text" id="city" name="city" className="mt-1 p-2 w-full border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500" required />
            </div>
            <div>
              <label htmlFor="state" className="block text-sm font-medium text-gray-700">State</label>
              <input type="text" id="state" name="state" className="mt-1 p-2 w-full border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500" required />
            </div>
            <div>
              <label htmlFor="zip" className="block text-sm font-medium text-gray-700">Zip Code</label>
              <input type="text" id="zip" name="zip" className="mt-1 p-2 w-full border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500" required />
            </div>
          </div>
        </form>
      </div>

      {/* Step 2: Shipping Method */}
      <div className="mb-6">
        <h2 className="text-2xl font-semibold mb-4">Shipping Method</h2>
        <div className="space-y-4">
          <div className="flex items-center">
            <input
              type="radio"
              id="standard-shipping"
              name="shipping-method"
              className="h-4 w-4 text-indigo-600"
              checked={shippingMethod === "standard"}
              onChange={() => setShippingMethod("standard")}
            />
            <label htmlFor="standard-shipping" className="ml-2 text-sm">Standard Shipping (5-7 Business Days) - Free</label>
          </div>
          <div className="flex items-center">
            <input
              type="radio"
              id="express-shipping"
              name="shipping-method"
              className="h-4 w-4 text-indigo-600"
              checked={shippingMethod === "express"}
              onChange={() => setShippingMethod("express")}
            />
            <label htmlFor="express-shipping" className="ml-2 text-sm">Express Shipping (2-3 Business Days) - $10.00</label>
          </div>
          <div className="flex items-center">
            <input
              type="radio"
              id="overnight-shipping"
              name="shipping-method"
              className="h-4 w-4 text-indigo-600"
              checked={shippingMethod === "overnight"}
              onChange={() => setShippingMethod("overnight")}
            />
            <label htmlFor="overnight-shipping" className="ml-2 text-sm">Overnight Shipping (Next Business Day) - $25.00</label>
          </div>
        </div>
      </div>

      {/* Step 3: Payment Information */}
      <div className="mb-6">
        <h2 className="text-2xl font-semibold mb-4">Payment Information</h2>
        <form>
          <div className="space-y-4">
            <div>
              <label htmlFor="card-number" className="block text-sm font-medium text-gray-700">Card Number</label>
              <input type="text" id="card-number" name="card-number" className="mt-1 p-2 w-full border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500" placeholder="•••• •••• •••• ••••" required />
            </div>
            <div className="grid grid-cols-2 gap-6">
              <div>
                <label htmlFor="expiry-date" className="block text-sm font-medium text-gray-700">Expiry Date</label>
                <input type="text" id="expiry-date" name="expiry-date" className="mt-1 p-2 w-full border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500" placeholder="MM/YY" required />
              </div>
              <div>
                <label htmlFor="cvv" className="block text-sm font-medium text-gray-700">CVV</label>
                <input type="text" id="cvv" name="cvv" className="mt-1 p-2 w-full border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500" placeholder="•••" required />
              </div>
            </div>
          </div>
        </form>
      </div>

      {/* Step 4: Order Summary */}
      <div className="mb-6">
        <h2 className="text-2xl font-semibold mb-4">Order Summary</h2>
        <div className="space-y-4">
          <div className="flex justify-between">
            <span className="text-sm">Subtotal</span>
            <span className="text-sm">${orderSummary.subtotal.toFixed(2)}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-sm">Shipping</span>
            <span className="text-sm">${orderSummary.shipping.toFixed(2)}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-sm font-semibold">Total</span>
            <span className="text-sm font-semibold">${orderSummary.total.toFixed(2)}</span>
          </div>
        </div>
      </div>

      {/* Checkout Button */}
      <div className="flex justify-end">
        <button className="bg-indigo-600 text-white px-6 py-3 rounded-md hover:bg-indigo-700 transition-colors duration-300">
          Complete Order
        </button>
      </div>
    </div>
  );
};

export default CheckoutPage;
