import componentImage from "./assets/images/components.png";
import stateImage from "./assets/images/state.png";
import eventImage from "./assets/images/events.png";
import KeyReactConcept from "./components/KeyReactConcept";
import Concept from "./components/Concept";

import "./App.css";

const concept = [
  {
    title: "Components",
    image: componentImage,
    message:
      "Components let you split the UI into independent, reusable pieces, and think about each piece in isolation. Components can recieve data via props, and theu can render dynamic output using JSX.",
  },
  {
    title: "State",
    image: stateImage,
    message:
      "State is data that may change over time. As it changes, the UI should be updated to reflect the updated data. Each component can maintain its own state and multiple comonents can share state.",
  },
  {
    title: "Events",
    image: eventImage,
    message:
      "Event handlers are added via props to components. You pass functions as values to such event handlers to control which functions gets executed for which event.",
  },
];
function App() {
  return (
    <div>
      <KeyReactConcept />
      <ul id="concepts">
        <Concept
          image={concept[0].image}
          title={concept[0].title}
          message={concept[0].message}
        />
        <Concept
          image={concept[1].image}
          title={concept[1].title}
          message={concept[1].message}
        />
        <Concept
          image={concept[2].image}
          title={concept[2].title}
          message={concept[2].message}
        />
      </ul>
    </div>
  );
}

export default App;
