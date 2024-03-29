const { createApp } = Vue;

createApp({
    data(){
        return {
            new_task_text: '',
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
        add_task(){
            if (this.new_task_text.length == 0) {
                return;
            }

            let new_task = {
                text: this.new_task_text,
                done: false,
            };

            this.tasks.push(new_task);
            this.new_task_text = '';
        },
        add_task_with_enter(event){

            if (event.keyCode === 13) {
                this.add_task();
            }
        },
        is_done(i){
            this.tasks[i].done = !this.tasks[i].done;
        }
    }
}).mount('#app');