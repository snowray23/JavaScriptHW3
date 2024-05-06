// Task 1: Create a constructor function for the Book object with properties for title, author, and pages.
function Book(title, author, pages) {
    return { title: title, author: author, pages: pages };
}

// Task 2: Implement a method within the Book object to display book information
function displayInfo(book) {
    console.log("Title: " + book.title + ", Author: " + book.author + ", Pages: " + book.pages);
}

// Task 3: Create an array to store book objects and implement functions to add new books and search for books by title or author.
const library = [];

function addBook(title, author, pages) {
    library.push(Book(title, author, pages));
}

function searchByTitle(title) {
    return library.filter(function(book) {
        return book.title.includes(title);
    });
}

function searchByAuthor(author) {
    return library.filter(function(book) {
        return book.author.includes(author);
    });
}

// Task 4: Create functions that utilize the filter method to filter out books that contain more than 100 pages and the map method to add "Title: " and "Author: " to the book's title and author properties respectably.
function filterByPages() {
    return library.filter(function(book) {
        return book.pages <= 300;
    });
}

function formatBookInfo() {
    return library.map(function(book) {
        return {
            Title: "Title: " + book.title,
            Author: "Author: " + book.author,
            Pages: "Pages: " + book.pages
        };
    });
}

// adding book
addBook("example title", "example author", 200);
// display added book
library.forEach(function(book) {
    displayInfo(book);
});

// searching the title for word 
console.log(searchByTitle("the"));
console.log(searchByTitle("example"));

// search by author
console.log(searchByAuthor("kingsman"));
console.log(searchByAuthor("author"));

// search by number of pages
console.log(filterByPages(200));


// map method 
console.log(formatBookInfo())


// ------------------------------------------------------------------------------------------------------- 

//Task 1: Create a constructor function for the Account object with properties for accountNumber, balance, and owner.


function Account(accountNumber, balance, owner) {
    const account = {
        accountNumber: accountNumber,
        balance: balance,
        owner: owner
    };
    
    // Task 2: Implement methods within the Account object to deposit and withdraw funds.
    account.deposit = function(amount) {
        account.balance += amount;
        console.log(`You have deposited ${amount}. Your New balance: ${account.balance}`);
    };
    
    account.withdraw = function(amount) {
        if (amount <= account.balance) {
            account.balance -= amount;
            console.log(`You have withdrawn ${amount}. Your current balance: ${account.balance}`);
        } else {
            console.log("Not enough funs. Your Withdrawal failed.");
        }
    };
   // Task 3: Create a method to calculate compound interest based on the balance and specified interest rate.
   account.calculateInterest = function(rate, years) {
    let compoundInterest = account.balance;
    for (let i = 0; i < years; i++) {
        compoundInterest *= (1 + rate);
    }
    console.log(`interest after ${years} years at ${(rate * 100)}% interest rate: ${compoundInterest}`);
};

return account;
}

// account
const myAccount = Account("1230984567", 10000, "Brad Pitt");

// Deposit 
myAccount.deposit(12500);

// Withdraw 
myAccount.withdraw(200);

// interest
myAccount.calculateInterest(10, 1); // 5% interest rate, 3 years
