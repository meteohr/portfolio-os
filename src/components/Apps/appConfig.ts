enum AppNames {
  CREDITS = "credits",
  ABOUT = "about",
  FLOOD_IT = "flood-it",
}

interface AppConfig {
  appName: AppNames;
  title: string;
  image: string;
}

export const apps: AppConfig[] = [
  {
    appName: AppNames.ABOUT,
    title: "About",
    image: "/src/assets/help_book_big-0.png",
  },
  {
    appName: AppNames.CREDITS,
    title: "Credits",
    image: "/src/assets/script_file_blue-1.png",
  },
  {
    appName: AppNames.FLOOD_IT,
    title: "Flood It",
    image: "/src/assets/defragment-0.png",
  },
];
