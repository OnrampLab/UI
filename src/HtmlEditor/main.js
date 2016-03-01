(function () {
    'use strict';
    let Main = React.createClass({
		getContent() {
			return "<html>\n<body>\n<p>Hello World</p>\n</body>\n</html>";
		},
        render() {
            return (
                <div>
                    <ui.HtmlEditor content={this.getContent()}/>
                </div>
            );
        },
    });

    ReactDOM.render(<Main />, document.getElementById('content'));

})();
