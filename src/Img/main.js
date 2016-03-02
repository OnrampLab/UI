(function () {
    'use strict';
	let data = {title: 'evolution', src: "./img/evolution.png", description: "evolution describtion"};
    let Main = React.createClass({
        render() {
            return (
                <section>
                    <ui.Img data={this.props.data} />
                </section>
            );
        },
    });

    ReactDOM.render(<Main data={data}/>, document.getElementById('content'));

})();
