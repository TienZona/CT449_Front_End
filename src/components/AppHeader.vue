<template>
    <div class="header">
        <div class="header__navbar grid wide container-xl">
            <div class="header__navbar-item">
                <i class="navbar__icon fas fa-user-graduate"></i>
                <h2 class="navbar__heading">HỆ THỐNG QUẢN LÝ</h2>
            </div>
            <div class="header__navbar-item">
                <h1 class="navbar__name">TRƯỜNG TRUNG HỌC PHỔ THÔNG</h1>
            </div>
            <div class="header__navbar-item">
                <div class="navbar__menu">
                    <button class="navbar__menu-btn navbar__menu-btn--out" v-if="fullname != ''" v-on:click="logout">
                        <i class="navbar__menu-icon  fas fa-sign-out-alt"></i>
                        Thoát
                    </button>
                    <router-link :to="{
                        name: 'home',
                    }">
                        <div class="navbar__menu-btn navbar__menu-btn--home">
                            <i class="navbar__menu-icon fas fa-home"></i>
                            Trang chủ
                        </div>
                    </router-link>

                    <span class="navbar__menu-user" v-if="fullname != ''">Chung Phát Tiến</span>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import { formToJSON } from 'axios';


export default {
    data() {
        return {
            fullname: '',
        }
    },
    methods: {
        logout() {
            localStorage.removeItem('fullname');
            localStorage.removeItem('birthdate');
            localStorage.removeItem('sex');
            localStorage.removeItem('role');
            localStorage.removeItem('token');
            window.location.href = '/login';
        },
        getUser() {
            if (localStorage.getItem('token')) {
                this.fullname = localStorage.getItem('fullname');
            }
        },

    },
    mounted() {
        this.getUser();
    }

}

</script>