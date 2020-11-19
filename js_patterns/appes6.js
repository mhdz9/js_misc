class EventObserver {
    constructor() {
        this.observers = [];
    }

    subscribe(fn) {
        this.observers.push(fn);
        console.log(`You are now subscribed to ${fn.name}`);
    }

    unsubscribe(fn) {
        this.observers = this.observers.filter(item => {
            if(item !== fn) {
                return item;
            }
        });
        console.log(`You are now unsubscribed from ${fn.name}`);
    }

    fire() {
        this.observers.forEach(item => item.call());
    }
}

const click = new EventObserver();

// Event Listeners
// Subscribe to Milliseconds
document.querySelector('.sub-ms').addEventListener('click', () => click.subscribe(getCurrentMilliseconds));
// Unsubscribe from Milliseconds
document.querySelector('.unsub-ms').addEventListener('click', () => click.unsubscribe(getCurrentMilliseconds));
// Subscribe to Seconds
document.querySelector('.sub-s').addEventListener('click', () => click.subscribe(getCurrentSeconds));
// Unsubscribe from Seconds
document.querySelector('.unsub-s').addEventListener('click', () => click.unsubscribe(getCurrentSeconds));
// Fire
document.querySelector('.fire').addEventListener('click', () => click.fire());

// Click Handler - Milliseconds
const getCurrentMilliseconds = () => console.log(`Current Milliseconds: ${new Date().getMilliseconds()}`);

// Click Handler - Seconds
const getCurrentSeconds = () => console.log(`Current Seconds: ${new Date().getSeconds()}`);