import { Card, CardContent } from "@/components/ui/card";

interface ComponentPreviewProps {
  children: React.ReactNode;
  className?: string;
}

export function ComponentPreview({ children, className = "" }: ComponentPreviewProps) {
  return (
    <Card className={`overflow-hidden border-0 shadow-elegant ${className}`}>
      <CardContent className="flex min-h-[200px] items-center justify-center p-8 bg-gradient-secondary">
        {children}
      </CardContent>
    </Card>
  );
}