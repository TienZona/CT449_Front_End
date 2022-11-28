<template>
    <div id="container__update" class="container__items container__update">
        <div class="watch__navbar">
            <div class="watch__navbar-heading">
                <h1>Cập nhật thông tin học sinh</h1>
            </div>
            <div class="watch__navbar-list">
                <div class="watch__navbar-item">
                    <label for="update__navbar-item-level">Khối </label>
                    <select name="update__navbar-item-level" id="update__navbar-item-level">
                        <option value="12">12</option>
                        <option value="11">11</option>
                        <option value="10">10</option>
                    </select>
                </div>
                <div class="watch__navbar-item">
                    <label for="update__navbar-item-class">Lớp </label>
                    <select name="update__navbar-item-class" id="update__navbar-item-class">
                        <option value="12A1">12A1</option>
                    </select>
                </div>
                <div class="watch__navbar-item assigning__navbar-level">
                    <label for="level-class" class="watch__navbar-item-lable label-level">Năm học: </label>
                    <select name="level-class" id="level-class" class="select-class">
                        <option value="1">2020 - 2021</option>
                        <option value="2">2021 - 2022</option>
                        <option value="3">2022 - 2023</option>
                    </select>
                </div>
                <button class="watch__navbar-item-btn update__navbar-item-btn navbar-item-btn">Liệt kê</button>
            </div>
        </div>
        <div class="update__container">
            <button class="btn__save--add" data-toggle="modal" data-target="#exampleModal">Thêm học sinh</button>
            <table class="update__container-classLists">
            </table>
        </div>
        <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog ">
                <div class="modal-content">
                    <div class="modal-header d-flex justify-content-center bg-primary">
                        <h5 class="modal-title text-light" id="exampleModalLabel">THÊM HỌC SINH</h5>
                    </div>
                    <div class="modal-body">
                        <form>
                            <div class="form-group">
                                <label for="recipient-name" class="col-form-label">Họ và tên:</label>
                                <input type="text" name="fullname" class="form-control" id="recipient-name">
                            </div>
                            <div class="row">
                                <div class="form-group col-6">
                                    <label for="message-text" class="col-form-label">Ngày sinh:</label>
                                    <input type="date" name="birthdate" class="form-control" id="recipient-name">
                                </div>
                                <div class="form-group col-6">
                                    <label for="inputState">Giới tính</label>
                                    <select id="inputState" name="sex" class="form-control">
                                        <option selected value="Name">Nam</option>
                                        <option value="Nu">Nữ</option>
                                        <option value="Khac">Khác</option>
                                    </select>
                                </div>
                            </div>
                            <div class="form-group">
                                <label for="message-text" class="col-form-label">Số điện thoại:</label>
                                <input type="text" name="tel" class="form-control" id="recipient-name">
                            </div>
                            <div class="form-group">
                                <label for="message-text" class="col-form-label">Địa chỉ:</label>
                                <input type="text" name="address" class="form-control" id="recipient-name">
                            </div>
                        </form>
                    </div>
                    <div class="modal-footer d-flex justify-content-around">
                        <button type="button" class="btn btn-danger" data-dismiss="modal">Đóng</button>
                        <button type="button" class="btn btn-primary">Thêm học sinh</button>
                    </div>
                </div>
            </div>
        </div>

    </div>
</template>
<script>
import * as yup from "yup";
import { Form, Field, ErrorMessage } from "vee-validate";
export default {
    components: {
        Form,
        Field,
        ErrorMessage,
    },
    emits: ["submit:contact", "delete:contact"],
    props: {
        contact: { type: Object, required: true }
    },
    data() {
        const contactFormSchema = yup.object().shape({
            name: yup
                .string()
                .required("Tên phải có giá trị.")
                .min(2, "Tên phải ít nhất 2 ký tự.")
                .max(50, "Tên có nhiều nhất 50 ký tự."),
            email: yup
                .string()
                .email("E-mail không đúng.")
                .max(50, "E-mail tối đa 50 ký tự."),
            address: yup.string().max(100, "Địa chỉ tối đa 100 ký tự."),
            phone: yup
                .string()
                .matches(
                    /((09|03|07|08|05)+([0-9]{8})\b)/g,
                    "Số điện thoại không hợp lệ."
                ),
        });
        return {
            // Chúng ta sẽ không muốn hiệu chỉnh props, nên tạo biến cục bộ
            // contactLocal để liên kết với các input trên form
            contactLocal: this.contact,
            contactFormSchema,
        };
    },
    methods: {
        submitContact() {
            this.$emit("submit:contact", this.contactLocal);
        },
        deleteContact() {
            this.$emit("delete:contact", this.contactLocal.id);
        },
    },
};
</script>