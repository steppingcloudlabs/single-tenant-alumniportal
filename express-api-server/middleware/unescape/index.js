module.exports = function undoEscape(context) {
    for (var i = 0; i < context.length; i++) {
        context[i] = JSON.parse(unescape(JSON.stringify(context[i])))
    }
    return context
}