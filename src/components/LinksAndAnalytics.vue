<template>
  <section>
    <div class="inner__dashboard">
      <h1>this is the links and analytics view</h1>
      <ul v-for="url in myUrls" :key="url" class="links__box">
        <li>Long Url: {{ url.longUrl }}</li>
        <li>Short Url:{{ url.shortUrl }}</li>
      </ul>
    </div>
  </section>
</template>

<script setup lang="ts">
import { reactive, onMounted } from "vue";
import {
  getDocs,
  setDoc,
  doc,
  collection,
  onSnapshot,
  orderBy,
  query,
} from "firebase/firestore";
import { db } from "../utils/firebase";

interface myUrls {
  shortUrl: string;
  longUrl: string;
}

const myUrls: myUrls[] = reactive([]);

const handleUpdateUrls = async () => {
  const urlRef = collection(db, "myUrls");
  const urlQuery = query(urlRef, orderBy("createdAt", "asc"));

  // Get initial data
  const querySnapshot = await getDocs(urlRef);

  if (querySnapshot) {
    querySnapshot.docs.map((doc: any) => {
      console.log(doc.id, " => ", doc.data());
      myUrls.push(doc.data() as myUrls);
    });
  } else {
    console.log("No such document!");
  }

  console.log(myUrls);

  onSnapshot(urlQuery, (snapshot) => {
    snapshot.docs.map((doc) => {
      myUrls.push(doc.data() as myUrls);
    });
    console.log(myUrls);
  }),
    (error: any) => {
      console.log(error);
    };
};

onMounted(async () => {
  return await handleUpdateUrls();
});
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
  background: rgba(4, 4, 168, 0.2);
  box-shadow: 0px 7px 12px rgba(68, 68, 241, 0.3);
  height: 29rem;
  width: 70%;
  margin-left: 12rem;
}

h1 {
  font-size: 2rem;
  margin-bottom: 2rem;
  color: #fff;
}

.inner__dashboard .links__box {
    display: flex;
    flex-direction: column;
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
}

@media (max-width: 320px) {
  h1 {
    font-size: 1.5rem;
    text-align: center;
  }
}
</style>
