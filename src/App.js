import ButtonPage from "./pages/ButtonPage";
import Accordion from "./components/Accordion";
function App() {
  const items = [
    {
      id: "3edsf",
      label: "Can I use React on a project",
      content:
        "You can use react on any project you want. You can use react on any project you want.",
    },
    {
      id: "43gr",
      label: "Can I use React on a project",
      content:
        "You can use react on any project you want. You can use react on any project you want.",
    },
    {
      id: "54yehgd",
      label: "Can I use React on a project",
      content:
        "You can use react on any project you want. You can use react on any project you want.",
    },
  ];
  return (
    <div>
      <Accordion items={items} />
      <ButtonPage />
    </div>
  );
}

export default App;
