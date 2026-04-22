"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { useState, useRef, useCallback } from "react";
import { Form, FormField, FormItem, FormLabel, FormControl, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { TurnstileWidget } from "./TurnstileWidget";
import { toast } from "sonner";

const formSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters long"),
  email: z.string().email("Invalid email address"),
  message: z.string().min(10, "Message must be at least 10 characters long"),
});

export function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [turnstileToken, setTurnstileToken] = useState<string | null>(null);
  const widgetIdRef = useRef<string | null>(null);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: { name: "", email: "", message: "" },
  });

  const resetTurnstile = useCallback(() => {
    if (widgetIdRef.current && window.turnstile) {
      window.turnstile.reset(widgetIdRef.current);
      setTurnstileToken(null);
    }
  }, []);

  async function onSubmit(data: z.infer<typeof formSchema>) {
    if (!turnstileToken) {
      toast("Please complete the security check before sending.", {
        position: "bottom-right",
        duration: 4000,
      });
      return;
    }

    setIsSubmitting(true);
    try {
      const response = await fetch("/api/email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...data, turnstileToken }),
      });

      const result = await response.json();

      if (response.ok) {
        toast("Message sent successfully! I'll get back to you soon.", {
          position: "bottom-right",
          duration: 5000,
        });
        form.reset();
      } else {
        toast(result.error || "Failed to send message. Please try again.", {
          position: "bottom-right",
          duration: 5000,
        });
      }
    } catch (error) {
      console.error("Form submission error:", error);
      toast("Network error. Please check your connection and try again.", {
        position: "bottom-right",
        duration: 5000,
      });
    } finally {
      setIsSubmitting(false);
      resetTurnstile();
    }
  }

  return (
    <div className="w-full max-w-xl mx-auto rounded-lg">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          <div className="space-y-4">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-foreground">Name</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Your Name"
                      {...field}
                      className="w-full bg-input text-foreground border-border"
                      disabled={isSubmitting}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-foreground">Email</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Your Email"
                      type="email"
                      {...field}
                      className="w-full bg-input text-foreground border-border"
                      disabled={isSubmitting}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="message"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-foreground">Message</FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder="Your Message"
                      {...field}
                      className="w-full h-50 bg-input text-foreground border-border resize-none"
                      disabled={isSubmitting}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <div className="flex flex-col-reverse items-center gap-4 sm:flex-row sm:items-center sm:justify-between">
            <Button
              type="submit"
              disabled={isSubmitting || !turnstileToken}
            >
              {isSubmitting ? "Sending..." : "Send Message"}
            </Button>

            <TurnstileWidget
              onSuccess={setTurnstileToken}
              onExpire={() => setTurnstileToken(null)}
              onError={() => setTurnstileToken(null)}
              widgetIdRef={widgetIdRef}
            />
          </div>
        </form>
      </Form>
    </div>
  );
}
