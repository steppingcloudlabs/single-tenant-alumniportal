module.exports = function undoEscape(context) {
    for (var i = 0; i < context.length; i++) {
        try {
            // let text = unescape(context[i].CONTENT);
            // console.log(text.replace("\n", "\\n"));
            context[i].CONTENT = unescape(context[i].CONTENT).replace("\n", "\n")
            context[i].TITLE = unescape(context[i].TITLE).replace("\n", "\n")
            context[i] = JSON.parse(unescape(JSON.stringify(context[i])))
        } catch (error) {
            console.log(error);
        }

    }
    return context
}