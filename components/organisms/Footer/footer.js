// ===================================================|
// Organisms: FOOTER

import { mapState } from 'vuex';
import { homepage } from '@/package';

// Components
import Logo from '@/node_modules/mm-atomic-pack/components/atoms/Logo';
import Copyright from '@/node_modules/mm-atomic-pack/components/atoms/Copyright';

export default {
  components: { Logo, Copyright },

  computed: {
    ...mapState({
      foundationYear: ({ contentful }) => contentful.data.foundationYear
    }),
    domain() {
      return homepage.replace('http://', '').replace('https://', '');
    }
  }
};
