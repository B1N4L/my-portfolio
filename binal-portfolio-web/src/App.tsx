import './App.css'
import Layout from "./components/Layout.tsx";
import CustomCursor from "./components/CustomCursor.jsx.tsx";

function App() {

  return (
      <div>
          <CustomCursor label="You" />
          <Layout/>
      </div>
  )
}

export default App
