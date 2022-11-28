<template>
    <div id="container__watch" class="container__items container__watch">
        <div class="watch__navbar">
            <div class="watch__navbar-heading">
                <h1>Xem danh sách lớp</h1>
            </div>
            <div class="watch__navbar-list">
                <div class="watch__navbar-item">
                    <label for="watch__navbar-item-level">Khối </label>
                    <select name="watch__navbar-item-level" id="watch__navbar-item-level">
                        <option value="12">12</option>
                        <option value="11">11</option>
                        <option value="10">10</option>
                    </select>
                </div>
                <div class="watch__navbar-item">
                    <label for="watch__navbar-item-class">Lớp </label>
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
                <button class="watch__navbar-item-btn navbar-item-btn" @click="refreshList()">Liệt kê</button>
            </div>
        </div>
        <div class="watch__container">
            <h1 class="watch__container-heading"></h1>
            <table class="watch__container-classLists" v-if="listStudent.length > 0">
                <tr>
                    <th>STT</th>
                    <th>Họ và tên</th>
                    <th>Ngày sinh</th>
                    <th>Giới tính</th>
                    <th>Số điện thoại</th>
                    <th>Địa chỉ</th>
                </tr>
                <tr class="row__student" v-for="(student, index) in listStudent">
                    <th class="classLists__number">{{ index + 1 }}</th>
                    <td class="classLists__name">{{ student.name }}</td>
                    <td class="classLists__birthDate">{{student.birthdate}}</td>
                    <td class="classLists__gender">{{student.sex}}</td>
                    <td class="classLists__telephone">{{student.phone}}</td>
                    <td class="classLists__address">{{student.address}}</td>
                </tr>

            </table>
            <p v-else>Không có học sinh nào.</p>
        </div>
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
            classList: [],
            classSelected: '12A1',
        };
    },
    compoted: {

    },
    methods: {
        async refreshList() {
            this.retrieveStudents();
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