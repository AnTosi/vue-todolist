//questo è uno sgamotto che mi serve per far funzionare il vueJS component dell'inspector su firefox
Vue.config.devtools = true;

var edited = "";

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

        dump:[
        ],

        discarica: false,

        error: false,

        // editing: false,

        // editedTask: [],

    },

    methods: {
        removeTask(i){
            // console.log("cliccato su delete, i");
            let removed = this.tasks[i];
            this.tasks.splice(i,1);
            this.trashedTasks.push(removed)
            // console.log(trashedTasks);
        },

        addTask(){
            if (this.newTask.length > 5) {
                this.tasks.push(this.newTask);
                alert(`Task updated! the new task is: ${this.newTask}`)
                this.newTask = "";
                this.error = false;
            } else {
                this.error = true;
            }
        },

        completeTask(i){
            let complete = this.tasks[i];
            this.tasks.splice(i,1);
            this.completedTasks.push(complete);
        },

        redoTask(i){
            let redo = this.completedTasks[i];
            this.completedTasks.splice(i,1);
            this.tasks.push(redo);
        },

        clearTask(i){
            let clear = this.trashedTasks[i];
            this.trashedTasks.splice(i,1);
            this.dump.push(clear);
        },

        showDumpster(){
            if (this.discarica == false) {
                this.discarica = true;
            } else {
                this.discarica =false
            }
            // console.log(this.discarica);
        },

        recycle(i){
            let recycling = this.trashedTasks[i];
            this.trashedTasks.splice(i,1);
            this.tasks.push(recycling);
        },

        clearBin(){
            let bigRedButton = prompt(`This wil delete all tasks forever (not really, cause I initially misinterpreted the task and created a dump, but let's pretend it does)! Confirm [Y/N]`);
            // console.log(bigRedButton);
            if (bigRedButton.toLowerCase() == "y") {
                this.dump.push(...this.trashedTasks);
                this.trashedTasks = [];             
            }
        },

        timeRegression(i){
            let timeWarp = this.dump[i];
            this.dump.splice(i,1);
            this.trashedTasks.push(timeWarp);
        },



        // ho cercato di collegare l'edit con l'array, ma senza input e v-model non sono riuscito.
        // ho provato a mettere v-show su degli input con variabile booleana ma mi mostra tutti gli input.

        //niente, non riesco a farlo funzionare per bene, mi sto avvicinando ma è ancora tutto troppo orrendo e sono le 19.
        //mi sono accorto troppo taqrdi di aver frainteso il primo punto eora c'è la masterclass (che avevo dimenticato)


        // edit(i){
        //     this.editing = true;
        // },

        // editThis(editedTask, i){
        //     console.log(editedTask + i);
            // this.tasks[i].splice(i, 1);
            // this.tasks.splice(i, 0, editedTask)
        }
    }
)

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
//finite le modifiche alla funzione removeTask (aggiunto push nell'array trashed), ho inserito l'icona check e ora creo la sua funzione
//fatta funzione completeTask, ora passo alla box completed dove devo dargli il comando e la funzione per rifare il task (e quindi pusharlo di nuovo in tasks e rimuoverlo dai completati)
//stessa cosa, creo funzione clearTask per rimuovere il task dal cestino e aggiungerlo in un ulteriore array per ultimo punto bonus (Il nostro utente per ora sembra non avere altre richieste ... ma chissá se dopo gli viene in mente che vuole anche poter rimettere una task cancellata nella lista di tasks da fare, magari l'ha cancellata per sbaglio?)

//avevo male interpretato l'ultimo punto, ma oramai l'ho fatto in quel modo e lo lascio così. Aggiungo alert e prompt come da foto.

// AAAAAAH MI SONO ACCORTO ORA CHE NON AVEVO CAPITO IL PRIMO PUNTO DEL BONUS, ora lo faccio