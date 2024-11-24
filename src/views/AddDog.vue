<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-buttons slot="start">
          <ion-back-button></ion-back-button>
        </ion-buttons>
        <ion-title>Dodaj Psa</ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-content>
      <div class="container">

        <ion-item>
          <ion-label position="stacked">Imię</ion-label>
          <ion-input v-model="newDog.name"></ion-input>
        </ion-item>
        <ion-item>
          <ion-label position="stacked">Rasa</ion-label>
          <ion-input v-model="newDog.breed"></ion-input>
        </ion-item>
        <ion-item>
          <ion-label position="stacked">Zdjęcie</ion-label>
          <ion-input v-model="newDog.image"></ion-input>
        </ion-item>
        <ion-button expand="full" class="blue-button" @click="addDog">Dodaj psa</ion-button>
      </div>
    </ion-content>
  </ion-page>
</template>

<script>
import {
  IonPage,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonList,
  IonItem,
  IonLabel,
  IonInput,
  IonButton,
  IonButtons,
  IonBackButton,
  useIonRouter
} from '@ionic/vue';
import { defineComponent, reactive, defineEmits } from 'vue';
import { useDogStore } from '@/stores/dogStore';

export default defineComponent({
  components: {
    IonPage,
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    IonList,
    IonItem,
    IonLabel,
    IonInput,
    IonButton,
    IonButtons,
    IonBackButton
  },
  emits: ['addDog'],
  setup() {
    const router = useIonRouter();
    const dogStore = useDogStore();
    const newDog = reactive({
      name: '',
      breed: '',
      image: '',
    });



    const addDog = () => {
      dogStore.addDog(newDog);
      router.back();
    };

    return { newDog, addDog };
  }
});
</script>