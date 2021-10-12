const div = dom.find('#test>.red')[0]
console.log(dom.find('.red', div)[0])
dom.style(test, 'color', 'red')
const divList = dom.find('.red')
console.log(divList)
dom.each(divList, (n) => console.log(n))
