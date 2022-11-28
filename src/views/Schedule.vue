<template>
    <Schedule />
</template>

<script>
    import Schedule from "@/components/Schedule.vue";
    export default {
        components: {
            Schedule,
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