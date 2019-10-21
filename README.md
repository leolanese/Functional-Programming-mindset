# Functional Programming: "Functional mindset"


"Everyone should go back to COBOL! Make America Procedural Again!"
~ @anonymous


A large program is a costly program, and not just because of the time, it takes to build. Size almost always involves complexity, and complexity could confuse programmers. Confused programmers, in turn, tend to introduce mistakes (bugs) into programs. Functional Programming can help to make the code predictable and easy to debug, abstract control flows and operations on data with functions.

Functional Programming is about pulling programs apart and reassembling them from the same parts, abstracted behind function boundaries, but it's not a matter of just applying functions to come up with a result; the goal, rather, is to abstract control flows and operations on data with functions in order to avoid side effects and reduce mutation of state in your application.

Functional Programming it is not new, but becomes more popular these days, because lies at the heart of both of the dominant frameworks out there: <br/>

- React is using immutability as a principle and avoiding shared mutable DOM is the motivation for its architecture and unidirectional data flow. </br>
The react-redux connect() function is a purely curried one *0<br/>
Using immutability "read-only props" (inputs argunment of a Component granting inmmutability and avoiding side-effects) <br/>
React's development guidelines promote the creation of stateless component so  This should grant that the output of a component only depends on its props. A stateless component looks a lot like a pure function, and indeed it is. As we can see React promotes more Functional-Oriented than Object-Oriented practices*2<br/>

- Angular also have unidirectional data flow (and do not encorage 2 ways data binding) and RxJS is a library of utility operators that act on streams by way of Higher-order-Functions, its used extensively throughout Angular, but Angular API is highly influenced by OOP ideas and less influenced by FP ideas, but according to "Alan Kay", the investigator for all modern OOP, "The essence of OOP is: Encapsulation and Message Passing. So OOP is just another approach to "avoiding sharing mutable state and side-effects".<br/>

Now if we extend a bit Angular to enterprice levels: We can pick up Angular, RxJS, Redux & @ngrx/store*1, you will actually encounter key functional concepts at the core of what you learn: "pure functions", "immutability", "state", "mutation", "composition" or "reactive". We like more the idea of triggering "actions" that will invoke a "reducer" (pure function & immutable) and/or "@effect" (no-pure Class & immutable) in Redux than invoking a method in a Service Class in Angular. 

In fact other popular frameworks like VueJS, which use Vuex (similar to Redux) use the mutate the state in a predictable fashion way, it has a reactive state which means that you can modify the state in an imperative way.

We already have RxJS reactive extensions bundled up in your Angular application. Embracing their power will allow you to use the principles of Redux without having the need to introduce specific terminologies like actions and reducers.
Redux the core counts similar principle. Redux organize the application state into simple objects and update this read-only state by replacing it with a new state (no mutate). @ngrx/store is a RxJS stream, is a Redux implementation for Angular. Implements the Redux architectural pattern and principles using the well-known RxJS observables of Angular.

Please, join us. Let’s have an easy introduction to Functional Programming, chat about these ideas, what this style of writing code is and how could help us to produce a more predictable code.

</br>
*0 [react-redux.js.org]https://react-redux.js.org/api/connect)</br>
*1 [Redux (@ngrx/store) best practices](https://blog.strongbrew.io/Redux-best-practices/)</br>
*2 [So What About Inheritance?](https://reactjs.org/docs/composition-vs-inheritance.html#so-what-about-inheritance)</br>


### Presentation:
https://tech.io/playgrounds/24002/fp-workshop</br>


--

## { 'L e o   L a n e s e',
### 'I  B u i l d   I n s p i r i n g   R e s p o n s i v e   R e a c t i v e  S o l u t i o n s',
### 'L O N D O N ,  U K' }

# My Portfolio<br>
<a href="http://www.leolanese.com" target="_blank">http://www.leolanese.com</a><br>

# My Blog:<br>
<a href="http://www.leolanese.com/blog" target="_blank">www.leolanese.com/blog</a><br>

# Twitter:<br>
Follow me at:<a href="http://twitter.com/LeoLaneseltd" target="_blank">http://twitter.com/LeoLaneseltd</a><br>

# Questions / Suggestion / Recommendation ?<br>
