const { createApp } = Vue;

createApp({
    data(){
        return {
            tasks: [
                {
                    text: 'Doing homework',
                    done: false
                },
                {
                    text: 'Go shopping',
                    done: true
                },
                {
                    text: 'Do the laundry',
                    done: false
                }
            ]
        };
    },
    methods: {
        delete_task(i){
            this.tasks.splice(i, 1);
        }
    }
}).mount('#app');