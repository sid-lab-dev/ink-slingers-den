import { Link } from "react-router-dom";
import { PenSquare } from "lucide-react";

const Footer = () => {
  return (
    <footer className="border-t border-border/40 bg-muted/30">
      <div className="container py-12">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
          <div className="space-y-4">
            <Link to="/" className="flex items-center space-x-2">
              <PenSquare className="h-6 w-6 text-primary" />
              <span className="text-xl font-bold">BlogSpace</span>
            </Link>
            <p className="text-sm text-muted-foreground">
              A platform where ideas come to life. Share your stories with the world.
            </p>
          </div>

          <div>
            <h3 className="mb-4 text-sm font-semibold">Explore</h3>
            <ul className="space-y-3 text-sm">
              <li>
                <Link to="/" className="text-muted-foreground transition-colors hover:text-primary">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/" className="text-muted-foreground transition-colors hover:text-primary">
                  Popular
                </Link>
              </li>
              <li>
                <Link to="/" className="text-muted-foreground transition-colors hover:text-primary">
                  Trending
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-sm font-semibold">Community</h3>
            <ul className="space-y-3 text-sm">
              <li>
                <Link to="/" className="text-muted-foreground transition-colors hover:text-primary">
                  About
                </Link>
              </li>
              <li>
                <Link to="/" className="text-muted-foreground transition-colors hover:text-primary">
                  Guidelines
                </Link>
              </li>
              <li>
                <Link to="/" className="text-muted-foreground transition-colors hover:text-primary">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-sm font-semibold">Legal</h3>
            <ul className="space-y-3 text-sm">
              <li>
                <Link to="/" className="text-muted-foreground transition-colors hover:text-primary">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="/" className="text-muted-foreground transition-colors hover:text-primary">
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-border/40 pt-8 text-center text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} BlogSpace. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
