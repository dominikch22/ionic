<template>
    <ion-page>
        <ion-header>
            <ion-toolbar>
                <ion-buttons slot="start">
                    <ion-back-button></ion-back-button>
                </ion-buttons>
                <ion-title>O nas</ion-title>
            </ion-toolbar>
        </ion-header>


        <ion-content>
            <div class="container">
                <ion-card>
                    <ion-card-header>
                        <ion-card-title>O tej aplikacji</ion-card-title>
                    </ion-card-header>
                    <ion-card-content>
                        <p>
                            Ta aplikacja została zaprojektowana, aby prezentować różne rasy psów i umożliwiać
                            użytkownikom dodawanie własnych psów do listy. Dzięki intuicyjnemu interfejsowi
                            użytkownika, każdy miłośnik psów może łatwo przeglądać dostępne rasy, a także
                            dodawać informacje o swoich pupilkach.
                        </p>
                        <p>
                            Wierzymy, że każdy pies zasługuje na kochający dom, a ta aplikacja ma na celu pomóc
                            miłośnikom psów połączyć się i dzielić swoją pasją do tych wspaniałych zwierząt.
                            Użytkownicy mogą oznaczać swoje ulubione psy, co ułatwia ich późniejsze odnalezienie
                            oraz dzielenie się nimi z innymi.
                        </p>
                        <p>
                            Nasza aplikacja oferuje również możliwość edytowania informacji o psach, co pozwala
                            na bieżąco aktualizować dane, takie jak zdjęcia, imiona czy rasy. Dodatkowo,
                            użytkownicy mogą korzystać z funkcji filtrowania, aby szybko znaleźć swoje ulubione
                            rasy lub psy.
                        </p>
                        <p>
                            Dziękujemy za korzystanie z naszej aplikacji! Mamy nadzieję, że pomoże Ci ona
                            w odkrywaniu i dzieleniu się miłością do psów. Zachęcamy do dodawania nowych
                            psów do bazy danych oraz do interakcji z innymi użytkownikami, aby wspólnie
                            tworzyć społeczność miłośników psów.
                        </p>
                        <p>
                            Jeśli masz jakiekolwiek pytania lub sugestie dotyczące aplikacji, nie wahaj się
                            z nami skontaktować. Twoje opinie są dla nas niezwykle ważne i pomagają nam
                            w dalszym rozwijaniu aplikacji.
                        </p>
                    </ion-card-content>
                </ion-card>
            </div>
        </ion-content>

    </ion-page>
</template>

<script>
import { IonItem, IonList, IonTextarea, IonPage, IonContent, IonHeader, IonToolbar, IonButtons, IonBackButton, IonTitle, IonCard, IonCardHeader, IonCardTitle, IonCardContent } from '@ionic/vue';

export default {
    components: {
        IonItem,
        IonList,
        IonTextarea,
        IonPage,
        IonContent,
        IonHeader,
        IonToolbar,
        IonButtons,
        IonBackButton,
        IonTitle,
        IonCard,
        IonCardHeader,
        IonCardTitle,
        IonCardContent
    }
};
</script>