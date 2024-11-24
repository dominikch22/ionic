<template>
    <ion-page>
        <ion-header>
            <ion-toolbar>
                <ion-buttons slot="start">
                    <ion-back-button></ion-back-button>
                </ion-buttons>
                <ion-title>List psów</ion-title>
                <ion-buttons slot="end">
                    <ion-button @click="goToAbout">O nas</ion-button>
                </ion-buttons>
            </ion-toolbar>
        </ion-header>
        <ion-content>
            <div class="container">
                <ion-button expand="full" class="blue-button" @click="goToAddDog">Dodaj psa</ion-button>
                <ion-button expand="full"  class="blue-button" @click="toggleFilter">
                    {{ filter.type === 'favorites' ? 'Pokaż wszystkie' : 'Pokaż ulubione' }}
                </ion-button>


                <ion-list>
                    <ion-item v-for="(dog, index) in dogs" :key="index">
                        <ion-avatar slot="start">
                            <img :src="dog.image" alt="avatar" />
                        </ion-avatar>
                        <ion-label>{{ dog.name }} ({{ dog.breed }})</ion-label>
                        <ion-button slot="end" :color="dog.isFavorite ? 'danger' : 'medium'"
                            @click="toggleFavorite(index)">
                            <ion-icon :icon="dog.isFavorite ? heart : heartOutline"></ion-icon>
                        </ion-button>
                        <ion-button slot="end" color="primary" @click.stop="goToDogDetail(index)">
                            Edytuj
                        </ion-button>
                    </ion-item>
                </ion-list>
                <ion-infinite-scroll @ionInfinite="ionInfinite">
                    <ion-infinite-scroll-content></ion-infinite-scroll-content>
                </ion-infinite-scroll>
            </div>
        </ion-content>
    </ion-page>
</template>


<script lang="ts">
import { heart, heartOutline } from 'ionicons/icons';

import {
    IonContent,
    IonInfiniteScroll,
    IonInfiniteScrollContent,
    IonList,
    IonItem,
    IonAvatar,
    IonImg,
    IonLabel,
    InfiniteScrollCustomEvent,
    useIonRouter,
    IonPage,
    IonHeader,
} from '@ionic/vue';
import { defineComponent, reactive, computed  } from 'vue';
import { useDogStore } from '@/stores/dogStore';

export default defineComponent({
    components: {
        IonContent,
        IonInfiniteScroll,
        IonInfiniteScrollContent,
        IonList,
        IonItem,
        IonAvatar,
        IonImg,
        IonLabel,
        IonPage,
        IonHeader,
    },
    setup() {
        const router = useIonRouter();
        const dogStore = useDogStore();
        const filter = reactive({ type: 'all' });
        const dogs = computed(() => {
            if (filter.type === 'favorites') {
                return dogStore.allDogs.filter(dog => dog.isFavorite);
            }
            return dogStore.allDogs;
        });


        const ionInfinite = (ev: InfiniteScrollCustomEvent) => {
            setTimeout(() => ev.target.complete(), 500);
        };

        const goToAddDog = () => {
            router.navigate('/add-dog', 'forward', 'push');
        };

        const goToDogDetail = (dogId: number) => {
            router.navigate(`/dog-detail/${dogId}`, 'forward', 'push');
        };

        const goToAbout = () => {
            router.navigate('/about', 'forward', 'push');
        };

        const toggleFavorite = (index: number) => {
            dogStore.toggleFavorite(index);
        };

        const toggleFilter = () => {
            filter.type = filter.type === 'favorites' ? 'all' : 'favorites';
        };


        return { ionInfinite, dogs, goToAddDog, goToDogDetail, goToAbout, toggleFavorite, heart, heartOutline, toggleFilter, filter};
    },
});
</script>