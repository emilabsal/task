<template>
  <div class="wrap">
    <div class="inner">
      <form class="form" @submit.prevent="startSearch">
        <input v-model="searchValue" class="input flex-grow" type="text" />
        <button
          :disabled="disabled"
          class="input bg-aqua max-w-[220px] w-full"
          :class="{ 'opacity-50': disabled }"
          type="submit"
        >
          Search
        </button>
      </form>
      <div>
        <p class="text-center xs:text-[16px]">How many elements in storage:</p>
        <p class="quantity">
          {{ quantity }}
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  name: "App",
  data() {
    return {
      strings: [],
      quantity: "...",
      disabled: false,
      total: 1000000,
      length: 100,
    };
  },
  created() {
    this.disabled = true;
    if (!this.$getItem("strings")) {
      const allSymbols = "abcdefjhijklmnopqrstuvwxyzABCDEFJHIJKLMNOPQRSTUVWXYZ";
      let str = "";
      for (let i = 0; i < this.total; i++) {
        str = "";
        for (let j = 0; j < this.length; j++) {
          let randomNum = Math.floor(Math.random() * allSymbols.length);
          str += allSymbols[randomNum];
        }
        this.strings.push(str);
      }
      this.$setItem(`strings`, JSON.stringify(this.strings));
    }
    this.$getItem("strings").then((res) => {
      this.strings = JSON.parse(res);
      this.strings.sort();
      this.strings = this.strings.map((str) => str.substr(0, 1));
    });
    this.disabled = false;
  },
  methods: {
    updateSearchValue(searchValue) {
      this.$store.commit("setSearchValue", { searchValue: searchValue });
    },
    startSearch() {
      this.disabled = true;
      this.quantity = "counting...";
      const firstSearchSymbol = this.searchValue.substr(0, 1);
      let count;

      if (
        this.strings.filter((str) => str === firstSearchSymbol).length !== -1
      ) {
        count = this.strings.filter((str) => str === firstSearchSymbol).length;

        this.quantity = count;
      } else {
        this.quantity = 0;
      }

      this.disabled = false;
    },
  },
  computed: {
    ...mapState(["values"]),
    searchValue: {
      set(searchValue) {
        this.$store.commit("setSearchValue", { searchValue });
      },
      get() {
        return this.values.searchValue;
      },
    },
  },
};
</script>


