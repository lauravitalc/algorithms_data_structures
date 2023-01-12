/* insert O(1)
lookup O(1)
delete O(1)
search O(1)

Main problem of hash tables:
Collisions
De repente os dados são inseridos no mesmo index.
Precisamos de uma forma de armazenar os dois dados -> linked lists

*/

let user = {
    age: 67,
    name: 'Eric',
    magic: true,
    scream: function(){
        console.log('AAAAAAAAAAAAAAA');
    }
}

console.log(user.age); // O(1)
user.spell = "Abracadabra"; // O(1)
console.log(user.spell);
user.scream() // O(1)

// Collisions -> O(n/k) -> O(n)
// Como resolver collisions? Linked List, https://en.wikipedia.org/wiki/Hash_table#Collision_resolution

const a = new Map(); // allow to save any data type as the key, mantains insertion order
const b = new Sets(); // only store de keys
