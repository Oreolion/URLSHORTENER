<template>
    <section>
    <div class="inner__dashboard">
      <h1>Customize Your URL</h1>
      <form action="">
        <label for="">
          Input Your Link: <br />
          <input
            v-model="inputUrl"
            type="text"
            placeholder="e.g. https://developer.mozilla.org/en-US/docs/Web"
          />
          <button @click="handleLinkShortener">Shorten Link</button>
        </label>

        <label for=""
          >Shortened Link: <br />
          <input type="text" v-model="outputUrl" />
          <button>Copy Link</button>
        </label>
      </form>
    </div>
  </section>
</template>

<script setup lang="ts">

</script>

<style scoped>
section {
  display: flex;
  align-items: center;
  justify-content: center;
}
.inner__dashboard {
  margin-top: 10rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: rgba(4, 4, 168, 0.2);
  height: 25rem;
  width: 60%;
  margin-left: 12rem;
}

h1 {
  font-size: 2rem;
  margin-bottom: 4rem;
  color: #fff;
}

form {
  display: flex;
  flex-direction: column;
  gap: 2rem;
  width: 100%;
  padding: 0 2rem;
}

label {
    color: yellow;
}

label + label {
    color: green;
}

input {
  height: 3rem;
  width: 65%;
  background-color: transparent;
  margin-right: 1rem;
  text-indent: 0.5rem;
}

label + label > input {
    color: green;
}

button {
  width: 30%;
}

@media (max-width: 768px) {
  .inner__dashboard {
    margin-left: 1rem;
    width: 85%;
  }
}
@media (max-width: 480px) {
  .inner__dashboard {
    margin-left: 1rem;
    width: 85%;
  }


  input {
    width: 60%;
  }

  
button {
  width: 30%;
}

form {
    padding: 0 1rem;
}
}


@media (max-width: 320px ) {
    h1 {
        font-size: 1.7rem;
    }
}
</style>