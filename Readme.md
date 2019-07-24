http://localhost:5001/graphql

{
  book(id: 3) {
    name
    genre
    id
  }
}

* Relations
{
  book(id: 1) {
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
#1
{
  books{
  	name
	}
}
#2
{
  books{
  	name
    author{
      name
    }
	}
}
#3
{
  authors{
  	name
    books{
      name
    }
	}
}
#4
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

* Mutations
mutation{
  addAuthor(name: "Adi", age: 30){
    name
    age
  }
}