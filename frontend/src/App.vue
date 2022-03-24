<template>
  <header>
    <h1> Sushibar </h1>   
  </header>
  <main>
    <section v-for="table of this.tables" v-bind:key="table" class="dinnertable">
      <h2>Table #{{ table.id }}</h2>
      <ul>
        <li v-for="(seat, index) of table.seats" :key="index" class="seat" :class="{'occupied' : seat._occupied}">
          
        </li>
      </ul>
      <aside>
        <input @input="guests" type="number"> Guests
        <button @click="seatGroup">Add Guest</button>
      </aside>
    </section>
  </main>
  <footer>
    <aside>
      <label>TotalTables</label> <input @input="numTables" type="number">
    </aside>        
  </footer>
</template>

<script>
const API_URL = "http://localhost:8080/api/v1/";

export default {
  name: "SushiBar",
  data: () => ({
    error: "",
    message: '',
    numSeats: 0,
    tables: [],
  }),

  mounted() {
    fetch(API_URL)
      .then(response => response.json())
      .then(result => {
        console.log(result);
        this.message = "test";
        this.tables = result?.tables;
        this.numSeats = result?.tables?.length;
      });
  },
  methods: {
    seatGroup: function(event) {
      const query = new URLSearchParams({
          guests: event.target.previousElementSibling.value,
        }).toString();

      fetch(API_URL+'seatGroup?'+query)
        .then(response => response.json())
        .then(result => {
          console.log(result);
          this.tables = result?.tables;
        });

      console.log("seatGroup", event);
    }
  }
};
</script>

<style>
  .dinnertable {
    border: 1px solid #ccc;
    border-radius: 25%;
    padding: 10px;
    margin: 10px;
    width: 200px;
  }
  .dinnertable .seat {    
    display: inline-block;
    background: rgb(94, 148, 96);
    width: 25px;
    height: 25px;
    border-radius: 25%;
  }
</style>
