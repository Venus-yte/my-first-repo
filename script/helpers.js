export const valueSetter = (selector, value) => {
    document.querySelector(selector).innerHTML = value;
}

export const tagCreator = (tagName, parent, value, index = '') => {
    const tag = document.createElement(tagName);
    tag.dataset.option = index;
    parent.appendChild(tag);
    tag.innerHTML = value;
}