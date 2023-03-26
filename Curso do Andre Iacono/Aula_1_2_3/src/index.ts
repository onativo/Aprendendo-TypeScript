// let items: [string, number, boolean] = ['teste', 1, true]

// let output = items[0].toUpperCase()

// enum Role {
//   admin = 1,
//   read = 2,
//   backup = 3
// }

// const user = {
//   name: "vini",
//   age: '29',
//   role: Role.admin
// }

// console.log(user)

// =.=.=.=.=.=
//o return
  // function add(a:number, b:number): number{
  //   return a + b
  // }

  // console.log(add(5,19))

//o void não retorna valor, não tem return
  // function result(price: number){
  //   console.log(result)
  // }


//em objetos normalmente não se faz hardcode da tipagem dos dados
  // const user: {
  //   name: string,
  //   age: number
  // } = {
  //   name: 'vini',
  //   age: 29
  // }

  // console.log(user.name)

//o never nunca retorna valor pra console
  //utilizado para quando é preciso gerar um erro no console sem retornar algo

// function generateError(message: string, code:number) {
//   throw{
//     message: message,
//     errorCode: code
//   }
// }

// console.log(generateError(':: Application crashed ::', 500))

//Exercicios
  //Exercicio 1

  // let pi = 3.14159
  // let tau = pi * 2

  // console.log(`${tau} is ${pi} times two.`)

//Exercício 2

  // let pie:string
  // pie = 'macarroni'

  // console.log(`i like ${pie} pie`)

//Exercício 3

  // let isVini:boolean = false

  // console.log(`${isVini ? 'hello vini' : 'who are you'}`)

//Exercício 4

  // const integer:number = 6
  // const float:number = 6.66
  // const hex:number = 0xf00d
  // const binary:number = 0b1010011010
  // const octal:number = 0o744
  // const negZero:number = -0
  // const actuallyNumber:number = NaN
  // const largestNumber:number = Number.MAX_VALUE
  // const mostBiglyNumber:number = Infinity

  // const members: number[] = [
  //   integer,
  //   float,
  //   hex,
  //   binary,
  //   octal,
  //   negZero,
  //   actuallyNumber,
  //   largestNumber,
  //   mostBiglyNumber
  // ]

  // members[0] = 12345
  // console.log(members)

//Exercício 5

  // const sequence: number[] = Array.from(Array(10).keys())
  // const animals: string[] = ['pangolin', 'macaco', 'zebra', 'gato']
  // const stringAndNumbers:(number | string)[] = [1, 'one', 2, 'two', 3, 'three']
  // const allMyArrays: (number | string)[][] = [sequence, animals, stringAndNumbers]

  // console.log(allMyArrays)