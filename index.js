//arrow function
    const sum = (a, b) => a + b;
    console.log(sum(2,3))

    // default parameter
    function print(a = 5){
        console.log(a);
    }
    print();   // print 5
    print(6);  // print 6

    //let Scope
    let a = 3;
    if(true){
        let a = 4;
        console.log(a); // prints 5
    }

    // const
    const a1 = 55;
   // a = 44 error

   // Multline string
   console.log(`This is
    multiline string
   `)

   // Template Strings
   const name = 'World'
   const message = `Hello ${name}`;
   console.log(message);

   // Exponent operator
   const byte = 2 ** 8;
   const byte2 = Math.pow(2, 8);
   console.log(byte);  // print 256
   console.log(byte2); // print 256


   //Spread operator
   const a2 = [1, 2]
   const b2 = [3, 4]
   const c = [...a2, ...b2]
   const c2 = [a2, b2];
   console.log(c);  //print [1,2,3,4]
   console.log(c2); // print [[1,2], [3,4]]

  //String included
  console.log('apple'.includes('pl')) // true
  console.log('apple'.includes('ti')) // false

  //String start with
  console.log('apple'.startsWith('a')) // true
  console.log('apple'.startsWith('c')) // false