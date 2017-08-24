import { czech } from './translation/cs';
import { english } from './translation/en';

const initialState = {
  lang: czech.lang,
  messages: czech.messages
};

export const localeReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'LOCALE_SELECTED':
      switch (action.locale) {
        case 'en':
          return { lang: english.lang, messages: english.messages };
        case 'cs':
          return { lang: czech.lang, messages: czech.messages };
        default:
          return state;
      }
    default:
      return state;
  }
};
