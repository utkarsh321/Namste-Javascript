const heading = React.createElement(
    "h1",{},"Hello World from React!");
        console.log(heading);
    const root = ReactDOM.createRoot(document.getElementById("root"));
        root.render(heading);
        

const parent = React.createElement("div",{id : "parent"},[
React.createElement{"div"},[
    React.createElement("h1",{},"I'm on h1 tag"),
    React.createElement("h2",{},"I'm on the h2 tag"),
]),
React.createElement("div",{id: child2"},[
    React.createElement("h1",{},"I'm on the h1 tag"),
    React.createElement("h2",{},"i'm on the h2 tag")
]),
]);

