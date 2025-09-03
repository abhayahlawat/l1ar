import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { IconsSidebar } from "@/components/icons-sidebar";
import { CodeBlock } from "@/components/code-block";
import { useToast } from "@/hooks/use-toast";
import { iconExamples } from "@/data/icon-examples";
import { Copy, Check, Search } from "lucide-react";
import * as LucideIcons from "lucide-react";

const Icons = () => {
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("General");
  const [searchQuery, setSearchQuery] = useState("");
  const [copiedIcon, setCopiedIcon] = useState<string | null>(null);
  const { toast } = useToast();

  const toggleSidebar = () => {
    setIsSidebarCollapsed(!isSidebarCollapsed);
  };

  const handleCategorySelect = (category: string) => {
    setSelectedCategory(category);
  };

  const copyIconCode = async (iconName: string, component: string) => {
    const code = `import { ${component} } from "lucide-react"

<${component} className="h-6 w-6" />`;
    
    try {
      await navigator.clipboard.writeText(code);
      setCopiedIcon(iconName);
      toast({
        title: "Copied to clipboard",
        description: `${iconName} icon code has been copied to your clipboard.`,
      });
      setTimeout(() => setCopiedIcon(null), 2000);
    } catch (err) {
      toast({
        title: "Failed to copy",
        description: "Could not copy the icon code to clipboard.",
        variant: "destructive",
      });
    }
  };

  // Get current category icons
  const currentCategoryIcons = iconExamples["lucide-icons"].categories
    .find(cat => cat.name === selectedCategory)?.icons || [];

  // Filter icons based on search
  const filteredIcons = currentCategoryIcons.filter(icon =>
    icon.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const renderIcon = (component: string) => {
    const IconComponent = (LucideIcons as any)[component];
    return IconComponent ? <IconComponent className="h-6 w-6" /> : null;
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <div className="flex min-h-screen">
        {/* Sidebar */}
        <IconsSidebar 
          isCollapsed={isSidebarCollapsed}
          onToggleCollapse={toggleSidebar}
          onCategorySelect={handleCategorySelect}
          selectedCategory={selectedCategory}
        />
        
        {/* Main content */}
        <div className="flex-1 min-w-0 overflow-x-hidden">
          <div className="container py-8 md:py-12 xl:pt-24 px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-6xl">
              <div className="mb-8">
                <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">Icons</h1>
                <p className="mt-2 text-lg text-muted-foreground">
                  Beautiful, customizable icons that you can copy and paste into your apps.
                </p>
              </div>

              {/* Search bar */}
              <div className="mb-8">
                <div className="relative max-w-md">
                  <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                  <Input
                    placeholder="Search icons..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="pl-9"
                  />
                </div>
              </div>

              {/* Installation */}
              <div className="mb-8 overflow-x-auto">
                <h2 className="mb-4 text-xl font-semibold">Installation</h2>
                <CodeBlock
                  code={iconExamples["lucide-icons"].installation}
                  language="bash"
                  title="Install Lucide React"
                />
              </div>

              {/* Usage */}
              <div className="mb-8 overflow-x-auto">
                <h2 className="mb-4 text-xl font-semibold">Usage</h2>
                <CodeBlock
                  code={iconExamples["lucide-icons"].usage}
                  language="tsx"
                  title="Basic usage"
                />
              </div>

              {/* Current Category */}
              <div className="mb-8">
                <h2 className="mb-6 text-xl font-semibold">{selectedCategory} Icons</h2>
                
                {filteredIcons.length === 0 ? (
                  <div className="text-center py-12">
                    <p className="text-muted-foreground">No icons found matching your search.</p>
                  </div>
                ) : (
                  <div className="grid gap-3 grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 xl:grid-cols-8 2xl:grid-cols-10">
                    {filteredIcons.map((icon) => (
                      <Card 
                        key={icon.name} 
                        className="group cursor-pointer border hover:border-foreground/20 transition-all duration-200 relative"
                        onClick={() => copyIconCode(icon.name, icon.component)}
                      >
                        <CardContent className="flex flex-col items-center justify-center p-3 h-20 sm:h-24">
                          <div className="flex items-center justify-center h-6 w-6 sm:h-8 sm:w-8 mb-1 sm:mb-2">
                            {renderIcon(icon.component)}
                          </div>
                          <span className="text-[10px] sm:text-xs text-center text-muted-foreground group-hover:text-foreground transition-colors leading-tight">
                            {icon.name}
                          </span>
                          
                          {/* Copy indicator */}
                          <div className="absolute top-1 right-1 sm:top-2 sm:right-2 opacity-0 group-hover:opacity-100 transition-opacity">
                            {copiedIcon === icon.name ? (
                              <Check className="h-2.5 w-2.5 sm:h-3 sm:w-3 text-green-500" />
                            ) : (
                              <Copy className="h-2.5 w-2.5 sm:h-3 sm:w-3 text-muted-foreground" />
                            )}
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                )}
              </div>

              {/* Tips */}
              <div className="mt-16 text-center border-t pt-16">
                <h3 className="text-xl font-semibold">Pro Tips</h3>
                <div className="mt-4 grid gap-4 md:grid-cols-2 text-left">
                  <div className="p-4 rounded-lg bg-muted/50">
                    <h4 className="font-medium mb-2">Sizing</h4>
                    <p className="text-sm text-muted-foreground">
                      Use Tailwind classes like <code className="bg-background px-1 rounded">h-4 w-4</code>, <code className="bg-background px-1 rounded">h-6 w-6</code>, or <code className="bg-background px-1 rounded">h-8 w-8</code> to control icon size.
                    </p>
                  </div>
                  <div className="p-4 rounded-lg bg-muted/50">
                    <h4 className="font-medium mb-2">Styling</h4>
                    <p className="text-sm text-muted-foreground">
                      Icons inherit the current text color. Use <code className="bg-background px-1 rounded">text-primary</code>, <code className="bg-background px-1 rounded">text-muted-foreground</code>, etc. to style them.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Icons;