import { Link } from "react-router-dom";
import { Clock, Bookmark } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";

interface ArticleCardProps {
  id: string;
  title: string;
  excerpt: string;
  author: string;
  readTime: string;
  date: string;
  image: string;
}

const ArticleCard = ({ id, title, excerpt, author, readTime, date, image }: ArticleCardProps) => {
  return (
    <Card className="group overflow-hidden border-0 shadow-[var(--shadow-card)] transition-all duration-300 hover:shadow-[var(--shadow-hover)]">
      <Link to={`/article/${id}`}>
        <div className="relative aspect-[16/9] overflow-hidden">
          <img
            src={image}
            alt={title}
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
        </div>
        <div className="p-6">
          <div className="mb-3 flex items-center space-x-3">
            <Avatar className="h-8 w-8">
              <AvatarFallback className="bg-primary text-primary-foreground text-sm">
                {author.split(' ').map(n => n[0]).join('')}
              </AvatarFallback>
            </Avatar>
            <div className="flex-1">
              <p className="text-sm font-medium">{author}</p>
            </div>
          </div>

          <h3 className="mb-2 text-xl font-bold leading-tight transition-colors group-hover:text-primary line-clamp-2">
            {title}
          </h3>
          <p className="mb-4 text-muted-foreground line-clamp-2">{excerpt}</p>

          <div className="flex items-center justify-between text-sm text-muted-foreground">
            <div className="flex items-center space-x-4">
              <span>{date}</span>
              <div className="flex items-center space-x-1">
                <Clock className="h-4 w-4" />
                <span>{readTime}</span>
              </div>
            </div>
            <button className="transition-colors hover:text-primary">
              <Bookmark className="h-5 w-5" />
            </button>
          </div>
        </div>
      </Link>
    </Card>
  );
};

export default ArticleCard;
