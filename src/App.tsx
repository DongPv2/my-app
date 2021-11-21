import moment from "moment"
import "./App.scss"
import Clouds from "./component/clouds"
import Moon from "./component/moon"
import Mountains from "./component/mountains"
import Sun from "./component/sun"

function App() {
  const time = moment().get("hour")
  const shine = time > 6 && time <= 18
  return (
    <div className="App">
      <header style={{ background: time > 6 && time <= 18 ? "skyblue" : "#000712" }}>
        {time > 6 && time <= 18 ? <Sun time={time} /> : <Moon time={time} />}
        <Clouds shine={shine} />
        <Mountains shine={shine} />
      </header>
      <div className="container"></div>
    </div>
  )
}

export default App
