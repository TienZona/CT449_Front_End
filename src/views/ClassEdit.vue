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
                    <select name="update__navbar-item-class" id="update__navbar-item-class" v-model="classSelected">
                        <option v-for="className in classList" :value="className.name">
                            {{ className.name }}
                        </option>
                    </select>
                </div>
                <div class="watch__navbar-item assigning__navbar-level">
                    <label for="level-class" class="watch__navbar-item-lable label-level">Năm học: </label>
                    <select name="level-class" id="level-class" class="select-class">
                        <option value="2">2021 - 2022</option>
                    </select>
                </div>
                <button class="watch__navbar-item-btn update__navbar-item-btn navbar-item-btn"
                    @click="refreshList()">Liệt kê</button>
            </div>
        </div>
        <div class="update__container">
            <button class="btn__save--add" data-toggle="modal" data-target="#modal" v-on:click="handleAdd">Thêm
                học sinh</button>
            <table class="watch__container-classLists" v-if="listStudent.length > 0">
                <tr>
                    <th>STT</th>
                    <th>Họ và tên</th>
                    <th>Ngày sinh</th>
                    <th>Giới tính</th>
                    <th>Số điện thoại</th>
                    <th>Địa chỉ</th>
                    <th>Chỉnh sửa</th>
                </tr>
                <tr class="row__student" v-for="(student, index) in listStudent">
                    <th class="classLists__number">{{ index + 1 }}</th>
                    <td class="classLists__name">{{ student.name }}</td>
                    <td class="classLists__birthDate">{{ student.birthdate }}</td>
                    <td class="classLists__gender">{{ student.sex }}</td>
                    <td class="classLists__telephone">{{ student.phone }}</td>
                    <td class="classLists__address">{{ student.address }}</td>
                    <td class="update__btn">
                        <button class="update__btn--update" data-toggle="modal" data-target="#modal"
                            v-on:click="handleUpdate(index)">Sửa</button>
                        <button class="update__btn--delete" v-on:click="deleteStudent(index)">Xóa</button>
                    </td>
                </tr>

            </table>
            <p v-else>Không có học sinh nào.</p>
        </div>
        <div class="modal fade" id="modal" tabindex="-1" aria-labelledby="modalLabel" aria-hidden="true">
            <!-- <form @submit="false"> -->
                <div class="modal-dialog ">
                    <div class="modal-content">
                        <div class="modal-header d-flex justify-content-center bg-primary">
                            <h5 class="modal-title text-light" id="modalLabel">CẬP NHẬT HỌC SINH</h5>
                        </div>
                        <div class="modal-body">
                            <div class="form-group">
                                <label for="recipient-name" class="col-form-label">Họ và tên:</label>
                                <input type="text" name="fullname" class="form-control" id="recipient-name" required
                                    v-model="students.name">
                                <p class="text-danger" v-if="error.name != ''">{{ error.name }}</p>
                            </div>
                            <div class="row">
                                <div class="form-group col-6">
                                    <label for="message-text" class="col-form-label">Ngày sinh:</label>
                                    <input type="date" name="birthdate" class="form-control" id="recipient-name"
                                        required v-model="students.birthdate">
                                    <p class="text-danger" v-if="error.birthdate != ''">{{ error.birthdate }}</p>

                                </div>
                                <div class="form-group col-6">
                                    <label for="inputState">Giới tính</label>
                                    <select id="inputState" name="sex" class="form-control" v-model="students.sex"
                                        required>
                                        <option value="">Chọn giới tính</option>
                                        <option value="Nam">Nam</option>
                                        <option value="Nu">Nữ</option>
                                        <option value="Khac">Khác</option>
                                    </select>
                                    <p class="text-danger" v-if="error.sex != ''">{{ error.sex }}</p>

                                </div>
                            </div>
                            <div class="form-group">
                                <label for="message-text" class="col-form-label">Số điện thoại:</label>
                                <input type="text" name="tel" class="form-control" id="recipient-name" required
                                    v-model="students.phone">
                                <p class="text-danger" v-if="error.phone != ''">{{ error.phone }}</p>

                            </div>
                            <div class="form-group">
                                <label for="message-text" class="col-form-label">Địa chỉ:</label>
                                <input type="text" name="address" class="form-control" id="recipient-name" required
                                    v-model="students.address">
                                <p class="text-danger" v-if="error.address != ''">{{ error.address }}</p>

                            </div>
                        </div>
                        <div class="modal-footer d-flex justify-content-around">
                            <button type="button" class="btn btn-danger" data-dismiss="modal">Đóng</button>
                            <button type="submit" class="btn btn-primary" v-on:click="checkSubmit">Lưu</button>
                        </div>
                    </div>
                </div>
            <!-- </form> -->
        </div>
        <p v-if="message != ''"> {{ message }}</p>
    </div>
