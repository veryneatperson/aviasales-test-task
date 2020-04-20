export const carrierLogoURL = '//pics.avs.io/99/36/';
export const searchIdErrorMsg = 'Не удалось  получить идентификатор поиска билетов';
export const ticketsErrorMsg = 'Не удалось получить билеты';

export const originalURL = 'https://front-test.beta.aviasales.ru';
export const mockURL = 'https://mock-aviasales-server.herokuapp.com';

// This boolean represents the status of the original Aviasales server
let isOriginalServerDown = true;

export const baseURL = isOriginalServerDown ? mockURL : originalURL;
