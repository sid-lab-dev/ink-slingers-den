import { useParams, Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Clock, Bookmark, Share2, ThumbsUp, MessageCircle, ArrowLeft } from "lucide-react";
import techImage from "@/assets/article-tech.jpg";
import designImage from "@/assets/article-design.jpg";
import travelImage from "@/assets/article-travel.jpg";

const articles: Record<string, any> = {
  "1": {
    title: "The Future of Web Development: Trends to Watch in 2025",
    author: "Sarah Johnson",
    readTime: "8 min read",
    date: "March 15, 2025",
    image: techImage,
    content: `
      <p>The landscape of web development is constantly evolving, and 2025 promises to bring exciting new trends and technologies that will reshape how we build and interact with the web. As we stand at this technological crossroads, it's crucial to understand which trends will define the future of our industry.</p>

      <h2>The Rise of AI-Powered Development</h2>
      <p>Artificial Intelligence is no longer just a buzzword—it's becoming an integral part of the development workflow. From code completion to automated testing, AI tools are helping developers work more efficiently and catch errors before they reach production. The integration of large language models into IDEs has fundamentally changed how we approach problem-solving in code.</p>

      <p>These tools aren't replacing developers; they're augmenting our capabilities. They help us write better documentation, generate boilerplate code, and even suggest optimizations we might have missed. The key is learning to work alongside these tools effectively.</p>

      <h2>WebAssembly's Growing Impact</h2>
      <p>WebAssembly (Wasm) continues to gain traction as a way to run high-performance applications in the browser. Languages like Rust, Go, and C++ can now compile to Wasm, bringing desktop-level performance to web applications. This opens up possibilities for complex applications that were previously impossible in the browser.</p>

      <h2>The Shift Toward Edge Computing</h2>
      <p>Edge computing is moving processing closer to users, reducing latency and improving user experience. Modern frameworks are embracing edge-first architectures, allowing developers to deploy serverless functions globally. This shift is particularly important for applications that require real-time interactions and low latency.</p>

      <p>As we move forward, the lines between frontend and backend continue to blur. Full-stack frameworks that support edge deployment out of the box are becoming the norm, making it easier than ever to build globally distributed applications.</p>

      <h2>Conclusion</h2>
      <p>The future of web development is bright and full of possibilities. By staying informed about these trends and continuously learning, we can build better, faster, and more accessible web applications. The key is to embrace change while maintaining focus on what matters most: creating great experiences for our users.</p>
    `,
  },
  "2": {
    title: "Design Systems: Building Consistency at Scale",
    author: "Michael Chen",
    readTime: "6 min read",
    date: "March 14, 2025",
    image: designImage,
    content: `
      <p>In today's fast-paced digital landscape, maintaining design consistency across products and teams is more challenging than ever. Design systems have emerged as the solution, providing a single source of truth for design patterns, components, and guidelines.</p>

      <h2>What Makes a Great Design System?</h2>
      <p>A successful design system goes beyond just a collection of UI components. It encompasses design principles, accessibility guidelines, interaction patterns, and clear documentation. The best design systems are living entities that evolve with the needs of the organization.</p>

      <p>At its core, a design system should empower teams to build consistent, accessible, and beautiful products faster. It should reduce decision fatigue and allow designers and developers to focus on solving user problems rather than reinventing common patterns.</p>

      <h2>Building for Scale</h2>
      <p>As organizations grow, so do their design challenges. A robust design system can scale from a small startup to a large enterprise. The key is starting with solid foundations: a clear design language, well-documented components, and flexible tokens for theming and customization.</p>

      <p>Version control and governance become crucial at scale. Teams need processes for proposing changes, reviewing contributions, and maintaining backwards compatibility. The most successful design systems have dedicated teams that champion adoption and provide support.</p>
    `,
  },
  "3": {
    title: "Remote Work Revolution: Finding Balance in a Digital World",
    author: "Emma Williams",
    readTime: "7 min read",
    date: "March 13, 2025",
    image: travelImage,
    content: `
      <p>The shift to remote work has fundamentally changed how we approach our careers and daily lives. While it offers unprecedented flexibility and freedom, it also brings unique challenges that require intentional strategies to overcome.</p>

      <h2>Creating Boundaries</h2>
      <p>One of the biggest challenges of remote work is separating work life from personal life when both happen in the same space. Establishing clear boundaries—both physical and temporal—is essential. A dedicated workspace, even if it's just a corner of a room, can help signal to your brain when it's time to work and when it's time to relax.</p>

      <h2>Staying Connected</h2>
      <p>Remote work doesn't mean working in isolation. Building and maintaining connections with colleagues is crucial for collaboration, creativity, and mental health. Regular video calls, virtual coffee chats, and collaborative tools help bridge the physical distance.</p>

      <p>The future of work is hybrid, flexible, and human-centered. By embracing these principles while staying mindful of the challenges, we can create work environments that support both productivity and well-being.</p>
    `,
  },
};

