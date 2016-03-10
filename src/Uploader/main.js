(function () {
    'use strict';

    let Main = React.createClass({
        // --------------------------------------------------------------------------------
        // data
        // --------------------------------------------------------------------------------
        

        // --------------------------------------------------------------------------------
        // event
        // --------------------------------------------------------------------------------
        
        handleFile(file)
        {
            let formData = new FormData();
            console.log(file.target.files[0]);
            console.log("upload done");
            
        },

        // --------------------------------------------------------------------------------
        getInitialState() {
            return {
                
            };
        },

        render() {
            return (
                <div>
                    <ui.Uploader listenFile={this.handleFile} />
                </div>
            );
        },
    });

    ReactDOM.render(<Main />, document.getElementById('content'));

})();
