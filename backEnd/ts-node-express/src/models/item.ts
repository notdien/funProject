// Defines a simple Item type and an in-memory array to store items

export interface Item {
    id: number;
    name: string;
}

let items: Item[] = [];

module.exports = {
    items
};