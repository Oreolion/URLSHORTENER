<template>
  <section>
    <div class="inner__dashboard">
      <h1>Shorten Your URL</h1>
      <form action="">
        <label for="">
          Input Your Link: <br />
          <input type="text" placeholder="e.g. https://developer.mozilla.org/en-US/docs/Web"/>
          <button>Shorten Link</button>
        </label>

        <label for=""
          >Shortened Link: <br />
          <input type="text" />
          <button>Copy Link</button>
        </label>
      </form>
    </div>
  </section>
</template>

<script setup lang="ts"></script>

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
}

form {
  display: flex;
  flex-direction: column;
  gap: 2rem;
  width: 100%;
  padding: 0 2rem;
}

label {
}

input {
  height: 3rem;
  width: 65%;
  background-color: transparent;
  margin-right: 1rem;
  text-indent: 0.5rem;
}

button {
  width: 30%;
}


@media (max-width: 768px) {
    .inner__dashboard {
        margin-left: 1rem;
    }
}
</style>
