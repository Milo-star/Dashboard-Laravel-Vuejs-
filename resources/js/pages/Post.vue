<template>
    <v-card rounded class="py-8 px-4">
        <div class="flex">
            <h1 class="flex-1">Posts</h1>
            <create-post/>
        </div>
    </v-card>
    <v-progress-linear color="blue-lighten-3" indeterminate :height="2"></v-progress-linear>


    <v-table>
    <thead>
      <tr>
        <th class="text-left">Slug</th>
        <th class="text-left">Title</th>
        <th class="text-left">Updated At</th>
        <th class="text-right">Actions</th>
      </tr>
    </thead>
    <tbody>
      <tr
        v-for="({id, slug, title, updated_at}, index) in posts"
        :key="index"
      >
        <td>{{ slug }}</td>
        <td>{{ title }}</td>
        <td>{{ updated_at }}</td>
        <td class="flex justify-end items-center gap-2">
            <update-post :post="index" />
            <delete-post :post="index" />
        </td>
      </tr>
    </tbody>
  </v-table>
</template>

<script setup>

    import { onMounted, ref } from 'vue'
    import CreatePost from '../components/CreatePost.vue'
    import DeletePost from '../components/DeletePost.vue';
    import UpdatePost from '../components/UpdatePost.vue';
    import useApi from '../composables/useApi';

    const { $get } = useApi;

    const posts = ref([
        { slug: 'post-1', title: 'Home', updated_at: '2023-04-25' },
        { slug: 'post-2', title: 'About', updated_at: '2023-04-25' },
        { slug: 'post-3', title: 'Posts', updated_at: '2023-04-25' },
    ])

    onMounted( async () => {
      const response = await $get("posts");
      console.log(response);
      //posts.value = await response.json();
    })


</script>