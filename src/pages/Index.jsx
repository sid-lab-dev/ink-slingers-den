import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ArticleCard from "@/components/ArticleCard";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/config/site";
import heroImage from "@/assets/hero-blog.jpg";
import techImage from "@/assets/article-tech.jpg";
import designImage from "@/assets/article-design.jpg";
import travelImage from "@/assets/article-travel.jpg";

const articles = [
  {
    id: "1",
    title: "The Future of Web Development: Trends to Watch in 2025",
    excerpt: "Exploring the latest technologies and frameworks that are shaping the future of web development, from AI integration to revolutionary new paradigms.",
    author: "Sarah Johnson",
    readTime: "8 min read",
    date: "Mar 15, 2025",
    image: techImage,
  },
  {
    id: "2",
    title: "Design Systems: Building Consistency at Scale",
    excerpt: "How modern design systems are revolutionizing the way teams collaborate and build products with unified visual languages and components.",
    author: "Michael Chen",
    readTime: "6 min read",
    date: "Mar 14, 2025",
    image: designImage,
  },
  {
    id: "3",
    title: "Remote Work Revolution: Finding Balance in a Digital World",
    excerpt: "Navigating the challenges and opportunities of remote work while maintaining productivity, creativity, and work-life balance.",
    author: "Emma Williams",
    readTime: "7 min read",
    date: "Mar 13, 2025",
    image: travelImage,
  },
  {
    id: "4",
    title: "The Art of Minimalist Design in Modern Applications",
    excerpt: "Understanding how less can be more when it comes to creating intuitive, beautiful user interfaces that put content first.",
    author: "David Martinez",
    readTime: "5 min read",
    date: "Mar 12, 2025",
    image: designImage,
  },
  {
    id: "5",
    title: "Building Scalable APIs: Best Practices and Patterns",
    excerpt: "A comprehensive guide to architecting RESTful and GraphQL APIs that can handle millions of requests with grace and efficiency.",
    author: "Lisa Anderson",
    readTime: "10 min read",
    date: "Mar 11, 2025",
    image: techImage,
  },
  {
    id: "6",
    title: "Travel Photography: Capturing Stories Around the World",
    excerpt: "Tips and techniques for documenting your adventures and telling compelling visual stories through the lens of your camera.",
    author: "James Wilson",
    readTime: "6 min read",
    date: "Mar 10, 2025",
    image: travelImage,
  },
];

const Index = () => {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />

      {/* Hero Section */}
      <section className="relative overflow-hidden border-b border-border/40 bg-gradient-to-b from-background to-muted/30">
        <div className="container py-24 lg:py-32">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <h1 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
                  {siteConfig.tagline.split(' ').slice(0, 2).join(' ')}
                  <span className="block text-primary">{siteConfig.tagline.split(' ').slice(2).join(' ')}</span>
                </h1>
                <p className="text-xl text-muted-foreground leading-relaxed">
                  {siteConfig.description}
                </p>
              </div>
              <div className="flex flex-wrap gap-4">
                <Button size="lg" className="bg-primary hover:bg-primary/90">
                  Start Reading
                </Button>
                <Button size="lg" variant="outline">
                  Start Writing
                </Button>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-[4/3] overflow-hidden rounded-2xl shadow-[var(--shadow-hover)]">
                <img
                  src={heroImage}
                  alt="Writing and creativity"
                  className="h-full w-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Articles Section */}
      <main className="flex-1 py-16">
        <div className="container">
          <div className="mb-12">
            <h2 className="text-3xl font-bold tracking-tight">Latest Articles</h2>
            <p className="mt-2 text-muted-foreground">
              Explore our collection of stories from diverse voices and perspectives
            </p>
          </div>
          
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {articles.map((article) => (
              <ArticleCard key={article.id} {...article} />
            ))}
          </div>

          <div className="mt-12 text-center">
            <Button variant="outline" size="lg">
              Load More Articles
            </Button>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Index;
