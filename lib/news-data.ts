import {
  Trophy,
  Newspaper,
  Mic,
  Radio,
  Video,
  type LucideIcon,
  Globe,
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
  image?: string;
}

export const newsData: NewsItem[] = [
  {
    title: "Colombo Zonal Athletic Championship 2024",
    date: "July 12, 2024",
    category: "Sports",
    summary: "St. Benedict's College emerged as the overall champion and also secured the overall relay championship with a total of 166 points.",
    icon: Trophy,
    color: "text-amber-600",
    bg: "bg-amber-100 dark:bg-amber-900/20",
    link: "/news/zonal-champs-2024",
    image: "/img/Zonal-Champs-2024-2.png",
  },
  {
    title: "New Website!",
    date: "July 11, 2024",
    category: "News",
    summary: "We are thrilled to announce the launch of our brand-new school website, designed to provide our students, parents, faculty, and well-wishers with a seamless online experience.",
    icon: Globe,
    color: "text-blue-600",
    bg: "bg-blue-100 dark:bg-blue-900/20",
    link: "/news/new-website",
    image: "/img/new-College-Website.png",
  },
  {
    title: "2nd Runner-Up at All-island Relay Carnival 2024",
    date: "July 11, 2024",
    category: "Sports",
    summary: "After a closely fought competition, the athletics team of St. Benedict's College had a remarkable performance in the All Island Relay Carnival 2024.",
    icon: Trophy,
    color: "text-emerald-600",
    bg: "bg-emerald-100 dark:bg-emerald-900/20",
    link: "/news/relay-carnival-2024",
    image: "/img/all-island.png",
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
     image: "/img/sports.jpg",
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
     image: "/img/Academics.jpg",
  },
];
