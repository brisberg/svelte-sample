// NOTE: jest-dom adds handy assertions to Jest and it is recommended, but not
// required.
import '@testing-library/jest-dom';

import {render} from '@testing-library/svelte';

import MainBody from './MainBody.svelte';

test('shows default message when rendered', () => {
  const {getByText} = render(MainBody);

  expect(getByText('barbaz')).toBeInTheDocument();
});

test('shows given prop when rendered', () => {
  const {getByText} = render(MainBody, {foobar: 'bin'});

  expect(getByText('bin')).toBeInTheDocument();
});

test('constructs a label when called', () => {
  const {component} = render(MainBody);

  expect(component.getLabel('qaz')).toEqual('barbaz + qaz');
});

// Note: This is as an async test as we are using `fireEvent`
// test('changes button text on click', async () => {
//   const {getByText} = render(MainBody, {name: 'World'});
//   const button = getByText('Button');

//   // Using await when firing events is unique to the svelte testing
//   // library because we have to wait for the next `tick` so that
//   // Svelte flushes all pending state changes.
//   await fireEvent.click(button);

//   expect(button).toHaveTextContent('Button Clicked');
// });
