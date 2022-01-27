import { EMPTY, of, throwError } from "rxjs"
import { PostsComponent } from "./posts.component"
import { PostsService } from "./posts.service"

describe('PostsComponent', () => {
  let component: PostsComponent
  let service: PostsService

  beforeEach(() => {
    service = new PostsService(null as any)
    component = new PostsComponent(service)  
  })

  it('should call fetch when ngOnInit', () => {
    const spy = spyOn(service, 'fetch').and.callFake( () => {
      return EMPTY
    })

    component.ngOnInit()
    expect(spy).toHaveBeenCalled()
  })

  it('should update posts length after ngOnInit', () => {
    const posts = [1, 2, 3, 4]
    spyOn(service, 'fetch').and.returnValue(of(posts))

    component.ngOnInit()
    expect(component.posts.length).toBe(posts.length)
  })

  it('should add new post', () => {
    const post = {title: 'test'}
    const spy = spyOn(service, 'create').and.returnValue(of(post))

    component.add(post.title)
    expect(spy).toHaveBeenCalled()
    expect(component.posts.length).toBeTruthy()
  }) 

  it ('should set message to error message', () => {
    const error = 'new Error'
    spyOn(service, 'create').and.returnValue(throwError(error))

    component.add('Post title')

    expect(component.message).toBe(error)
  })

  it('should NOT remove post if user doesnt confirm', () => {
    const spy = spyOn(service, 'remove').and.returnValue(EMPTY)
    spyOn(window, 'confirm').and.returnValue(false)

    component.delete(10)

    expect(spy).not.toHaveBeenCalled()
  })

})
