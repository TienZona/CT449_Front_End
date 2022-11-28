<template>
    <Form id="form" class="form" @submit="login">
        <div class="form__header">
            <h3>Đăng nhập</h3>
        </div>
        <div class="form__container">
            <p>Hệ thống quản lý - Trường THPT</p>
            <div class="spacer"></div>
            <div class="form-group">
                <label for="fullname" class="form-label">Email</label>
                <Field name="email" type="text" class="form-control" v-model="email" />
                <ErrorMessage name="email" class="error-feedback" />
            </div>
            <div class="form-group">
                <label for="fullname" class="form-label">Mật khẩu </label>
                <Field name="password" type="password" class="form-control" v-model="password" />
                <ErrorMessage name="password" class="error-feedback" />
            </div>
            <button class="form-submit">Đăng nhập</button>
        </div>
    </Form>
</template>
<script>
import * as yup from "yup";
import { Form, Field, ErrorMessage } from "vee-validate";
import AuthService from "@/services/auth.service";
import StudentService from "@/services/student.service";


export default {
    components: {
        Form,
        Field,
        ErrorMessage,
    },
    data() {
        yup.object().shape({
            email: yup
                .string()
                .email("E-mail không đúng.")
                .max(50, "E-mail tối đa 50 ký tự."),
            password: yup.string().min(8, "Địa chỉ tối đa 100 ký tự."),
        });
        return {

        };
    },
    methods: {
        async login() {
            const user = await AuthService.login({ "email": this.email, "password": this.password });
            console.log(user);
            // try {
            //     await AuthService.login(data);
            //     this.message = "Thêm mới liên hệ thành công.";
            // } catch (error) {
            //     console.log(error);
            // }
        },
    },
};
</script>