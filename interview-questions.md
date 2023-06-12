# ASSESSMENT 5: Interview Practice Questions

Answer the following questions.

First, without external resources. Challenge yourself to answer from memory.

Then, research the question to expand on your answer. Even if you feel you have answered the question completely on your own, there is always something more to learn. Write your researched answer in your OWN WORDS.

1. What does calling super do in a Ruby class?

Your answer:Calling super is away to inherit methods from a parent class, in Ruby.  If a child is inheriting from a parent, then the child will look to the parent for the method it needs.

Researched answer: You can also use it to call a method in the parent class that has the same method name.  Without super, the child class' method would override the parent's.

2. What is a gem? 

Your answer: a gem is a library of code you install in your application for Ruby that provides additional functionality.  They can be managed with a package manager.

Researched answer: The libraries are open source, and contain code that can be accessed without having to be inserted into the codebase. Kind of like modular code.

3. What is a relational database? Are there other kinds of databases?

Your answer: Relational databases are linked by foreign keys, so we can separate information and organize it in a way that's easier to work with. There are other types of databases, but I'd have to look up their names.

Researched answer: Relational Databases are a way of structuring information in tables, rows, and columns, and giving them relationships with each other. Other database types include: Hierarchical, network, Object-oriented, and noSQL databases

4. What are primary keys? Why purpose does a primary key serve?

Your answer: Primary keys are the identifying element for each line item in a database model. In Ruby, the default is an integer. so the first item would have a primary key of `1`, and each following entry would be sequentially numbered. Each key can only be used once, so each element has a unique key value

Researched answer: Each table can only have 1 key. Keys can not be null, and every row must have a primary key.

5. What are the five HTTP verbs? What is each verb's corresponding CRUD action?

Your answer: while the verbs are HTTP specific in this case, CRUD seems to apply to a broader range of programs and proceses.
get = Create
post = Read
put / patch = Update
delete = Delete

Researched answer:

## Looking Ahead: Terms for Next Week

Research and define the following terms to the best of your ability.

1. Model validations: A set of programed rules that test whether data in the model is of the right type and quality.

2. RESTful routes: conventional patters when structuring routes that interact with the server whenever an HTTP request is made.  To be RESTful the route must separate the client from the server, not hold state between requests, use HTTP methods, and be reliable.

3. ERB: Embedded Ruby. A way to run ruby code inside an HTML document (similar to JavaScript scripts)

4. Params: alias for the 'parameters' method. 
  the method returns an object, that is similar to a hash. it's what sends and receives requests from the model, I think.

5. API: Application Programming Interface - Software that allows 2 different programs to interface with each other.
