<template>
  <div class="pagination" v-if="totalPages < 5">
    <button
      :disabled="page <= 1"
      @click="pageClick(page + -1)"
      class="button left"
    >
      Forrige
    </button>
    <button
      class="paginationButton"
      @click="pageClick(pageNumber)"
      :disabled="pageNumber == page"
      v-for="pageNumber in totalPages"
      :key="pageNumber"
    >
      {{ pageNumber }}
    </button>
    <button
      :disabled="page >= totalPages"
      @click="pageClick(page + 1)"
      class="button right"
    >
      næste
    </button>
  </div>
  <div class="pagination" v-else>
    <button
      :disabled="page <= 1"
      @click="pageClick(page + -1)"
      class="button left"
    >
      Forrige
    </button>

    <button
      class="paginationButton"
      @click="pageClick(pageNumber)"
      :disabled="pageNumber == page"
      v-for="pageNumber in getAdjacentPages"
      :key="pageNumber"
    >
      {{ pageNumber }}
    </button>

    <button
      :disabled="page >= totalPages"
      @click="pageClick(page + 1)"
      class="button right"
    >
      næste
    </button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      page: 0
    };
  },
  props: {
    currentPage: {
      default: 1,
      type: Number
    },
    totalPages: {
      default: 0,
      type: Number
    }
  },
  methods: {
    pageClick(currentPage) {
      this.page = currentPage;
      this.$emit('pageChanged', currentPage);
    }
  },
  computed: {
    getAdjacentPages() {
      return [
        this.currentPage - 2,
        this.currentPage - 1,
        this.currentPage,
        this.currentPage + 1,
        this.currentPage + 2
      ];
    }
  },
  mounted() {
    this.page = this.currentPage;
  }
};
</script>

<style scoped>
.pagination {
  display: flex;
  justify-content: center;
  margin: 8px;
}
.button {
  color: black;
  float: left;
  padding: 14px 24px;
  text-decoration: none;
  border: 1px solid #ddd;
  cursor: pointer;
}
.button.right {
  border-radius: 0px 4px 4px 0px;
}
.button.left {
  border-radius: 4px 0px 0px 4px;
}
.button:hover {
  background-color: #ccc;
  border: 1px solid #ccc;
}
.button:disabled {
  background: #ccc;
  border: 1px solid #ccc;
  cursor: auto;
}
.paginationButton {
  color: black;
  float: left;
  padding: 14px 24px;
  width: 60px;
  text-decoration: none;
  border: 1px solid #ddd;
  cursor: pointer;
}
.paginationButton:hover {
  background-color: #ddd;
}
.paginationButton:disabled,
.paginationButton:hover .paginationButton[disabled] {
  background-color: #ffd859;
  border: 1px solid #ffd859;
  cursor: auto;
}
</style>
