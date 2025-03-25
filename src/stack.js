export default function createStack() {
    const items = [];

    return {
        push(value) {
            items.push(value);
        },
        pop() {
            if (this.isEmpty()) {
                throw new Error('Stack is empty');
            }
            return items.pop();
        },
        peek() {
            return items[items.length - 1];
        },
        isEmpty() {
            return items.length === 0;
        },
        size() {
            return items.length;
        }
    };
}
