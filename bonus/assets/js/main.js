//questo è uno sgamotto che mi serve per far funzionare il vueJS component dell'inspector su firefox
Vue.config.devtools = true;

const app = new Vue ({
    el: "#app",
    data: {
        tasks: [
            "Fare i compiti",
            "Fare la spesa",
            "Fare il bucato"
        ],

        completedTasks: [
            "Do else"
        ],
        
        trashedTasks: [
            "Do something"
        ],

        newTask:"",

        error: false,
    },

    methods: {
        removeTask(i){
            console.log("cliccato su delete, i");
            let removed = this.tasks[i];
            this.tasks.splice(i,1);
            this.trashedTasks.push(removed)
            console.log(trashedTasks);
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



// per bonus

//comincio con l'inserire due array vuoti in cui poter pushare i task completati o cancellati
//creati array con elemento default per test
//ora devo ripetere la procedura che ho utilizzato nel task per creare i div, ovvero il ciclo v-for
//create le box, devo aggiungere il tick per il completamento e rimaneggiare i methods per far sì che i vari click pushino il task nell'array che voglio