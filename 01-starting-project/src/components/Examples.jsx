import { useState } from 'react';
import { EXAMPLES } from '../data.js';
import TabButton from './TabButton.jsx'

export default function Examples() {
  // updates variables
  // you must call hooks on the top level
  // you must call hooks inside of component functions
  // array produced and returned by React's useState() function. contains 2 elements.
  const [selectedTopic, setSelectedTopic] = useState();

  // let tabContent = 'Please click a button';

  function handleSelect(selectedButton) {
    // selectedButton => 'components', 'jsx', 'props', 'state'
    // tabContent = selectedButton;
    setSelectedTopic(selectedButton);
    console.log(selectedTopic);
  }

//   console.log("APP COMPONENT EXECUTING");

  let tabContent = <p>Please select a topic.</p>;

  if (selectedTopic) {
    tabContent = (
      <div id="tab-content">
        <h3>{EXAMPLES[selectedTopic].title}</h3>
        <p>{EXAMPLES[selectedTopic].description}</p>
        <pre>
          <code>{EXAMPLES[selectedTopic].code}</code>
        </pre>
      </div>
    );
  }

  return (
    <section id="examples">
      <h2>Examples</h2>
      <menu>
        <TabButton
          isSelected={selectedTopic === "components"}
          onSelect={() => handleSelect("components")}
        >
          Components
        </TabButton>
        <TabButton
          isSelected={selectedTopic === "jsx"}
          onSelect={() => handleSelect("jsx")}
        >
          JSX
        </TabButton>
        <TabButton
          isSelected={selectedTopic === "props"}
          onSelect={() => handleSelect("props")}
        >
          Props
        </TabButton>
        <TabButton
          isSelected={selectedTopic === "state"}
          onSelect={() => handleSelect("state")}
        >
          State
        </TabButton>

        {/* <TabButton onSelect={handleSelect}>State</TabButton> */}

        {/* <TabButton label='Components' /> */}
      </menu>
      {/* tabContent does not show updated values */}

      {/* {selectedTopic} */}

      {tabContent}
    </section>
  );
}
