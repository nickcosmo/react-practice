class Hello extends React.Component {
    render() {
        const bangs = '✌'.repeat(this.props.bangs);
        return (
            <p>
                Hello {this.props.from} from {this.props.to}{bangs}
            </p>
        );
    }
}
