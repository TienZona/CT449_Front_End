<template>
    <Voting />
</template>

<script>
    import Voting from "@/components/Voting.vue";
    export default {
        components: {
            Voting,
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