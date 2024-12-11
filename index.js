let meses = ['enero','febrero','marzo','abril','mayo','junio','julio','agosto','septiembre','octubre' ]
console.log(meses[3])
console.log(meses[6])

meses.unshift('diciembre')
console.log(meses)

meses.push('diciembre')
console.log (meses)

meses.splice(5,1)
meses.splice(4,1)
console.log(meses)

let r = meses.indexOf('enero')
console.log(r)

meses.reverse();
console.log(meses)

str = meses.join(', ');
console.log(str);

console.log(str.split(', '))

meses.forEach((cadaMes , i) => {
    console.log(cadaMes)
    console.log( i)
});


let r_find = meses.find(cadaMes => cadaMes.includes('ene'))
console.log(r_find)


let r_filter = meses.filter(mes => mes.includes("s"))
console.log(r_filter)


const alumno = ['Timmy', 'Garcia', 'Diseño web']
const [nombre, apellido, curso] = alumno

console.log(nombre)
console.log(apellido)
console.log(curso)