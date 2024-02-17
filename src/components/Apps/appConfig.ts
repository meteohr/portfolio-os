enum AppNames {
  CREDITS = "credits",
  ABOUT = "about",
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
    image: "./assets/help_book_big-0.png",
  },
  {
    appName: AppNames.CREDITS,
    title: "Credits",
    image: "./assets/script_file_blue-1.png",
  },
];
