import { Link } from "react-router-dom";
import { Code2, Github, Twitter } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t bg-background">
      <div className="container py-8 md:py-12">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
          <div className="space-y-3">
            <div className="flex items-center space-x-2">
              <Code2 className="h-5 w-5" />
              <span className="font-bold">L1AR</span>
            </div>
            <p className="text-sm text-muted-foreground">
              Beautiful, reusable components built with React and Tailwind CSS.
            </p>
          </div>
          
          <div className="space-y-3">
            <h4 className="text-sm font-semibold">Getting Started</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  to="/docs"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  Installation
                </Link>
              </li>
              <li>
                <Link
                  to="/docs"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  Theming
                </Link>
              </li>
            </ul>
          </div>
          
          <div className="space-y-3">
            <h4 className="text-sm font-semibold">Components</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  to="/components"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  All Components
                </Link>
              </li>
              <li>
                <Link
                  to="/components/button"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  Button
                </Link>
              </li>
            </ul>
          </div>
          
          <div className="space-y-3">
            <h4 className="text-sm font-semibold">Community</h4>
            <div className="flex space-x-3">
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                <Github className="h-5 w-5" />
                <span className="sr-only">GitHub</span>
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </a>
            </div>
          </div>
        </div>
        
        <div className="mt-8 border-t pt-6 text-center text-sm text-muted-foreground">
          <p>&copy; 2024 L1AR. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}