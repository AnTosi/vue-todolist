Vue.config.devtools = true;

const app = new Vue ({
    el: "#app",
    data: {
        tasks: [
            "Fare i compiti",
            "Fare la spesa",
            "Fare il bucato"
        ],

        newTask:"",
        error: false,
    },

    methods: {
        removeTask(i){
            console.log("cliccato su delete, i");
            this.tasks.splice(i,1)
        },

        addTask (){
            if (this.newTask.length > 5) {
                this.tasks.push(this.newTask);
                this.newTask = "";
                this.error = false;
            } else {
                this.error = true;
            }
        },
    }
})

// creare to do list con vueJS

// stampare array in pagina 

// ogni item ha una x associata: cliccando su di essa l'item viene rimosso dalla lista

//predisporre un input per aggiungere un nuovo item alla lista digitando tasto invio oppure cliccando su un pulsante, uil testo digitato viene aggiunto alla lista


//array
// ciclo v-for
// event listener con (v-on / @)
// splice (index)
// input
// v-model
// push
// @click
