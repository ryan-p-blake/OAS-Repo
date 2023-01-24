<template>
  <v-card class="mx-auto" max-width="500">
    <v-table>
      <thead>
        <tr>
          <th class="text-left">Name</th>
          <th class="text-left">Data</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in dataTable" :key="item.id">
          <td>{{ item.name }}</td>
          <td>{{ item.value }}</td>
        </tr>
      </tbody>
    </v-table>
    <div class="fill-height">
      <v-btn block @click="loadExperiences"> Add Item </v-btn>
    </div>
    <div class="fill-height">
      <v-btn block @click="removeItem"> Remove Item </v-btn>
    </div>
  </v-card>
</template>

<script>
export default {
  data: () => ({
    name: "",
    value: 0,
    dataTable: [
      {
        name: "Frozen Yogurt",
        value: 159,
      },
    ],
  }),
  methods: {
    addItem() {
      this.dataTable.push({ name: "test", value: 123 });
    },
    removeItem() {
      this.dataTable.pop();
    },
    loadExperiences() {
      fetch("https://vue-http-demo-3f7e6-default-rtdb.firebaseio.com/path/to.json")
        .then((response) => {
          if (response.ok) {
            return response.json();
          }
        })
        .then((data) => {
          const dataTable = [];
          for (const id in data) {
            dataTable.push({ value: data[id], name: "test" });
          }
          this.dataTable = dataTable;
        });
    },
  },
};
</script>
