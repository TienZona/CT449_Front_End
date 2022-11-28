<template>
    <div id="form" class="form" method="POST">
        <div class="form__header">
            <h3>Đăng nhập</h3>
        </div>
        <div class="form__container">
            <p>Hệ thống quản lý - Trường THPT</p>
            <div class="spacer"></div>
            <div class="form-group">
                <label for="email" class="form-label">Email: </label>
                <input id="email" name="email" type="text" placeholder="Email" class="form-control" v-model="user.email"
                    required>
                <span class="form-message text-danger" v-if="error.email != ''"> {{ error.email }}</span>
                <span class="form-message text-danger" v-else></span>

            </div>
            <div class="form-group">
                <label for="password" class="form-label">Mật khẩu </label>
                <input id="password" name="password" type="password" placeholder="Mật khẩu đăng nhập"
                    v-model="user.password" required class="form-control">
                <span class="form-message text-danger" v-if="error.password != ''"> {{ error.password }}</span>
                <span class="form-message text-danger" v-else></span>
            </div>
            <button class="form-submit" type="submit" v-on:click="login">Đăng nhập</button>
        </div>
    </div>
</template>

<script>
import authService from '../services/auth.service';
import axios from 'axios';
export default {
    components: {
    },
    data() {
        return {
            user: {
                email: '',
                password: ''
            },
            error: {
                email: '',
                password: ''
            }
        }
    },
    methods: {
        async login() {
            if (this.user.email && this.user.password) {
                axios.post('http://localhost:3000/auth/login', this.user)
                    .then(function (response) {
                        const account = response.data;
                        if(account){
                            localStorage.setItem('token', account.token);
                            localStorage.setItem('fullname', account.fullname);
                            localStorage.setItem('birthdate', account.birthdate);
                            localStorage.setItem('sex', account.sex);
                            localStorage.setItem('role', account.role);

                            window.location.href = "/home";
                        }
                    })
                    .catch(function (error) {
                        alert('Đăng nhập không thành công!')
                    })
            }
            this.error = {
                email: '',
                password: ''
            }

            if (!this.user.email) {
                this.error.email = 'Vui lòng nhập email đăng nhập';
            }
            if (!this.user.password) {
                this.error.password = 'Bạn chưa nhập mật khẩu';
            }
        }
    }
};
</script>