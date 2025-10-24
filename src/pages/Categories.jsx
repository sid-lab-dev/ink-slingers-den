import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";
import { Code, Palette, Plane, Heart, BookOpen, TrendingUp, Coffee, Camera } from "lucide-react";
import { Card } from "@/components/ui/card";

const categories = [
  {
    name: "Technology",
    slug: "technology",
    description: "Web development, AI, software engineering, and the latest in tech innovation",
    icon: Code,
    articleCount: 127,
    color: "from-blue-500/20 to-cyan-500/20",
  },
  {
    name: "Design",
    slug: "design",
    description: "UI/UX design, branding, creative processes, and visual storytelling",
    icon: Palette,
    articleCount: 89,
    color: "from-purple-500/20 to-pink-500/20",
  },
  {
    name: "Travel",
    slug: "travel",
    description: "Adventures, destinations, travel tips, and cultural experiences",
    icon: Plane,
    articleCount: 156,
    color: "from-green-500/20 to-emerald-500/20",
  },
  {
    name: "Lifestyle",
    slug: "lifestyle",
    description: "Health, wellness, personal growth, and everyday inspiration",
    icon: Heart,
    articleCount: 203,
    color: "from-red-500/20 to-orange-500/20",
  },
  {
    name: "Writing",
    slug: "writing",
    description: "Creative writing, storytelling techniques, and the craft of words",
    icon: BookOpen,
    articleCount: 94,
    color: "from-indigo-500/20 to-blue-500/20",
  },
  {
    name: "Business",
    slug: "business",
    description: "Entrepreneurship, marketing, productivity, and career development",
    icon: TrendingUp,
    articleCount: 112,
    color: "from-yellow-500/20 to-amber-500/20",
  },
  {
    name: "Food & Culture",
    slug: "food-culture",
    description: "Culinary adventures, recipes, and cultural explorations through cuisine",
    icon: Coffee,
    articleCount: 78,
    color: "from-orange-500/20 to-red-500/20",
  },
  {
    name: "Photography",
    slug: "photography",
    description: "Visual arts, photography techniques, and capturing moments",
    icon: Camera,
    articleCount: 67,
    color: "from-teal-500/20 to-cyan-500/20",
  },
];

const Categories = () => {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="border-b border-border/40 bg-gradient-to-b from-background to-muted/30 py-16">
          <div className="container">
            <div className="mx-auto max-w-3xl text-center">
              <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
                Explore by <span className="text-primary">Category</span>
              </h1>
              <p className="mt-4 text-lg text-muted-foreground">
                Discover stories that match your interests. From technology to travel, 
                find content that inspires you.
              </p>
            </div>
          </div>
        </section>

        {/* Categories Grid */}
        <section className="py-16">
          <div className="container">
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              {categories.map((category) => {
                const Icon = category.icon;
                return (
                  <Link key={category.slug} to={`/category/${category.slug}`}>
                    <Card className="group relative h-full overflow-hidden border-2 transition-all hover:border-primary hover:shadow-[var(--shadow-hover)] cursor-pointer">
                      <div className={`absolute inset-0 bg-gradient-to-br ${category.color} opacity-0 transition-opacity group-hover:opacity-100`} />
                      <div className="relative p-6 space-y-4">
                        <div className="flex items-start justify-between">
                          <div className="inline-flex rounded-lg bg-primary/10 p-3 transition-colors group-hover:bg-primary/20">
                            <Icon className="h-6 w-6 text-primary" />
                          </div>
                          <span className="text-sm text-muted-foreground">
                            {category.articleCount} articles
                          </span>
                        </div>
                        <div className="space-y-2">
                          <h3 className="text-xl font-bold group-hover:text-primary transition-colors">
                            {category.name}
                          </h3>
                          <p className="text-sm text-muted-foreground leading-relaxed">
                            {category.description}
                          </p>
                        </div>
                      </div>
                    </Card>
                  </Link>
                );
              })}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Categories;
