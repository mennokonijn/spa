import Chance from 'chance';

const chance = new Chance();
const exampleUsers = [];

for (let i = 1; i <= 100; i++) {
    const createdAt = chance.date({ min: new Date('2020-01-01'), max: new Date() });
    const updatedAt = chance.date({max: new Date(), min: createdAt});

    const user = {
        id: i,
        username: chance.name(),
        email: chance.email(),
        createdAt: createdAt,
        updatedAt: updatedAt,
        verified: chance.bool(),
        age: chance.integer({ min: 18, max: 58 }),
    };
    exampleUsers.push(user);
}

export { exampleUsers };