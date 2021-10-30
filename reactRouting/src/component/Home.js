import React from 'react';

const Home = (props) => {
    return(
        <React.Fragment>
            <div className="panel panel-primary">
                <div className="panel-heading">
                    <h2>Home Page</h2>
                </div>
                <div className="panel-body">
                    <div className="jumbotron">
                        <p>Home is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                        <button className="btn btn-success">
                            Click
                        </button>
                    </div>

                </div>
            </div>
        </React.Fragment>
    )
}

export default Home;