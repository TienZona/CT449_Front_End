<template>
    <div class="container grid wide">
        <div class="container__home row">
            <div class="container__infor">
                <div class="container__infor-table">
                    <div class="container__infor-table-header">
                        <h3>Thông tin giáo viên</h3>
                    </div>
                    <div class="container__infor-table-content">
                        <span class="content__name"  v-if="fullname != ''">Họ và tên: {{ fullname }}</span>
                        <span class="content__birthdate">Ngày sinh: {{ birthdate }} </span>
                        <span class="content__gender">Giới tính: {{ sex }}</span>
                        <span class="content__position">Chức vụ: {{ position }}</span>
                    </div>
                </div>
            </div>
            <div class="container__list row">

                <router-link :to="{
                    name: 'home',
                }" id="list-items--decen" class="list-items col col-3">
                    <img class="list-items__img"
                        src="https://png.pngtree.com/png-vector/20190826/ourlarge/pngtree-group-png-image_1696838.jpg"
                        alt="">
                    <span class="list-items__name">Phân quyền tài khoản</span>
                </router-link>


                <router-link :to="{
                    name: 'schedule',
                }" id="list-items--schedule" class="list-items col col-3">
                    <img src="https://file1.hutech.edu.vn/file/news/tkb_thpt_ngoc_lac-1561459088.png" alt=""
                        class="list-items__img">
                    <span class="list-items__name">Lập thời khóa biểu</span>
                </router-link>


                <router-link :to="{
                    name: 'assigning',
                }" id="list-items--assigning" class="list-items col col-3">
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQY6T5htDyBSTHc83FVX_Cz0Kix3NdAq1DYdQ&usqp=CAU"
                        alt="" class="list-items__img">
                    <span class="list-items__name">Phân công giảng dạy</span>
                </router-link>



                <router-link :to="{
                    name: 'watch',
                }" id="list-items--watch" class="list-items col col-3">
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRxcRniAQjyFSm_2nFTrnD-8ogMdjjIsduJHQ&usqp=CAU"
                        alt="" class="list-items__img">
                    <span class="list-items__name">Xem danh sách lớp</span>
                </router-link>



                <router-link :to="{
                    name: 'edit',
                }" id="list-items--update" class="list-items col col-3">
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQ6AnHuwZv2vdOYNvei4H1NMKVnRAfAkKzrA&usqp=CAU"
                        alt="" class="list-items__img">
                    <span class="list-items__name">Cập nhật học sinh</span>
                </router-link>



                <router-link :to="{
                    name: 'voting',
                }" id="list-items--votting" class="list-items col col-3">
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTd4jXaoViq4KcParFZ4I-er_OhpntpGLNDgA&usqp=CAU"
                        alt="" class="list-items__img">
                    <span class="list-items__name">Đánh giá hành kiểm</span>
                </router-link>



                <router-link :to="{
                    name: 'score',
                }" id="list-items--score" class="list-items col col-3">
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcScHFjKkra-yY3Cr6FpJENDILnEo237MbK0yg&usqp=CAU"
                        alt="" class="list-items__img">
                    <span class="list-items__name">Cập nhật điểm số</span>
                </router-link>



                <router-link :to="{
                    name: 'teaching',
                }" id="list-items--teaching" class="list-items col col-3">
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQlhmFgkcsCO-6bKDEU7CX6eyq8mNfN_fcRCQ&usqp=CAU"
                        alt="" class="list-items__img">
                    <span class="list-items__name">Xem lịch giảng dạy</span>
                </router-link>


            </div>
        </div>
    </div>
</template>
<script>

export default {
    data() {
        return {
            fullname: '',
            birthdate: '',
            sex: '',
            position: ''
        }
    },
    methods: {
        getUser() {
            if (localStorage.getItem('token')) {
                this.fullname = localStorage.getItem('fullname');
                this.birthdate = localStorage.getItem('birthdate');
                this.sex = localStorage.getItem('sex');
                this.position = localStorage.getItem('role');
            }
        },

    },
    mounted() {
        this.getUser();
    }

}

</script>