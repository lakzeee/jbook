import "bulmaswatch/superhero/bulmaswatch.min.css";
import { createRoot } from "react-dom/client";
import TextEditor from "./components/text-editor";
// import CodeCell from "./components/code-cell";

function App() {
  return (
    <div>
      <TextEditor />
    </div>
  );
}
const rootElement = document.getElementById("root");
const root = createRoot(rootElement!);
root.render(<App />);
