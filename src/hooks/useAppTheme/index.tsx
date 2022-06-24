import useLocalStorage from "use-local-storage";

type ThemeType = "light" | "dark";

const useAppTheme = () => {
  const defaultTheme: boolean = window.matchMedia(
    "(prefer-color-scheme: dark)"
  ).matches;
  const [theme, setTheme] = useLocalStorage(
    "theme",
    defaultTheme ? "dark" : "light"
  );
  const changeTheme = () => {
    let newTheme: ThemeType = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
  };
  return { theme, changeTheme };
};
export default useAppTheme;
