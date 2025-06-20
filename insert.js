// Switch to or create the bookstore database
use bookstore;

// Clear collections if they exist
db.books.drop();
db.authors.drop();
db.customers.drop();
db.orders.drop();
db.reviews.drop();

// Insert 10 documents into the books collection
db.books.insertMany([
  { title: "The Great Gatsby", author_id: ObjectId(), price: 9.99, genres: ["Fiction", "Classic"], stock: 50, details: { pages: 180, year: 1925 } },
  { title: "1984", author_id: ObjectId(), price: 12.99, genres: ["Dystopian", "Fiction"], stock: 30, details: { pages: 328, year: 1949 } },
  { title: "To Kill a Mockingbird", author_id: ObjectId(), price: 10.99, genres: ["Fiction", "Drama"], stock: 40, details: { pages: 281, year: 1960 } },
  { title: "Pride and Prejudice", author_id: ObjectId(), price: 8.99, genres: ["Romance", "Classic"], stock: 60, details: { pages: 432, year: 1813 } },
  { title: "The Catcher in the Rye", author_id: ObjectId(), price: 11.99, genres: ["Fiction", "Coming-of-age"], stock: 25, details: { pages: 277, year: 1951 } },
  { title: "Brave New World", author_id: ObjectId(), price: 13.99, genres: ["Dystopian", "Fiction"], stock: 35, details: { pages: 311, year: 1932 } },
  { title: "Moby-Dick", author_id: ObjectId(), price: 14.99, genres: ["Adventure", "Classic"], stock: 20, details: { pages: 635, year: 1851 } },
  { title: "The Hobbit", author_id: ObjectId(), price: 15.99, genres: ["Fantasy", "Adventure"], stock: 45, details: { pages: 310, year: 1937 } },
  { title: "Fahrenheit 451", author_id: ObjectId(), price: 10.49, genres: ["Dystopian", "Fiction"], stock: 55, details: { pages: 194, year: 1953 } },
  { title: "Jane Eyre", author_id: ObjectId(), price: 9.49, genres: ["Romance", "Gothic"], stock: 50, details: { pages: 500, year: 1847 } }
]);

// Insert 10 documents into the authors collection
db.authors.insertMany([
  { name: "F. Scott Fitzgerald", nationality: "American", books: ["The Great Gatsby"], bio: { born: 1896, died: 1940 } },
  { name: "George Orwell", nationality: "British", books: ["1984", "Animal Farm"], bio: { born: 1903, died: 1950 } },
  { name: "Harper Lee", nationality: "American", books: ["To Kill a Mockingbird"], bio: { born: 1926, died: 2016 } },
  { name: "Jane Austen", nationality: "British", books: ["Pride and Prejudice"], bio: { born: 1775, died: 1817 } },
  { name: "J.D. Salinger", nationality: "American", books: ["The Catcher in the Rye"], bio: { born: 1919, died: 2010 } },
  { name: "Aldous Huxley", nationality: "British", books: ["Brave New World"], bio: { born: 1894, died: 1963 } },
  { name: "Herman Melville", nationality: "American", books: ["Moby-Dick"], bio: { born: 1819, died: 1891 } },
  { name: "J.R.R. Tolkien", nationality: "British", books: ["The Hobbit"], bio: { born: 1892, died: 1973 } },
  { name: "Ray Bradbury", nationality: "American", books: ["Fahrenheit 451"], bio: { born: 1920, died: 2012 } },
  { name: "Charlotte Brontë", nationality: "British", books: ["Jane Eyre"], bio: { born: 1816, died: 1855 } }
]);

