// ===================================================|
// Atoms: LOGO

import { mapState } from 'vuex';

export default {
  computed: mapState({
    logo: ({ contentful }) =>
      contentful.data.identity.fields.logo.fields.file.url
  })
};
