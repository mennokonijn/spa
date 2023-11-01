import Chance from 'chance';
import {LoremIpsum} from 'lorem-ipsum';

const chance = new Chance();
const exampleTasks = [];
const lorem = new LoremIpsum({
    sentencesPerParagraph: {
        max: 8,
        min: 4
    },
    wordsPerSentence: {
        max: 16,
        min: 4
    }
});

for (let i = 1; i <= 50; i++) { // Generate 50 example tasks
    const task = {
        id: i,
        title: chance.sentence({ words: 3 }),
        description: lorem.generateParagraphs(1),
        completed: chance.bool(),
    };
    exampleTasks.push(task);
}

export { exampleTasks };