// Delete: Remove authors who died before 1900
db.authors.deleteOne({ "bio.died": { $lt: 1900 } });

// Aggregate: Count authors by nationality and average birth year
db.authors.aggregate([
  { $group: { _id: "$nationality", authorCount: { $sum: 1 }, avgBirthYear: { $avg: "$bio.born" } } },
  { $sort: { authorCount: -1 } }
]).pretty();

// --- Customers Collection Queries ---

// Read: Get all customers
db.customers.find().pretty();

// Read: Filter customers by country
db.customers.find({ "address.country": "USA" }).pretty();

// Read: Filter customers by city and country
db.customers.find({ "address.city": "London", "address.country": "UK" }).pretty();

// Update: Update customer email
db.customers.updateOne(
  { name: "John Doe" },
  { $set: { email: "john.doe@newemail.com" } }
);

// Delete: Remove customers with no orders
db.customers.deleteOne({ orders: { $size: 0 } });

// Aggregate: Group customers by country, count, and list cities
db.customers.aggregate([
  { $group: { _id: "$address.country", customerCount: { $sum: 1 }, cities: { $push: "$address.city" } } },
  { $sort: { customerCount: -1 } }
]).pretty();

// --- Orders Collection Queries ---

// Read: Get all orders
db.orders.find().pretty();

// Read: Filter orders by total amount
db.orders.find({ total_amount: { $gt: 20 } }).pretty();

// Read: Filter orders by date and amount
db.orders.find({ order_date: { $gte: new Date("2025-01-05") }, total_amount: { $lt: 25 } }).pretty();

// Update: Update order total amount
db.orders.updateOne(
  { total_amount: 12.99 },
  { $set: { total_amount: 14.99 } }
);

// Delete: Remove orders before January 3, 2025
db.orders.deleteOne({ order_date: { $lt: new Date("2025-01-03") } });

// Aggregate: Sum total_amount by customer_id and count orders
db.orders.aggregate([
  { $group: { _id: "$customer_id", totalSpent: { $sum: "$total_amount" }, orderCount: { $sum: 1 } } },
  { $sort: { totalSpent: -1 } }
]).pretty();

// --- Reviews Collection Queries ---

// Read: Get all reviews
db.reviews.find().pretty();

// Read: Filter reviews by rating
db.reviews.find({ rating: 5 }).pretty();

// Read: Filter reviews by rating and date
db.reviews.find({ rating: { $gte: 4 }, date: { $gte: new Date("2025-01-05") } }).pretty();

// Update: Update review comment
db.reviews.updateOne(
  { rating: 3 },
  { $set: { comment: "Updated: It was average." } }
);

// Delete: Remove reviews with rating below 3
db.reviews.deleteOne({ rating: { $lt: 3 } });

// Aggregate: Average rating per book_id and count reviews
db.reviews.aggregate([
  { $group: { _id: "$book_id", avgRating: { $avg: "$rating" }, reviewCount: { $sum: 1 } } },
  { $sort: { avgRating: -1 } }
]).pretty();