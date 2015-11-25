var React = require('react');
var ReactDOM = require('react-dom');

var IssueBox = React.createClass({
    render: function () {
        return (
            <div className="issueBox">
                <IssueList />
            </div>
        );
    }
});

var IssueList = React.createClass({
    render: function () {
        return (
            <div className="issueList">
                <IssueCard butt="Buttholes"></IssueCard>
            </div>
        );
    }
});

var IssueCard = React.createClass({
    render: function () {
        return (
            <div className="issueCard">{this.props.butt}</div>
        );
    }
});

ReactDOM.render(
    <IssueBox />,
    document.getElementById("content")
);
