$(function() {
    $("a").linkpreview({
        previewContainer: "#preview-container"
    });
    $("input").linkpreview({
        previewContainer: "#preview-container2",
        refreshButton: "#refresh-button",
        preProcess: function() {
            console.log("preProcess");
        },
        onSuccess: function() {
            console.log("onSuccess");
        },
        onError: function() {
            console.log("onError");
        },
        onComplete: function() {
            console.log("onComplete");
        }
    });
});