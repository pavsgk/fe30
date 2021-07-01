const filterBy = (arr, type) => arr.filter( val => String(type) == 'null' ? val !== null : typeof(val) != String(type).toLowerCase() );

console.log( filterBy(['hello', 'world', 23, '23', null], 'string') );