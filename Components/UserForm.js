/** @jsx React.createElement */
import { tracker } from '../utils/InteractionTracker.js';

window.UserForm = function UserForm(props) {
  return React.createElement("div", {
    className: "fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
  }, /* ... resto do JSX ... */);
}; 