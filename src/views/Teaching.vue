<template>
    <Teaching />
</template>

<script>
    import Teaching from "@/components/Teaching.vue";
    export default {
        components: {
            Teaching,
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