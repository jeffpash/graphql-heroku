#Set Up:

#npm install

#Request graphql :

#example of creating data mLab:
```sql
mutation {
  createPerson(firstName:"Jeff", lastName: "Pash"){
    firstName,
    lastName
  }
}
```sql
#Indexing :

{
  allPersons{
    firstName,
    lastName
  }
}
