// class component example
// class Hello extends React.Component {
//     render() {
//         return (
//             <div>
//                 <h1>Hello from React!</h1>
//                 <h1>Hello from React!</h1>
//             </div>
//         );
//     }
// }

// Function component example
function Hello() {
    return (
        <div>
            <h1>Hello from React!</h1>
            <h1>Hello from React! ✌</h1>
        </div>
    );
}

ReactDOM.render(<Hello />, document.getElementById('root'));
