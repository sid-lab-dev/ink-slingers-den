import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Users, Target, Heart, Sparkles } from "lucide-react";
import { siteConfig } from "@/config/site";

const About = () => {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="border-b border-border/40 bg-gradient-to-b from-background to-muted/30 py-20">
          <div className="container">
            <div className="mx-auto max-w-3xl text-center">
              <h1 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
                About <span className="text-primary">{siteConfig.name}</span>
              </h1>
              <p className="mt-6 text-xl text-muted-foreground leading-relaxed">
                A platform where writers and readers come together to share ideas, 
                stories, and insights that matter.
              </p>
            </div>
          </div>
        </section>

        {/* Mission Section */}
        <section className="py-20">
          <div className="container">
            <div className="mx-auto max-w-4xl">
              <div className="grid gap-12 md:grid-cols-2">
                <div className="space-y-4">
                  <div className="inline-flex rounded-lg bg-primary/10 p-3">
                    <Target className="h-6 w-6 text-primary" />
                  </div>
                  <h2 className="text-2xl font-bold">Our Mission</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    To democratize content creation and provide a space where every voice 
                    can be heard. We believe in the power of storytelling to connect people, 
                    inspire change, and foster understanding across communities.
                  </p>
                </div>

                <div className="space-y-4">
                  <div className="inline-flex rounded-lg bg-primary/10 p-3">
                    <Heart className="h-6 w-6 text-primary" />
                  </div>
                  <h2 className="text-2xl font-bold">Our Values</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    We're committed to authenticity, diversity, and quality. Every piece 
                    of content on {siteConfig.name} is crafted with care, and we strive to maintain 
                    a respectful, inclusive environment for all our community members.
                  </p>
                </div>

                <div className="space-y-4">
                  <div className="inline-flex rounded-lg bg-primary/10 p-3">
                    <Users className="h-6 w-6 text-primary" />
                  </div>
                  <h2 className="text-2xl font-bold">Our Community</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    Join thousands of writers and millions of readers who make {siteConfig.name} 
                    their home. From tech enthusiasts to creative writers, our diverse 
                    community brings together perspectives from around the world.
                  </p>
                </div>

                <div className="space-y-4">
                  <div className="inline-flex rounded-lg bg-primary/10 p-3">
                    <Sparkles className="h-6 w-6 text-primary" />
                  </div>
                  <h2 className="text-2xl font-bold">Our Vision</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    To become the most trusted platform for long-form content, where 
                    quality and authenticity triumph over clickbait, and where meaningful 
                    conversations flourish.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="border-t border-border/40 bg-muted/30 py-20">
          <div className="container">
            <div className="mx-auto max-w-3xl text-center space-y-6">
              <h2 className="text-3xl font-bold tracking-tight">Join Our Journey</h2>
              <p className="text-xl text-muted-foreground">
                Whether you're here to read, write, or both, we're excited to have you 
                as part of our growing community.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Button size="lg" className="bg-primary hover:bg-primary/90">
                  Start Writing Today
                </Button>
                <Button size="lg" variant="outline">
                  Explore Articles
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default About;
