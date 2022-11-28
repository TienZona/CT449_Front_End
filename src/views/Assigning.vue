<template>
    <Assigning />
</template>

<script>
    import Assigning from "@/components/Assigning.vue";
    export default {
        components: {
            Assigning,
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