// Insert 10 documents into the customers collection
db.customers.insertMany([
  { name: "John Doe", email: "john@example.com", address: { city: "New York", country: "USA" }, orders: [] },
  { name: "Jane Smith", email: "jane@example.com", address: { city: "London", country: "UK" }, orders: [] },
  { name: "Alice Brown", email: "alice@example.com", address: { city: "Paris", country: "France" }, orders: [] },
  { name: "Bob Johnson", email: "bob@example.com", address: { city: "Tokyo", country: "Japan" }, orders: [] },
  { name: "Emma Davis", email: "emma@example.com", address: { city: "Sydney", country: "Australia" }, orders: [] },
  { name: "Liam Wilson", email: "liam@example.com", address: { city: "Berlin", country: "Germany" }, orders: [] },
  { name: "Olivia Taylor", email: "olivia@example.com", address: { city: "Toronto", country: "Canada" }, orders: [] },
  { name: "Noah Martinez", email: "noah@example.com", address: { city: "Madrid", country: "Spain" }, orders: [] },
  { name: "Sophia Anderson", email: "sophia@example.com", address: { city: "Rome", country: "Italy" }, orders: [] },
  { name: "Ethan Thomas", email: "ethan@example.com", address: { city: "Amsterdam", country: "Netherlands" }, orders: [] }
]);

// Insert 10 documents into the orders collection
db.orders.insertMany([
  { customer_id: ObjectId(), book_ids: [ObjectId(), ObjectId()], total_amount: 22.98, order_date: new Date("2025-01-01") },
  { customer_id: ObjectId(), book_ids: [ObjectId()], total_amount: 12.99, order_date: new Date("2025-01-02") },
  { customer_id: ObjectId(), book_ids: [ObjectId(), ObjectId()], total_amount: 26.98, order_date: new Date("2025-01-03") },
  { customer_id: ObjectId(), book_ids: [ObjectId()], total_amount: 9.99, order_date: new Date("2025-01-04") },
  { customer_id: ObjectId(), book_ids: [ObjectId()], total_amount: 15.99, order_date: new Date("2025-01-05") },
  { customer_id: ObjectId(), book_ids: [ObjectId(), ObjectId()], total_amount: 24.48, order_date: new Date("2025-01-06") },
  { customer_id: ObjectId(), book_ids: [ObjectId()], total_amount: 10.99, order_date: new Date("2025-01-07") },
  { customer_id: ObjectId(), book_ids: [ObjectId()], total_amount: 14.99, order_date: new Date("2025-01-08") },
  { customer_id: ObjectId(), book_ids: [ObjectId(), ObjectId()], total_amount: 20.48, order_date: new Date("2025-01-09") },
  { customer_id: ObjectId(), book_ids: [ObjectId()], total_amount: 13.99, order_date: new Date("2025-01-10") }
]);

// Insert 10 documents into the reviews collection
db.reviews.insertMany([
  { book_id: ObjectId(), customer_id: ObjectId(), rating: 5, comment: "Amazing read!", date: new Date("2025-01-01") },
  { book_id: ObjectId(), customer_id: ObjectId(), rating: 4, comment: "Really enjoyed it.", date: new Date("2025-01-02") },
  { book_id: ObjectId(), customer_id: ObjectId(), rating: 3, comment: "It was okay.", date: new Date("2025-01-03") },
  { book_id: ObjectId(), customer_id: ObjectId(), rating: 5, comment: "A masterpiece!", date: new Date("2025-01-04") },
  { book_id: ObjectId(), customer_id: ObjectId(), rating: 4, comment: "Very engaging.", date: new Date("2025-01-05") },
  { book_id: ObjectId(), customer_id: ObjectId(), rating: 2, comment: "Not my style.", date: new Date("2025-01-06") },
  { book_id: ObjectId(), customer_id: ObjectId(), rating: 5, comment: "Loved every page!", date: new Date("2025-01-07") },
  { book_id: ObjectId(), customer_id: ObjectId(), rating: 3, comment: "Decent book.", date: new Date("2025-01-08") },
  { book_id: ObjectId(), customer_id: ObjectId(), rating: 4, comment: "Well written.", date: new Date("2025-01-09") },
  { book_id: ObjectId(), customer_id: ObjectId(), rating: 5, comment: "Highly recommend!", date: new Date("2025-01-10") }
]);