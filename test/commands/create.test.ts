import { assert } from 'chai';
const PromptSelect = require('enquirer/lib/prompts/select');
let prompt: any;

describe('keypress events', () => {
    it('should handle submitting with <enter>', () => {
        prompt = new PromptSelect({
            message: 'prompt-select',
            choices: [
                { name: 'a', message: 'A' },
                { name: 'b', message: 'BB' },
                { name: 'c', message: 'CCC' },
                { name: 'd', message: 'DDDD' }
            ]
        });

        prompt.once('run', () => {
            prompt.keypress(null, { name: 'return' });
        });

        return prompt.run().then((answer: string) => {
            assert.equal(answer, 'a');
        });
    });
});
