//  Q1: You're developing an application to manage a grocery shopping list. Your task is to handle and manipulate the shopping list using JavaScript arrays.

//   1:Create an array shoppingList containing strings representing items needed for shopping.
let shoppingListItm = [

    "Basmati Rice",
    "Masoor Dal",
    "Paneer",
    "Turmeric Powder",
    "Ghee",
    "Mangoes",
    "Assam Tea",
    "Papadums",
    "Jaggery"

];


// A: Implement functionality to add items to the shopping list using push and remove items using pop.

shoppingListItm.push("Milk");

console.log(shoppingListItm);

shoppingListItm.pop();

console.log(shoppingListItm);

// B: Use shift and unshift to manage priority items (move items to the top or remove them).

shoppingListItm.shift();
console.log(shoppingListItm);

shoppingListItm.unshift("Salt");
console.log(shoppingListItm);

//Q2: Create an array bookInventory containing nested arrays representing book details like title, author, and quantity.

let bookInventory = [
    ["The God of Small Things", "Arundhati Roy", 10],
    ["Train to Pakistan", "Khushwant Singh", 15],
    ["The White Tiger", "Aravind Adiga", 8],
    ["The Immortals of Meluha", "Amish Tripathi", 20],
    ["Midnight's Children", "Salman Rushdie", 12]
];
//A: Implement functionality to add new books using concat

let newBooks = [
    ["The Story of a Dalit Chief Secretary", "Kaki Madhava Rao", 50],
    ["The Other Story of How India Won Its Freedom", "Sanjeev Sanyal", 60],
    [" The New Dawn", "Dr. Ashwin Fernandes", 20]
];
let concatBooks = bookInventory.concat(newBooks);
console.log(concatBooks);

//B: Use splice to update book details (change quantity or remove books).

bookInventory.splice(3, 0, ["The Story of a Dalit Chief Secretary", "Kaki Madhava Rao", 50]);
console.log(bookInventory);

//Q3: eate an array musicPlaylist containing strings representing song titles.

let musicPlaylist = [
    "Chaiyya Chaiyya - Dil Se",
    "Maa Tujhe Salaam - A.R. Rahman",
    "Kabira - Yeh Jawaani Hai Deewani",
    "Kal Ho Naa Ho - Kal Ho Naa Ho",
    "Mile Sur Mera Tumhara - Doordarshan"
];

//A: Use loops to display the contents of musicPlaylist.

for (let i = 0; i < musicPlaylist.length; i++) {
    console.log(musicPlaylist[i]);
}

//B: Implement slice to create a smaller playlist based on specific criteria (e.g., top 5 songs).

musicPlaylist.slice(0, 4);
console.log(musicPlaylist);