import { FormBuilder } from "@angular/forms";
import { CounterComponent } from "./counter.component"

describe('CounterComponent', () => {
    let component: CounterComponent
    
    beforeEach(() => {
        component = new CounterComponent(new FormBuilder());
    })


    it('should increment counter by 1', () => {
        component.increment();
        expect(component.counter).toBe(1) 
    })

    it('should decriment counter by 1', () => {
        component.decrement();
        expect(component.counter).toBe(-1) 
    })

    it('should increment value by event emitter', () => {
        let result: any = null
        component.counterEmitter.subscribe(v => result = v);
        component.increment()

        expect(result).toBe(1)
    })

    it('should creaste form with 2 controls', () => {
        expect(component.form.contains('login')).toBeTruthy();
        expect(component.form.contains('email')).toBeTruthy();
    })

    it('should mark login as invalid if empty value', () => {
        const control:any = component.form.get('login');

        control.setValue('');
        expect(control.valid).toBeFalse()
    })
})