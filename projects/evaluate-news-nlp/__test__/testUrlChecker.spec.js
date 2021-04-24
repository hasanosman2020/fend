import { TestScheduler } from '@jest/core'
import { checkForUrl } from '../src/client/js/urlChecker'
describe('Testing the checker functionality', () => {
    test('Testing the checkforUrl() function', () => {
        expect(checkForUrl).toBeDefined()
    });

    test('Should be a function', () => {
        expect(typeof checkForUrl).toBe('function')
    })

})