http://localhost:5001/graphql

{
  book(id: "3") {
    name
    genre
    id
  }
}

* Relations
{
  book(id: "1") {
    name
    genre
    id
    author{
      id
      name
      age
    }
  }
}

* Lists
{
	author(id: 2){
  	name
    age
    id
    books{
      name
    }
  }
}
