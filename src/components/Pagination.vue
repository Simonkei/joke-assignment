<template>
  <div class="pagination">
    <div v-if="totalPages > 5">
      <li class="pagination-item">
        <button
          type="button"
          @click="onClickPreviousPage"
          :disabled="isInFirstPage"
        >
          Forrige
        </button>
      </li>

      <li v-for="page in pages" class="pagination-item" :key="page.name">
        <button
          type="button"
          @click="onClickPage(page.name)"
          :disabled="page.isDisabled"
          :class="{ active: isPageActive(page.name) }"
        >
          {{ page.name }}
        </button>
      </li>

      <li class="pagination-item">
        <button type="button" @click="onClickNextPage" :disabled="isInLastPage">
          Næste
        </button>
      </li>
    </div>
    <div v-else>
      <li v-for="page in totalPages" class="pagination-item" :key="page">
        <button
          type="button"
          @click="onClickPage(page)"
          :disabled="page == currentPage"
          :class="{ active: isPageActive(page) }"
        >
          {{ page }}
        </button>
      </li>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    maxVisibleButtons: {
      type: Number,
      required: false,
      default: 5
    },
    totalPages: {
      type: Number,
      required: true
    },
    currentPage: {
      type: Number,
      required: true
    }
  },
  computed: {
    startPage() {
      if (this.currentPage === 1) {
        return 1;
      }
      if (this.currentPage === this.totalPages) {
        return this.totalPages - this.maxVisibleButtons + 1;
      }
      return this.currentPage - 1;
    },
    endPage() {
      return Math.min(
        this.startPage + this.maxVisibleButtons - 1,
        this.totalPages
      );
    },
    pages() {
      const range = [];

      for (let i = this.startPage; i <= this.endPage; i += 1) {
        range.push({
          name: i,
          isDisabled: i === this.currentPage
        });
      }
      return range;
    },
    isInFirstPage() {
      return this.currentPage === 1;
    },
    isInLastPage() {
      return this.currentPage === this.totalPages;
    }
  },
  methods: {
    onClickPreviousPage() {
      this.$emit('pagechanged', this.currentPage - 1);
    },
    onClickPage(page) {
      this.$emit('pagechanged', page);
    },
    onClickNextPage() {
      this.$emit('pagechanged', this.currentPage + 1);
    },

    isPageActive(page) {
      return this.currentPage === page;
    }
  }
};
</script>
<style scoped>
.pagination {
  text-align: center;
  margin: 30px;
}

.pagination-item {
  display: inline-block;
}
.pagination-item button {
  padding: 10px 16px;
  cursor: pointer;
}

.active {
  background-color: #4aae9b;
  color: #ffffff;
  cursor: auto;
}
</style>
