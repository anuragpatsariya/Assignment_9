/*globals ko*/
"use strict";
function viewCommentModel() {
    var scope = this;
    
    scope.comment = ko.observable("");
    scope.comments = ko.observableArray([
        { title : "This is first post."},
        { title : "This is second post"},
        { title : "This is third post"}
    ]);
    
    scope.addComment = function () {
        scope.comments.push({ title : scope.comment() });
        scope.comment("");
    };
}

ko.applyBindings(new viewCommentModel());
