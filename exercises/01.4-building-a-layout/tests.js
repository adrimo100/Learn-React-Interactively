
import ReactDOM from 'react-dom';
import { WhatToRender } from './app.jsx';
import renderer from 'react-test-renderer';

jest.mock('react-dom', () => ({ render: jest.fn() }));

test('ReactDOM.render needs to be called once', () => {
    expect(ReactDOM.render.mock.calls.length).toBe(1);
});

test('The component should return the exact HTML', () => {
    const tree = renderer
        .create(ReactDOM.render.mock.calls[0][0])
        .toJSON();
        console.log(tree);
    expect(tree).toMatchInlineSnapshot(`
<div
  class="card m-5"
>
  <img
    alt="Card image cap"
    class="card-img-top"
    src="../../.learn/assets/Dylan.png?raw=true"
  />
  <div
    class="card-body"
  >
    <h5
      class="card-title"
    >
      Bob Dylan
    </h5>
    <p
      class="card-text"
    >
      Bob Dylan (born Robert Allen Zimmerman, May 24, 1941) is an American singer-songwriter, author, and artist who has been an influential figure in popular music and culture for more than five decades.
    </p>
    <a
      class="btn btn-primary"
      href="https://en.wikipedia.org/wiki/Bob_Dylan"
    >
      Go to wikipedia
    </a>
  </div>
</div>
`);
});