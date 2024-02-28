/** @enum {string} Перечисление возможных позиций для отрисовки */
const RenderPosition = {
  BEFOREBEGIN: "beforebegin",
  AFTERBEGIN: "afterbegin",
  BEFOREEND: "beforeend",
  AFTEREND: "afterend",
};

/**
 * Функция для создания элемента на основе разметки
 */
export function createElement(template) {
  const newElement = document.createElement("div");
  newElement.innerHTML = template;

  return newElement.firstElementChild;
}

/**
 * Функция для отрисовки элемента
 */
export function render(component, container, place = RenderPosition.BEFOREEND) {
  container.insertAdjacentElement(place, component.element);
}
