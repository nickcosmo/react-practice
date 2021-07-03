function getNum() {
    return Math.floor(Math.random() * 10) + 1;
}

class NumPicker extends React.Component {
    render() {
        const num = getNum();
        let msg;
        if (num === 7) {
            msg = (
                <div>
                    <h2>YAY!!</h2>
                    <img src="https://media.giphy.com/media/MNmyTin5qt5LSXirxd/giphy.gif" />
                </div>
            );
        } else {
            msg = (
                <div>
                    <h2>Keep Trying :(</h2>
                    <img src="https://media.giphy.com/media/nR4L10XlJcSeQ/giphy.gif" />
                </div>
            );
        }
        return (
            <div>
                <h1>Your number is {num}</h1>
                {msg}
            </div>
        );
    }
}

ReactDOM.render(<NumPicker />, document.getElementById('root'));
