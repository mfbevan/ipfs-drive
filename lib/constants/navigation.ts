export interface NavigationItem {
  label: string;
  href: string;
}

export const navigationItems: NavigationItem[] = [
  {
    label: "🏠 Home",
    href: "/",
  },
  {
    label: "💬 Messages",
    href: "/messages",
  },
];
