"use client";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import LabelText from "../../components/LabelText";
import { useEffect, useRef, useState } from "react";
import { appConfig } from "../../configs/AppConfig";

export default function ContactUsSection() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState("");
  const [cfToken, setCfToken] = useState("");
  const turnstileRef = useRef(null);

  useEffect(() => {
    const loadTurnstile = () => {
      if (window.turnstile) {
        window.turnstile.render(turnstileRef.current, {
          sitekey: `${appConfig.cfSiteKey}`,
          callback: (token) => {
            setCfToken(token);
          },
        });
      } else {
        setTimeout(loadTurnstile, 500);
      }
    };

    if (!window.turnstile) {
      const script = document.createElement("script");
      script.src =
        "https://challenges.cloudflare.com/turnstile/v0/api.js?render=explicit";
      script.async = true;
      script.onload = loadTurnstile;
      document.body.appendChild(script);
    } else {
      loadTurnstile();
    }
  }, []);

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
          cfToken: cfToken,
        }),
      });

      const result = await response.json();
      if (result.error) {
        setStatus("Bot verification failed. Please try again.");
      } else {
        setStatus("Message sent successfully!");
        setForm({ name: "", email: "", message: "" });
      }
    } catch (error) {
      setStatus("Message sent successfully!");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      className={
        "contact-us-section sections background-blur-center sections py-48 md:text-start"
      }
      id={"contact"}
      aria-label={"Contact Us"}
    >
      <LabelText text={"Contacts"} />
      <div className="flex flex-col items-center justify-center px-6 text-white md:flex-row md:px-12">
        <div className="space-y-4 pt-8 md:w-1/2 md:pt-0 max-w-xl">
          <h2 className="text-4xl font-bold">Let's Connect!</h2>
          <p className="text-xl text-gray-200">
            Have questions or need assistance? We’re here to help. Get in touch
            with us today!
          </p>
        </div>

        <div className="mt-6 w-full max-w-lg rounded-lg p-6 text-start shadow-lg md:ml-12 md:mt-0 md:w-1/2">
          <form className="space-y-4" onSubmit={handleSubmit}>
            <div>
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
            <div>
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
            <div>
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
            <div ref={turnstileRef} className="cf-turnstile"></div>

            <Button className="w-full" type="submit" disabled={loading}>
              {loading ? "Submitting..." : "Submit"}
            </Button>
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