const Article = () => {
  const { id } = useParams();
  const article = articles[id || "1"];

  if (!article) {
    return <div>Article not found</div>;
  }

  return (
    <div className="flex min-h-screen flex-col">
      <Header />

      <main className="flex-1">
        <article className="container max-w-4xl py-8">
          <Link to="/" className="inline-flex items-center text-sm text-muted-foreground hover:text-primary mb-8 transition-colors">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to articles
          </Link>

          {/* Article Header */}
          <header className="mb-12 space-y-6">
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
              {article.title}
            </h1>

            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <Avatar className="h-12 w-12">
                  <AvatarFallback className="bg-primary text-primary-foreground">
                    {article.author.split(' ').map((n: string) => n[0]).join('')}
                  </AvatarFallback>
                </Avatar>
                <div>
                  <p className="font-semibold">{article.author}</p>
                  <div className="flex items-center space-x-3 text-sm text-muted-foreground">
                    <span>{article.date}</span>
                    <span>•</span>
                    <div className="flex items-center space-x-1">
                      <Clock className="h-4 w-4" />
                      <span>{article.readTime}</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex items-center space-x-2">
                <Button variant="ghost" size="icon" className="rounded-full">
                  <Bookmark className="h-5 w-5" />
                </Button>
                <Button variant="ghost" size="icon" className="rounded-full">
                  <Share2 className="h-5 w-5" />
                </Button>
              </div>
            </div>
          </header>

          {/* Featured Image */}
          <div className="mb-12 overflow-hidden rounded-2xl shadow-[var(--shadow-card)]">
            <img
              src={article.image}
              alt={article.title}
              className="w-full aspect-[21/9] object-cover"
            />
          </div>

          {/* Article Content */}
          <div 
            className="article-content prose prose-lg max-w-none"
            dangerouslySetInnerHTML={{ __html: article.content }}
          />

          {/* Article Actions */}
          <div className="mt-16 flex items-center justify-between border-t border-border/40 pt-8">
            <div className="flex items-center space-x-4">
              <Button variant="outline" size="sm">
                <ThumbsUp className="mr-2 h-4 w-4" />
                125
              </Button>
              <Button variant="outline" size="sm">
                <MessageCircle className="mr-2 h-4 w-4" />
                24 Comments
              </Button>
            </div>
            <Button variant="outline" size="sm">
              <Share2 className="mr-2 h-4 w-4" />
              Share
            </Button>
          </div>

          {/* Author Bio */}
          <div className="mt-12 rounded-2xl bg-muted/30 p-8">
            <div className="flex items-start space-x-4">
              <Avatar className="h-16 w-16">
                <AvatarFallback className="bg-primary text-primary-foreground text-lg">
                  {article.author.split(' ').map((n: string) => n[0]).join('')}
                </AvatarFallback>
              </Avatar>
              <div className="flex-1">
                <p className="text-lg font-semibold mb-2">{article.author}</p>
                <p className="text-muted-foreground mb-4">
                  Passionate writer and technologist sharing insights on modern development practices and digital innovation.
                </p>
                <Button variant="outline" size="sm">
                  Follow
                </Button>
              </div>
            </div>
          </div>
        </article>
      </main>

      <Footer />
    </div>
  );
};

export default Article;
