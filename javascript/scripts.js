const { createApp } = Vue;

createApp({
    data(){
        return {
            new_task: {
                text: '',
                done: false
            },

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
        },
        // add_task(){
        //     this.tasks.push(this.new_task);
        // }
    }
}).mount('#app');