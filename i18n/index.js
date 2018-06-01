import React from 'react';
import I18n from 'ex-react-native-i18n'
import fr from './fr';
import en from './en';
import az from './az';

I18n.fallbacks = true;

I18n.defaultLocale = 'en-EN';

I18n.translations = {
  fr,
  en,
  az
};

export default I18n ;