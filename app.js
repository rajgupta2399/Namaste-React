const heading = React.createElement(
  "h1",
  {
    id: "heading",
  },
  "hello world by React"
);
const root = ReactDOM.createRoot(document.getElementById("root"));



// <div id="parent">
//   <div id="child">
//     <h1></h1>
//   </div>
// </div>;

const parent1 = React.createElement(
  "div",
  {
    id: "parent",
  },
  React.createElement(
    "div",
    { id: "child" },
    React.createElement(
      "h1",
      { id: "heading" },
      "hello world from nested react jsx"
    )
  )
);

// ReactElement(object) => HTML(Browser understands)
// the parent saw in the above line, this parent is an object for react not a element . React.createElement() is used to create an object and the object render in the dom and acts like a HTML element when a browser understand , mainly this seen working behind the scenes.


//  WHAT HAPPEN I WANT TO CREATE A HTML STRUCTURE LIKE THIS :- in this case we will make an array

/* 
<div id="parent">

    <div id="child1">
        <h1> i am h1 tag</h1>
        <h2> i am h2 tag</h2>
    </div>

    <div id="child2">
        <h1> i am h1 tag</h1>
        <h2> i am h2 tag</h2>
    </div>

</div>;

*/

const parent = React.createElement("div",{
    id:"parent"},
    [
        React.createElement("div",{
            id:"child1"},
        [
            React.createElement("h1",{},"i am h1 tag"),
            React.createElement("h2",{},"i am h2 tag")
        ]
        ),
        React.createElement("div",{
            id:"child2"},
        [
            React.createElement("h1",{},"i am h1 tag"),
            React.createElement("h2",{},"i am h2 tag")
        ]
        ),

    ]
    )

console.log(parent);
root.render(parent);
