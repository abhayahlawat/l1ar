export const iconExamples = {
  "lucide-icons": {
    name: "Lucide Icons",
    description: "Beautiful & consistent icon toolkit made by the community.",
    installation: `npm install lucide-react`,
    usage: `import { Heart, Star, User } from "lucide-react"

export function IconDemo() {
  return (
    <div className="flex gap-4">
      <Heart className="h-6 w-6" />
      <Star className="h-6 w-6" />
      <User className="h-6 w-6" />
    </div>
  )
}`,
    categories: [
      {
        name: "General",
        icons: [
          { name: "Heart", component: "Heart" },
          { name: "Star", component: "Star" },
          { name: "User", component: "User" },
          { name: "Home", component: "Home" },
          { name: "Search", component: "Search" },
          { name: "Settings", component: "Settings" },
          { name: "Bell", component: "Bell" },
          { name: "Mail", component: "Mail" },
          { name: "Phone", component: "Phone" },
          { name: "Calendar", component: "Calendar" },
          { name: "Clock", component: "Clock" },
          { name: "Globe", component: "Globe" }
        ]
      },
      {
        name: "Navigation",
        icons: [
          { name: "Arrow Right", component: "ArrowRight" },
          { name: "Arrow Left", component: "ArrowLeft" },
          { name: "Arrow Up", component: "ArrowUp" },
          { name: "Arrow Down", component: "ArrowDown" },
          { name: "Chevron Right", component: "ChevronRight" },
          { name: "Chevron Left", component: "ChevronLeft" },
          { name: "Chevron Up", component: "ChevronUp" },
          { name: "Chevron Down", component: "ChevronDown" },
          { name: "Menu", component: "Menu" },
          { name: "X", component: "X" },
          { name: "Plus", component: "Plus" },
          { name: "Minus", component: "Minus" }
        ]
      },
      {
        name: "Media",
        icons: [
          { name: "Play", component: "Play" },
          { name: "Pause", component: "Pause" },
          { name: "Stop", component: "Stop" },
          { name: "Skip Forward", component: "SkipForward" },
          { name: "Skip Back", component: "SkipBack" },
          { name: "Volume 2", component: "Volume2" },
          { name: "Volume X", component: "VolumeX" },
          { name: "Camera", component: "Camera" },
          { name: "Video", component: "Video" },
          { name: "Image", component: "Image" },
          { name: "Music", component: "Music" },
          { name: "Headphones", component: "Headphones" }
        ]
      },
      {
        name: "Files",
        icons: [
          { name: "File", component: "File" },
          { name: "File Text", component: "FileText" },
          { name: "Folder", component: "Folder" },
          { name: "Folder Open", component: "FolderOpen" },
          { name: "Download", component: "Download" },
          { name: "Upload", component: "Upload" },
          { name: "Save", component: "Save" },
          { name: "Copy", component: "Copy" },
          { name: "Cut", component: "Scissors" },
          { name: "Trash", component: "Trash2" },
          { name: "Archive", component: "Archive" },
          { name: "Paperclip", component: "Paperclip" }
        ]
      },
      {
        name: "Communication",
        icons: [
          { name: "Message Circle", component: "MessageCircle" },
          { name: "Message Square", component: "MessageSquare" },
          { name: "Send", component: "Send" },
          { name: "Share", component: "Share" },
          { name: "Share 2", component: "Share2" },
          { name: "Users", component: "Users" },
          { name: "User Plus", component: "UserPlus" },
          { name: "User Minus", component: "UserMinus" },
          { name: "At Sign", component: "AtSign" },
          { name: "Hash", component: "Hash" },
          { name: "Mic", component: "Mic" },
          { name: "Mic Off", component: "MicOff" }
        ]
      },
      {
        name: "Status",
        icons: [
          { name: "Check", component: "Check" },
          { name: "Check Circle", component: "CheckCircle" },
          { name: "X Circle", component: "XCircle" },
          { name: "Alert Circle", component: "AlertCircle" },
          { name: "Alert Triangle", component: "AlertTriangle" },
          { name: "Info", component: "Info" },
          { name: "Help Circle", component: "HelpCircle" },
          { name: "Loader", component: "Loader" },
          { name: "Refresh CW", component: "RefreshCw" },
          { name: "Shield", component: "Shield" },
          { name: "Shield Check", component: "ShieldCheck" },
          { name: "Zap", component: "Zap" }
        ]
      }
    ]
  }
};