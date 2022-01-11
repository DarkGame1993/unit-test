import { CounterComponent } from "./counter.component"

describe('CounterComponent', () => {
    let component: CounterComponent
    
    beforeEach(() => {
        component = new CounterComponent();
    })


    it('should increment counter by 1', () => {
        component.increment();
        expect(component.counter).toBe(1) 
    })

    it('should decriment counter by 1', () => {
        component.decrement();
        expect(component.counter).toBe(-1) 
    })
})