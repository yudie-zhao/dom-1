window.dom = {
    find(selector, scope) {
        return (scope || document).querySelectorAll(selector)
    },
    style(node, name, value) {
        if (arguments.length === 3) {
            return node.style[name] = value//set
        } else if (arguments.length === 2) {
            if (typeof name === 'string') {
                return node.style[name]//查看
            } else if (name instanceof Object) {
                for (let key in name) {
                    return node.style[key] = name[key]
                }
            }
        }

    },
    each(nodeList, fn) {
        for (let i = 0; i < nodeList.length; i++) {
            fn.call(null, nodeList[i])
        }
    },
}