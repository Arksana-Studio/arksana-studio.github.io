"use client";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import LabelText from "../../components/LabelText";
import React, { useState } from "react";
import { appConfig } from "../../configs/AppConfig";
import Turnstile, { useTurnstile } from "react-turnstile";
import { Toaster } from "../../components/ui/toaster";
import { useToast } from "@/hooks/use-toast"

export default function ContactUsSection() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState("");
  const [cfToken, setCfToken] = useState("");
  const turnstile = useTurnstile();
  const { toast } = useToast();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    if (!cfToken) {
      setStatus("Please complete the bot verification!");
      setLoading(false);
      return;
    }

    try {
      const response = await fetch(`${appConfig.googleScript}`, {
        method: "POST",
        mode: "no-cors",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...form,
          cfToken: `${cfToken}`,
        }),
      });

      const result = await response.json();
      if (result.error) {
        toast.error("Failed to send message!");
      } else {
        setForm({ name: "", email: "", message: "" });
        toast.success("Message sent successfully!");
      }
    } catch (error) {
      setForm({ name: "", email: "", message: "" });
      console.log("Success");
      toast.success("Message sent successfully!");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      className={
        "contact-us-section sections background-blur-center sections flex flex-col items-center justify-start py-48 text-center md:block md:text-start"
      }
      id={"contact"}
      aria-label={"Contact Us"}
    >
      <Toaster />
      <LabelText text={"Contacts"} className={"text-center"} />
      <div className="flex flex-col items-center justify-center text-white md:flex-row md:px-12">
        <div className="space-y-4 px-6 pt-8 md:w-1/2 md:pt-0">
          <h2 className="text-4xl font-bold">Let's Connect!</h2>
          <p className="px-2 text-xl text-gray-200">
            Have questions or need assistance? We’re here to help. Get in touch
            with us today!
          </p>
          <div>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3989.8176432980345!2d109.300157411009!3d-0.033378735540873394!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e1d5964a009d6e9%3A0x4228b973c657ada6!2sArksana%20Studio!5e0!3m2!1sen!2sid!4v1741878519818!5m2!1sen!2sid"
              width="100%"
              height="300"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>

        <div className="mt-6 w-full max-w-lg rounded-lg text-start shadow-lg md:ml-12 md:mt-0 md:w-1/2">
          <form className="space-y-4" onSubmit={handleSubmit}>
            <div className={"px-4"}>
              <label className="mb-2 block text-sm">Name</label>
              <Input
                type="text"
                name="name"
                placeholder="Your Name"
                value={form.name}
                onChange={handleChange}
                required
              />
            </div>
            <div className={"px-4"}>
              <label className="mb-2 block text-sm">Email</label>
              <Input
                type="email"
                name="email"
                placeholder="Your Email"
                value={form.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className={"px-4"}>
              <label className="mb-2 block text-sm">Message</label>
              <Textarea
                maxLength={255}
                minLength={10}
                name="message"
                placeholder="Hi, I am reaching out for..."
                value={form.message}
                onChange={handleChange}
                required
              />
            </div>
            {/* Hide*/}
            <div className="w-full overflow-hidden pl-4">
              <Turnstile
                className={""}
                sitekey={appConfig.cfSiteKey}
                size={"normal"}
                style={{ width: "100%" }}
                onVerify={(token) => {
                  setCfToken(token);
                }}
              />
            </div>
            <div className="w-full px-4">
              <Button className="w-full" type="submit" disabled={loading}>
                {loading ? "Submitting..." : "Submit"}
              </Button>
            </div>
            {
              <p
                className={
                  "text-sm text-white " +
                  (status == "success" ? "text-green-500" : "text-red-500")
                }
              >
                {status}
              </p>
            }
          </form>
        </div>
      </div>
    </div>
  );
}