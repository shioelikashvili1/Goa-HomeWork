const book = {
  title: "The Great Gatsby",
  author: "F. Scott Fitzgerald",
  year: 1925,
  getSummary: function(){
      return this.book1+ ' ' + this.book2 + ' ' + this.book3}
}

console.log(book.title)

book.year = 2021
console.log(book.year)