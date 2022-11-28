<template>
    <Score />
</template>

<script>
    import Score from "@/components/Score.vue";
    export default {
        components: {
            Score,
        },
        // props: {
        //     // id: { type: String, required: true },
        // },
        data() {
            
        },
        methods: {
            // async addContact(data) {
            //     console.log(data)
            //     try {
            //         await ContactService.create(data);
            //         this.message = "Thêm mới liên hệ thành công.";
            //     } catch (error) {
            //         console.log(error);
            //     }
            // }
        }
    };
</script>