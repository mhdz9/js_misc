/* Module pattern
    Item controller
    UI controller
    Storage controller
    Main app controller
*/

// Basic structure
// (function() {
//     // Declare private variables and functions
//     return {
//         // Declare public variables and function
//     }
// })();

// Standard module pattern
// const UICtrl = (function() {
//     // Private
//     let text = 'Hello World';
//     const changeText = function() {
//         const element = document.querySelector('h1');
//         element.textContent = text;
//     }

    // Public - Private variables and functions can be accessed here, but not outside
//     return {
//         callChangeText: function() {
//             changeText();
//             console.log(text);
//         }
//     }
// })();

// UICtrl.callChangeText();
// UICtrl.changeText();
// console.log(UICtrl.text);

// Revealing module pattern
// const ItemCtrl = (function() {
//     let data = [];
//     function add(item) {
//         data.push(item);
//         console.log('Item added');
//     }

//     function get(id) {
//         return data.find(item => {
//             return item.id === id;
//         });
//     }

//     return {
//         add: add,
//         get: get
//     }
// })();

// ItemCtrl.add({id: 1, name: 'John'});
// ItemCtrl.add({id: 2, name: 'Mark'});
// console.log(ItemCtrl.get(1));
// console.log(ItemCtrl.get(2));

// Singleton module pattern - Immediate anonymous function and can only return one instance of an object at the time. For not more than one instance.
// const Singleton = (function() {
//     let instance;
//     function createInstance() {
//         const object = new Object({name: 'Brad'});
//         return object;
//     }
//     return {
//         getInstance: function() {
//             if(!instance) {
//                 instance = createInstance();
//             }
//             return instance;
//         }
        
//     }
// })();

// const instanceA = Singleton.getInstance();
// const instanceB = Singleton.getInstance();
// console.log(instanceA === instanceB);

// Factory module pattern - For apps that manage and maintain collections of objects. Like paid membership application or website, where there are different types of members that share common properties. Objects created based on a type.
// function MemberFactory() {
//     this.createMember = function(name, membershipType) {
//         let member;
//         if(membershipType === 'simple') {
//             member = new SimpleMembership(name);
//         }
//         else if(membershipType === 'standard') {
//             member = new StandardMembership(name);
//         }
//         else if(membershipType === 'super') {
//             member = new SuperMembership(name);
//         }

//         member.membershipType = membershipType;

//         member.define = function() {
//             console.log(`${this.name} (${this.membershipType}): ${this.cost}`);
//         }

//         return member;
//     }
// }

// const SimpleMembership = function(name) {
//     this.name = name;
//     this.cost = '$5';
// }

// const StandardMembership = function(name) {
//     this.name = name;
//     this.cost = '$15';
// }

// const SuperMembership = function(name) {
//     this.name = name;
//     this.cost = '$25';
// }

// const members = [];
// const factory = new MemberFactory();

// members.push(factory.createMember('John Doe', 'simple'));
// members.push(factory.createMember('Beth Doe', 'standard'));
// members.push(factory.createMember('Janice Williams', 'super'));
// members.push(factory.createMember('Mark Smith', 'super'));
// // console.log(members);

// members.forEach(member => member.define());

// Observer module pattern - Notify DOM of certain elements to be updated. Subscription model. AngularJS relies on this pattern through event management within scope.
// function EventObserver() {
//     this.observers = [];
// }

// EventObserver.prototype = {
//     subscribe: function(fn) {
//         this.observers.push(fn);
//         console.log(`You are now subscribed to ${fn.name}`);
//     },
//     unsubscribe: function(fn) {
//         // Filter out from the list whatever matches the callback function. If there is no match, the callback gets to stay on the list. The filter returns a new list and reassigns the list of observers.
//         this.observers = this.observers.filter(function(item) {
//             if(item !== fn) {
//                 return item;
//             }
//         });
//         console.log(`You are now unsubscribed from ${fn.name}`);
//     },
//     fire: function() {
//         this.observers.forEach(function(item) {
//             item.call();
//         });
//     }
// }

// const click = new EventObserver();

// // Event Listeners
// // Subscribe to Milliseconds
// document.querySelector('.sub-ms').addEventListener('click', function() {
//     click.subscribe(getCurrentMilliseconds);
// });

// // Unsubscribe from Milliseconds
// document.querySelector('.unsub-ms').addEventListener('click', function() {
//     click.unsubscribe(getCurrentMilliseconds);
// });

// // Subscribe to Seconds
// document.querySelector('.sub-s').addEventListener('click', function() {
//     click.subscribe(getCurrentSeconds);
// });

// // Unsubscribe from Seconds
// document.querySelector('.unsub-s').addEventListener('click', function() {
//     click.unsubscribe(getCurrentSeconds);
// });

// // Fire
// document.querySelector('.fire').addEventListener('click', function() {
//     click.fire();
// });

// // Click Handler - Milliseconds
// const getCurrentMilliseconds = function() {
//     console.log(`Current Milliseconds: ${new Date().getMilliseconds()}`);
// }

// // Click Handler - Seconds
// const getCurrentSeconds = function() {
//     console.log(`Current Seconds: ${new Date().getSeconds()}`);
// }

// Mediator module pattern
// const User = function(name) {
//     this.name = name;
//     this.chatroom = null;
// }

// User.prototype = {
//     send: function(message, to) {
//         this.chatroom.send(message, this, to);
//     },
//     receive: function(message, from) {
//         console.log(`${from.name} to ${this.name}: ${message}`);
//     }
// }

// const Chatroom = function() {
//     let users = {}; // List of users
    
//     return {
//         register: function(user) {
//             users[user.name] = user;
//             user.chatroom = this;
//         },
//         send: function(message, from, to) {
//             if(to) {
//                 // Single user message
//                 to.receive(message, from);
//             }
//             else {
//                 // Broadcast message
//                 for(key in users) {
//                     if(users[key] !== from) {
//                         users[key].receive(message, from);
//                     }
//                 }
//             }
//         }
//     }
// }

// const brad = new User('Brad');
// const jeff = new User('Jeff');
// const sarah = new User('Sarah');

// const chatroom = new Chatroom();

// chatroom.register(brad);
// chatroom.register(jeff);
// chatroom.register(sarah);

// brad.send('Hello, Jeff', jeff);
// sarah.send('Hello, Brad', brad);
// jeff.send('Hello everyone');