import React, { useState } from "react";
// import Accordion from "./Components/Accordion";
// import Search from "./Components/Search";
import Dropdown from "./Components/Dropdown";
import Translate from "./Components/Translate";

// const items=[
//     {
//         title:'What is React ?',
//         content:'React is a front end javascript framework',
//     },
//     {
//       title:'Why use React ?',
//       content:'React is a favourite JS library among engineers',

//     },
//     {
//       title:'How do you use React?',
//       content:'You use React by creating components',
//     }
// ];

const options = [
  {
    label: "The Color Red",
    value: "red",
  },
  {
    label: "The Color Green",
    value: "green",
  },
  {
    label: "A shade of Blue",
    value: "blue",
  },
];

const App = () => {
  // const [selected, setSelected] = useState(options[0]);
  // const [showDown, setShowDown] = useState(true);
  return (
    <div>
      {/* <Accordion items={items} /> */}
      {/* <Search /> */}
      {/* <button
        onClick={() => {
          setShowDown(!showDown);
        }}
      >
        Toggle Dropdown
      </button> */}

      {/* {showDown ? ( */}
        {/* <Dropdown
          selected={selected}
          onSelectedChange={setSelected}
          options={options}
        /> */}
      {/* ) : null} */}


      <Translate />
    </div>
  );
};

export default App;
