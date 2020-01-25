// ===================================================|
// Atoms: COPYRIGHT

export default {
  props: {
    startingYear: {
      type: Number,
      required: true
    },
    domain: {
      type: String,
      required: true
    }
  },

  computed: {
    year() {
      const thisYear = new Date().getFullYear();
      return parseInt(this.startingYear) === thisYear
        ? this.startingYear
        : `${this.startingYear}–${thisYear}`;
    }
  }
};
