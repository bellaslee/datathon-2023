'use strict';

(function () {
  window.addEventListener('load', init);

  function init() {
    
  }

  /**
   * Returns the element that has the ID attribute with the specified value.
   * @param {string} name - element ID.
   * @returns {object} - DOM object associated with id.
   */
  function id(name) {
    return document.getElementById(name);
  }

  /**
   * Returns first element matching selector.
   * @param {string} selector - CSS query selector.
   * @returns {object} - DOM object associated selector.
   */
  function qs(selector) {
    return document.querySelector(selector);
  }

  /**
   * Returns an array of elements matching the given query.
   * @param {string} query - CSS query selector.
   * @returns {array} - Array of DOM objects matching the given query.
   */
  function qsa(query) {
    return document.querySelectorAll(query);
  }

  /**
   * Returns an empty DOM node with the specified type.
   * @param {string} tagName - HTML tag.
   * @returns {object} - empty DOM object of specified type.
   */
  function gen(tagName) {
    return document.createElement(tagName);
  }
})();