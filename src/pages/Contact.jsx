import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Card } from "@/components/ui/card";
import { Mail, MessageSquare, HelpCircle } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();

  const handleSubmit = (e) => {
    e.preventDefault();
    toast({
      title: "Message sent!",
      description: "We'll get back to you as soon as possible.",
    });
  };

  return (
    <div className="flex min-h-screen flex-col">
      <Header />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="border-b border-border/40 bg-gradient-to-b from-background to-muted/30 py-16">
          <div className="container">
            <div className="mx-auto max-w-3xl text-center">
              <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
                Get in <span className="text-primary">Touch</span>
              </h1>
              <p className="mt-4 text-lg text-muted-foreground">
                Have a question or feedback? We'd love to hear from you. 
                Send us a message and we'll respond as soon as possible.
              </p>
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="container">
            <div className="mx-auto max-w-5xl">
              <div className="grid gap-8 lg:grid-cols-3">
                {/* Contact Info Cards */}
                <div className="space-y-6">
                  <Card className="p-6 space-y-3">
                    <div className="inline-flex rounded-lg bg-primary/10 p-3">
                      <Mail className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="text-lg font-semibold">Email Us</h3>
                    <p className="text-sm text-muted-foreground">
                      Our team is here to help with any questions or concerns.
                    </p>
                    <a href="mailto:hello@blogspace.com" className="text-sm text-primary hover:underline">
                      hello@blogspace.com
                    </a>
                  </Card>

                  <Card className="p-6 space-y-3">
                    <div className="inline-flex rounded-lg bg-primary/10 p-3">
                      <MessageSquare className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="text-lg font-semibold">Live Chat</h3>
                    <p className="text-sm text-muted-foreground">
                      Chat with our support team for immediate assistance.
                    </p>
                    <Button variant="outline" size="sm" className="w-full">
                      Start Chat
                    </Button>
                  </Card>

                  <Card className="p-6 space-y-3">
                    <div className="inline-flex rounded-lg bg-primary/10 p-3">
                      <HelpCircle className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="text-lg font-semibold">Help Center</h3>
                    <p className="text-sm text-muted-foreground">
                      Browse our help articles and FAQs for quick answers.
                    </p>
                    <Button variant="outline" size="sm" className="w-full">
                      Visit Help Center
                    </Button>
                  </Card>
                </div>

                {/* Contact Form */}
                <Card className="lg:col-span-2 p-8">
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="space-y-2">
                      <h2 className="text-2xl font-bold">Send us a message</h2>
                      <p className="text-muted-foreground">
                        Fill out the form below and we'll get back to you within 24 hours.
                      </p>
                    </div>

                    <div className="grid gap-6 sm:grid-cols-2">
                      <div className="space-y-2">
                        <Label htmlFor="firstName">First Name</Label>
                        <Input id="firstName" placeholder="John" required />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="lastName">Last Name</Label>
                        <Input id="lastName" placeholder="Doe" required />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="email">Email</Label>
                      <Input id="email" type="email" placeholder="john@example.com" required />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="subject">Subject</Label>
                      <Input id="subject" placeholder="How can we help?" required />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="message">Message</Label>
                      <Textarea
                        id="message"
                        placeholder="Tell us more about your inquiry..."
                        rows={6}
                        required
                      />
                    </div>

                    <Button type="submit" size="lg" className="w-full bg-primary hover:bg-primary/90">
                      Send Message
                    </Button>
                  </form>
                </Card>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Contact;
