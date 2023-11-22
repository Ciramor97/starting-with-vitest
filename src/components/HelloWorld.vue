<script setup lang="ts">
import { onMounted, ref } from "vue";
import axios from "axios";
defineProps<{
  msg: string;
  alert: string | null;
}>();
type User = {
  id: number;
  name: string;
};
const users = ref<User[]>();
const loadFromServer = async () => {
  users.value = (
    await axios.get("https://jsonplaceholder.typicode.com/users")
  ).data;
};

loadFromServer();
// onMounted(() => {
// }),
</script>

<template>
  <div class="greetings">
    <h1 class="green">{{ msg }}</h1>
    <span v-if="alert" class="green">{{ alert }}</span>
  </div>
  <div>
    <ul>
      <li v-for="user in users" :key="user.id" data-test="user">
        {{ user.name }}
      </li>
    </ul>
  </div>
</template>

<style scoped>
h1 {
  font-weight: 500;
  font-size: 2.6rem;
  position: relative;
  top: -10px;
}

h3 {
  font-size: 1.2rem;
}

.greetings h1,
.greetings h3 {
  text-align: center;
}

@media (min-width: 1024px) {
  .greetings h1,
  .greetings h3 {
    text-align: left;
  }
}
</style>
