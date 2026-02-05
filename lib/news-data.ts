import {
  Trophy,
  Newspaper,
  Mic,
  Radio,
  Video,
  type LucideIcon,
} from "lucide-react";

export interface NewsItem {
  title: string;
  date: string;
  category: string;
  summary: string;
  icon: LucideIcon;
  color: string;
  bg: string;
  link: string;
}

export const newsData: NewsItem[] = [
  {
    title: "Annual Sports Day 2026",
    date: "March 15, 2026",
    category: "Sports",
    summary: "Join us for a day of athletic excellence and team spirit.",
    icon: Trophy,
    color: "text-amber-600",
    bg: "bg-amber-100 dark:bg-amber-900/20",
    link: "/news/sports-day",
  },
  {
    title: "School Magazine Launch",
    date: "April 2, 2026",
    category: "News",
    summary: "Unveiling the latest edition of our student-led publication.",
    icon: Newspaper,
    color: "text-blue-600",
    bg: "bg-blue-100 dark:bg-blue-900/20",
    link: "/news/magazine-launch",
  },
  {
    title: "Graduation Ceremony",
    date: "May 22, 2026",
    category: "Events",
    summary: "Celebrating the achievements of the Class of 2026.",
    icon: Mic,
    color: "text-purple-600",
    bg: "bg-purple-100 dark:bg-purple-900/20",
    link: "/news/graduation",
  },
  {
    title: "Inter-House Athletic Meet",
    date: "June 10, 2026",
    category: "Sports",
    summary: "Witness the intense competition between our historic houses.",
    icon: Radio,
    color: "text-red-600",
    bg: "bg-red-100 dark:bg-red-900/20",
    link: "/news/athletic-meet",
  },
  {
    title: "Founders Day Celebration",
    date: "July 1, 2026",
    category: "Events",
    summary: "Honoring the legacy and vision of our founders.",
    icon: Video,
    color: "text-emerald-600",
    bg: "bg-emerald-100 dark:bg-emerald-900/20",
    link: "/news/founders-day",
  },
];
