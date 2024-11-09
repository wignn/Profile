"use client";

import { Message } from "@/lib/actions";
import React, { useState } from "react";

const ContactForm = () => {
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    service: "",
    message: "",
  });
  const [status, setStatus] = useState<{
    success: boolean | null;
    message: string;
  }>({ success: null, message: "" });
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus({ success: null, message: "" });
    setIsLoading(true);

    try {
      await Message(form);
      setStatus({
        success: true,
        message: "Message sent successfully!",
      });
      setForm({
        firstName: "",
        lastName: "",
        email: "",
        phoneNumber: "",
        service: "",
        message: "",
      });
    } catch {
      setStatus({
        success: false,
        message: "Failed to send message. Please try again.",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="bg-[#140c1c] rounded-lg p-4 sm:p-10">
      <h1 className="text-bg text-2xl md:text-3xl lg:text-[2.5rem] font-bold">
        Let&apos;s work together!
      </h1>
      <p className="text-gray-200 mt-3 lg:text-base text-xs md:text-sm">
        I am available for freelance work. Connect with me via email:
      </p>

      {status.message && (
        <div
          className={`mt-4 p-3 rounded-lg ${
            status.success ? "bg-green-500" : "bg-red-500"
          } text-white text-center`}
        >
          {status.message}
        </div>
      )}

      <form
        onSubmit={handleSubmit}
        className="mt-8 block w-full overflow-hidden"
      >
        {/* Fields */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <input
            type="text"
            placeholder="First Name"
            className="flex-1 bg-black text-white placeholder:text-gray-600 px-6 py-3 rounded-md border-[1.5px] border-gray-200 border-opacity-15 outline-none w-full"
            value={form.firstName}
            onChange={(e) => setForm({ ...form, firstName: e.target.value })}
          />
          <input
            type="text"
            placeholder="Last Name"
            className="flex-1 bg-black text-white placeholder:text-gray-600 px-6 py-3 rounded-md border-[1.5px] border-gray-200 border-opacity-15 outline-none w-full"
            value={form.lastName}
            onChange={(e) => setForm({ ...form, lastName: e.target.value })}
          />
        </div>

        <div className="flex mt-5 flex-col md:flex-row items-center justify-between gap-4">
          <input
            type="text"
            placeholder="Email"
            className="flex-1 bg-black text-white placeholder:text-gray-600 px-6 py-3 rounded-md border-[1.5px] border-gray-200 border-opacity-15 outline-none w-full"
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
          />
          <input
            type="text"
            placeholder="Phone Number"
            className="flex-1 bg-black text-white placeholder:text-gray-600 px-6 py-3 rounded-md border-[1.5px] border-gray-200 border-opacity-15 outline-none w-full"
            value={form.phoneNumber}
            onChange={(e) => setForm({ ...form, phoneNumber: e.target.value })}
          />
        </div>

        <div>
          <label htmlFor="service" className="sr-only">
            Select Service
          </label>
          <select
            name="service"
            id="service"
            className="bg-black w-full mt-5 text-white placeholder:text-gray-600 px-4 py-3.5 rounded-md border-[1.5px] border-gray-200 border-opacity-15 outline-none"
            value={form.service}
            onChange={(e) => setForm({ ...form, service: e.target.value })}
          >
            <option value="" disabled>
              Select Service
            </option>
            <option value="frontend">FrontEnd Development</option>
            <option value="backend">BackEnd Development</option>
            <option value="fullstack">FullStack Development</option>
          </select>
        </div>

        <textarea
          rows={7}
          placeholder="Message"
          className="bg-black w-full mt-5 text-white placeholder:text-gray-600 px-4 py-3.5 rounded-md border-[1.5px] border-gray-200 border-opacity-15 outline-none"
          value={form.message}
          onChange={(e) => setForm({ ...form, message: e.target.value })}
        />

        <div className="mt-4 flex justify-center">
          <button
            type="submit"
            className="px-8 py-3.5 bg-[#7947df] text-white hover:bg-[#5c2fb7] transition-all duration-150 rounded-full"
            disabled={isLoading}
          >
            {isLoading ? "Sending..." : "Send Message"}
          </button>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