</template>

<script>
import EditClass from "@/components/EditClass.vue";
import StudentService from "@/services/student.service";
import ClassService from "@/services/class.service";

import axios from "axios";


export default {
    components: {
        EditClass,
    },
    props: {
        id: { type: String, required: true },
    },
    data() {
        return {
            listStudent: [],
            students: {
                name: "",
                address: "",
                phone: "",
                sex: "",
                birthdate: "",
                class: this.classSelected
            },
            classList: [],
            classSelected: '12A1',
            message: "",
            isForm: 'create',
            indexStudent: 0,
            error: {
                name: '',
                address: '',
                birthdate: '',
                phone: '',
                sex: ''
            }
        };
    },
    compoted: {

    },
    methods: {
        async refreshList() {
            this.retrieveStudents();
        },
        checkSubmit(e) {
            if (this.students.name && this.students.address && this.students.phone && this.students.birthdate && this.students.sex) {
                if (this.isForm === 'create')
                    this.createStudent();
                else {
                    this.updateStudent();
                }
                $('#modal').modal('hide')
                this.refreshList();
            }
            console.log(this.students)

            this.errors = {
                name: '',
                address: '',
                birthdate: '',
                phone: '',
                sex: ''
            }

            if (!this.students.name) {
                this.error.name = 'Vui lòng nhập họ và tên học sinh';
            }
            if (!this.students.address) {
                this.error.address = 'Vui lòng nhập địa chỉ';
            }
            if (!this.students.phone) {
                this.error.phone = 'Vui lòng nhập số điện thoại';
            }
            if (this.students.birthdate != '') {
                this.errors.birthdate = 'Vui lòng chọn ngày sinh';
            }
            if (this.students.sex != '') {
                this.errors.sex = 'Vui lòng chọn giới tính';
            }
            
        },

        async deleteStudent(index) {
            if (confirm('Bạn có chắc muốn xóa học sinh này không')) {
                try {
                    await StudentService.delete(this.listStudent[index]._id);
                    this.message = 'Xóa thành công!';
                    this.refreshList();
                } catch (error) {
                    console.log(error);
                    this.message = 'Xóa thất bại!';
                }
            }
        },

        async handleUpdate(index) {
            this.students = this.listStudent[index];
            this.isForm = 'update';
            this.indexStudent = index;
        },

        handleAdd() {
            this.students = {
                name: "",
                address: "",
                phone: "",
                sex: "",
                birthdate: "",
                class: this.classSelected
            }
            this.isForm = 'create';
            return true;
        },


        async updateStudent() {
            try {
                await StudentService.update(this.listStudent[this.indexStudent]._id, this.students);
                this.message = 'Cập nhật thành công!';
                this.refreshList();
            } catch (error) {
                console.log(error);
                this.message = 'Cập nhật thất bại!';
            }
            this.isForm = 'create';
            return true;
        },

        async createStudent(e) {
            try {
                await StudentService.create(this.students);
                this.message = 'Thêm mới thành công!';
            } catch (error) {
                console.log(error);
                this.message = 'Thêm mới thất bại!';

            }
        },

        async retrieveClass(){
            try {
                this.classList = await ClassService.getAll();
                this.classSelected = this.classList[0].name;
            } catch (error) {
                console.log(error);
            }
        },

        async retrieveStudents() {
            try {
                this.listStudent = await StudentService.getOfClass(this.classSelected);
            } catch (error) {
                console.log(error);
            }
        },
    },
    mounted() {
        this.retrieveClass();
        this.refreshList();
    }
};
</script>