import "bulmaswatch/superhero/bulmaswatch.min.css";
import { createRoot } from "react-dom/client";
import TextEditor from "./components/text-editor";
import { Provider } from "react-redux";
import { store } from "./state";
// import CodeCell from "./components/code-cell";

function App() {
  return (
    <Provider store={store}>
      <div>
        <TextEditor />
      </div>
    </Provider>
  );
}
const rootElement = document.getElementById("root");
const root = createRoot(rootElement!);
root.render(<App />);
