function getMood() {
    const moods = ['Happy', 'Sad', 'Silly', 'Paranoid', 'Quiet'];
    return moods[Math.floor(Math.random() * moods.length)];
}

class JSXDemo extends React.Component {
    render() {
        return (
            <div>
                <h1>My mood is: {getMood()}</h1>
            </div>
        );
    }
}

ReactDOM.render(<JSXDemo />, document.getElementById('root'));
