# Functional Programming: "Functional mindset"

"Everyone should go back to COBOL! Make America Procedural Again!"
~ @anonymous

A large program is a costly program, and not just because of the time, it takes to build. Size almost always involves complexity, and complexity could confuse programmers. Confused programmers, in turn, tend to introduce mistakes (bugs) into programs. Functional Programming can help to make the code predictable and easy to debug, abstract control flows and operations on data with functions.

Functional Programming is about pulling programs apart and reassembling them from the same parts, abstracted behind function boundaries, but it's not a matter of just applying functions to come up with a result; the goal, rather, is to abstract control flows and operations on data with functions in order to avoid side effects and reduce mutation of state in your application.

Functional Programming it is not new, but becomes more popular these days, because lies at the heart of both of the dominant frameworks out there: React (using immutability as a principle and avoiding shared mutable DOM is 
the motivation for its architecture and unidirectional data flow) and Angular (we also have unidirectional data flow and RxJS is a library of utility operators that act on streams by way of Higher-order-Functions, its used extensively throughout Angular). 

Angular is being advertised as a framework that gives you everything but teaches us a little to none about FP. Angular API is highly influenced by OOP ideas and less influenced by FP ideas, but according to Alan Kay, the investigator for all modern OOP, the essence of OOP is: Encapsulation and Message Passing. So OOP is just another approach to "avoiding sharing mutable state and side-effects".

if we pick up Angular, Redux & @ngrx/store, you will actually encounter key functional concepts at the core of what you learn: "pure functions", "immutability", "state", "mutation", "composition" or "reactive". We like more the idea of triggering "actions" that will invoke a "reducer" (pure function & immutable) and/or "@effect" (no-pure Class & immutable) in Redux than invoking a method in a Service Class in Angular.

We already have RxJS reactive extensions bundled up in your Angular application. Embracing their power will allow you to use the principles of Redux without having the need to introduce specific terminologies like actions and reducers.
Redux the core counts similar principle. Redux organize the application state into simple objects and update this read-only state by replacing it with a new state (no mutate). @ngrx/store is a RxJS stream, is a Redux implementation for Angular. Implements the Redux architectural pattern and principles using the well-known RxJS observables of Angular.

Please, join us. Let’s have an easy introduction to Functional Programming, chat about these ideas, what this style of writing code is and how could help us to produce a more predictable code.

