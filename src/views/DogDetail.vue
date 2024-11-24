<template>
    <ion-page>
        <ion-header>
            <ion-toolbar>
                <ion-buttons slot="start">
                    <ion-back-button></ion-back-button>
                </ion-buttons>
                <ion-title>Edytuj psa</ion-title>
            </ion-toolbar>
        </ion-header>

        <ion-content>
            <div class="container">
                <div class="dog-image-container">
                    <img :src="editedDog.image" class="dog-image" alt="Obraz" />
                </div>
                <ion-list>
                    <ion-item>
                        <ion-label position="stacked">Imię</ion-label>
                        <ion-input v-model="editedDog.name"></ion-input>
                    </ion-item>
                    <ion-item>
                        <ion-label position="stacked">Rasa</ion-label>
                        <ion-input v-model="editedDog.breed"></ion-input>
                    </ion-item>
                    <ion-item>
                        <ion-label position="stacked">Zdjęcie</ion-label>
                        <ion-input v-model="editedDog.image"></ion-input>
                    </ion-item>
                    <ion-button expand="full" class="blue-button" @click="saveDog">Powrót</ion-button>
                </ion-list>
            </div>
        </ion-content>
    </ion-page>
</template>

<script>
import {
    IonPage,
    IonHeader,
    IonToolbar,
    IonButtons,
    IonBackButton,
    IonTitle,
    IonList,
    IonItem,
    IonLabel,
    IonInput,
    IonAvatar,
    IonButton,
    IonContent,
    useIonRouter

} from '@ionic/vue';
import { defineComponent, ref } from 'vue';
import { useDogStore } from '@/stores/dogStore';
import { useRoute } from 'vue-router';

export default defineComponent({
    components: {
        IonPage,
        IonHeader,
        IonToolbar,
        IonButtons,
        IonBackButton,
        IonTitle,
        IonList,
        IonItem,
        IonLabel,
        IonInput,
        IonAvatar,
        IonButton,
        IonContent,
    },
    setup() {
        const dogStore = useDogStore();
        const router = useIonRouter();
        const route = useRoute();
        const dogId = parseInt(route.params.dog, 10);
        const editedDog = ref(dogStore.dogs[dogId]);

        const saveDog = () => {
            router.back();
        };

        return { editedDog, saveDog };

    }
});
</script>


<style scoped>
.dog-image-container {
    display: flex;
    justify-content: center;
    margin-bottom: 20px;
    margin-top: 20px;
}

.dog-image {
    width: 200px;
    height: 200px;
    object-fit: cover;
}
</style>