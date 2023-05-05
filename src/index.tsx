import "bulmaswatch/superhero/bulmaswatch.min.css";
import { createRoot } from "react-dom/client";
import CodeCell from "./components/code-cell";

function App() {
  return (
    <div>
      <CodeCell />
    </div>
  );
}
const rootElement = document.getElementById("root");
const root = createRoot(rootElement!);
root.render(<App />);
