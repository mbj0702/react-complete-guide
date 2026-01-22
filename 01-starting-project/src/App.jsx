// import componentsImg from "./assets/components.png";
import { CORE_CONCEPTS } from "./data.js";
import Header from './components/Header/Header.jsx'
import CoreConcept from "./components/CoreConcept.jsx";
import TabButton from "./components/TabButton.jsx";


function App() {
  return (
    <div>
      <Header />
      <main>
        <section id="core-concepts">
          <h2>Core Concepts</h2>
          <ul>
            <CoreConcept
              // title="Components"
              title={CORE_CONCEPTS[0].title}
              // description="The core UI building block."
              description={CORE_CONCEPTS[0].description}
              // image={componentsImg}
              image={CORE_CONCEPTS[0].image}
            />
            <CoreConcept {...CORE_CONCEPTS[1]}/>
            <CoreConcept {...CORE_CONCEPTS[2]}/>
            <CoreConcept {...CORE_CONCEPTS[3]}/>
          </ul>
        </section>

        <section id="examples">
          <h2>Examples</h2>
          <menu>
            <TabButton>Components</TabButton>
            <TabButton>JSX</TabButton>
            <TabButton>Props</TabButton>
            <TabButton>State</TabButton>
            {/* <TabButton label='Components' /> */}
            
          </menu>

        </section>
      </main>
    </div>
  );
}

export default App;
