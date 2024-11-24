import { defineStore } from 'pinia';

export const useDogStore = defineStore('dogs', {
  state: () => ({
    dogs: [
      { 
        name: 'Burek', 
        breed: 'Owczarek', 
        image: "https://picsum.photos/80/80?random=1" ,
        isFavorite: false
      }, 
      { 
        name: 'Azor', 
        breed: 'Labrador', 
        image: "https://picsum.photos/80/80?random=2",
        isFavorite: false
      },
      { 
        name: 'Reksio', 
        breed: 'Beagle', 
        image: "https://picsum.photos/80/80?random=3",
        isFavorite: false
      },
      { 
        name: 'Fafik', 
        breed: 'Bulldog', 
        image: "https://picsum.photos/80/80?random=4",
        isFavorite: false
      },
      { 
        name: 'Luna', 
        breed: 'Cocker Spaniel', 
        image: "https://picsum.photos/80/80?random=5",
        isFavorite: false
      },
      { 
        name: 'Max', 
        breed: 'Golden Retriever', 
        image: "https://picsum.photos/80/80?random=6",
        isFavorite: false
      },
      { 
        name: 'Bella', 
        breed: 'Yorkshire Terrier', 
        image: "https://picsum.photos/80/80?random=7",
        isFavorite: false
      }
    ]
  }),
  actions: {
    addDog(dog) {
      this.dogs.push(dog);
    },
    toggleFavorite(index) {
      this.dogs[index].isFavorite = !this.dogs[index].isFavorite;
    }
   
  },
  getters: {
    allDogs: (state) => state.dogs
  }
});