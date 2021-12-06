//3c) Import myCollection from collection.js

import myCollection from "./collection.js";
import chalk from 'chalk';


//2c) Create a function called describeItem
// if only one item in collection, say "I have a name. Here's what I like about it: (whatILike).
// if more than one item in collection, say "I have (count) names. Here's what I like about them: (whatILike)

function describeItem(item){
 if (item.count === 1){
   console.log(`I have a ${chalk.cyan(item.name)}. Here's what I like about it: ${chalk.green(item.whatILike)}`);
 } else {
   console.log(`I have ${chalk.yellow(item.count)} ${chalk.cyan(item.name)}s. Here's what I like about them: ${chalk.green(item.whatILike)}`);
  
  }
}
//describeItem(myCollection[0]);

//2d) Make a function called describeCollection that takes in an array as a parameter.
//It should loop throught the array, and for each item, call the describeItem function

function describeCollection(array){
  return array.forEach(describeItem);
}

describeCollection(myCollection);

