import { createClient } from 'contentful';

export default createClient({
  environment: process.env.NODE_ENV === 'development' ? 'master' : 'production',
  space: '6f93imtg39gj',
  accessToken:
    '020aeb7d903b2cd4b36eacfe969665a35fa736cd61071c14cfed0588c8dd8f6d',
  resolveLinks: true
});
