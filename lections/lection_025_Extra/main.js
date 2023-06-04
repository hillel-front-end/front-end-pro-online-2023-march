class BookCollection extends Array {
  constructor(...items) {
    super(...items); // new Array(...items)
  }

  members = [];

  // subscribe
  onCollectionChanged(cb) {
    this.members.push(cb);
  }

  notify(newBook) {
    this.members.forEach((cb) => cb(newBook));
  }

  add(newBook) {
    // шось корисне
    console.log('added new book', newBook.title)
    this.push(newBook);
    this.notify(newBook);
  }

  bestPrice(limit = this.length) {
    return this.sort((a, b) => (a.price > b.price ? -1 : 1)).slice(0, limit);
  }

  // filter

  /// validation
}

const collection = new BookCollection(
  { title: "Harry Potter", price: 22 },
  { title: "Star Wars", price: 6 },
  { title: "Avatar", price: 16 },
  { title: "Terminator", price: 8 }
); // =>> []

const emailSender = (book) => {
    console.log('sending email messages', book);
    //call api gmail
}

const tgSender = (book) => {
    console.log('sending tg messages', book);

    const message = {
        bookName: book.title
    }
     //call api telegram
}

const viberSender = (book) => {
    console.log('sending viber messages', book);
}

collection.onCollectionChanged(emailSender);
collection.onCollectionChanged(tgSender);
collection.onCollectionChanged(viberSender);


console.log(collection, "collection");

collection.add({ title: "Tom Soyer", price: 13 });




collection.add({ title: "Fooo lo lal", price: 22 });

// console.log(collection.bestPrice(3), "collection");
// -----

// const a = new Array(
//   { title: "Harry Potter", price: 22 },
//   { title: "Star Wars", price: 6 },
//   { title: "Avatar", price: 16 },
//   { title: "Terminator", price: 8 }
// );

const coll = new BookCollection(
  { title: "Harry Potter", price: 22 },
  { title: "Star Wars", price: 6 },
  { title: "Avatar", price: 16 },
  { title: "Terminator", price: 8 }
);

console
  .log
  // coll.bestPrice()
  ();

// ----------------------------------
