import React from 'react';
import {Link} from 'react-router-dom';

const Post = (props) => {
    return(
        <React.Fragment>
            <div className="panel panel-success">
                <div className="panel-heading">
                    <h2>Post Page</h2>
                </div>
                <div className="panel-body">
                    <div className="jumbotron">
                        <p>Post is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                        <button className="btn btn-danger">
                            Click
                        </button>
                    </div>
                    <h2>JavaScript</h2>
                    <Link className="btn btn-primary" to="/post/JavaScript?page=1">Details</Link>
                    <h2>React</h2>
                    <Link className="btn btn-success" to="/post/React?page=2">Details</Link>
                    <h2>Node</h2>
                    <Link className="btn btn-info" to="/post/Node?page=3">Details</Link>

                </div>
            </div>
        </React.Fragment>
    )
}

export default Post;