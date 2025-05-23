import {useTheme} from "../context/ThemeContext";

const Button = () => {
    const { theme, setTheme } = useTheme();


  return (
    <div>
        <h2>Aktif Tema {theme}</h2>
        <button onClick={() => setTheme(theme  === "light" ? "dark" : "light")}> tema değiştir</button>
    </div>
  )
}

export default Button