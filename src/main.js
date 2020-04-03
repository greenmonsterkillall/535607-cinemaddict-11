import {createProfileTemplate} from "./components/profile.js";
import {createNavigationTemplate} from "./components/site-navigation.js";
import {createSortTemplate} from "./components/sort.js";
import {createFilmsTemplate} from "./components/films.js";
import {createFilmCardTemplate} from "./components/film-card.js";
import {createShowMoreButtonTemplate} from "./components/show-more-button.js";
import {createStatisticsTemplate} from "./components/statistics.js";
// popup
// import {createFilmDetailsTemplate} from "./components/film-details.js";

const FILMS_COUNT = 5;
const EXTRA_FILMS_COUNT = 2;

const render = (container, template, place = `beforeend`) => {
  container.insertAdjacentHTML(place, template);
};

const siteHeaderElement = document.querySelector(`.header`);
const siteMainElement = document.querySelector(`.main`);
const siteFooterElement = document.querySelector(`.footer`);

render(siteHeaderElement, createProfileTemplate());
render(siteMainElement, createNavigationTemplate());
render(siteMainElement, createSortTemplate());

render(siteMainElement, createFilmsTemplate());

const siteFilmsListElement = siteMainElement.querySelector(`.films-list`);
const siteFilmsContainerElement = siteFilmsListElement.querySelector(`.films-list__container`);

for (let i = 0; i < FILMS_COUNT; i++) {
  render(siteFilmsContainerElement, createFilmCardTemplate());
}

render(siteFilmsContainerElement, createShowMoreButtonTemplate(), `afterend`);

const siteExtraFilmsListElement = siteMainElement.querySelectorAll(`.films-list--extra`);

for (let i = 0; i < siteExtraFilmsListElement.length; i++) {
  const siteExtraFilmsContainerElement = siteExtraFilmsListElement[i].querySelector(`.films-list__container`);

  for (let j = 0; j < EXTRA_FILMS_COUNT; j++) {
    render(siteExtraFilmsContainerElement, createFilmCardTemplate());
  }
}

render(siteFooterElement, createStatisticsTemplate());

// show popup
// render(siteFooterElement, createFilmDetailsTemplate(), `afterend`);
