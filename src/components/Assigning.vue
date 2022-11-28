<template>
    <div id="container__assigning" class="container__items container__assigning">
        <div class="assigning__navbar">
            <div class="assigning__navbar-heading">
                <h1>Phân công giảng dạy</h1>
            </div>
            <div class="assigning__navbar-list " style="bottom: 0;">
                <div class="assigning__navbar-item assigning__navbar-level">
                    <label for="level-class" class="assigning__navbar-item-lable label-level">Khối: </label>
                    <select name="level-class" id="level-class" class="select-class">
                        <option value="12">12</option>
                        <option value="11">11</option>
                        <option value="10">10</option>
                    </select>
                </div>
                <div class="assigning__navbar-item assigning__navbar-level">
                    <label for="level-class" class="assigning__navbar-item-lable label-level">Môn học: </label>
                    <select name="level-class" id="level-class" class="select-class">
                        <option value="1">Toán</option>
                        <option value="2">Vật lý</option>
                        <option value="3">Hóa học</option>
                        <option value="4">Sinh học</option>
                        <option value="5">Ngoại ngữ</option>
                        <option value="6">Văn</option>
                        <option value="7">Lịch sử</option>
                        <option value="8">Địa lý</option>
                        <option value="9">Công nghệ</option>
                        <option value="10">Thể dục</option>
                        <option value="11">GDCD</option>
                        <option value="12">GDQP</option>
                    </select>
                </div>
                <div class="assigning__navbar-item assigning__navbar-level">
                    <label for="level-class" class="assigning__navbar-item-lable label-level">Năm học: </label>
                    <select name="level-class" id="level-class" class="select-class">
                        <option value="1">2020 - 2021</option>
                        <option value="2">2021 - 2022</option>
                        <option value="3">2022 - 2023</option>
                    </select>
                </div>
                <button class="assigning__navbar-btn navbar-item-btn mt-3">Liệt kê</button>
            </div>
        </div>
        <div class="assigning__container">
            <table class="assigning__table">
                <tr>
                    <th class="th__heading">Lớp</th>
                    <th class="th__heading">Giáo viên giảng dạy</th>
                </tr>
                <tr>
                    <th>12A1</th>
                    <th>
                        <label for="select-teacher"></label>
                        <select name="teacher" id="select-teacher">
                            <option value="">Chọn giáo viên</option>
                            <option value="CB001">Nguyễn Văn Linh</option>
                            <option value="CB001">Trần Văn Quyết</option>
                            <option value="CB001">Huỳnh Anh Thư</option>
                        </select>
                    </th>
                </tr>
                
                <tr>
                    <th>12A1</th>
                    <th>
                        <label for="select-teacher"></label>
                        <select name="teacher" id="select-teacher">
                            <option value="">Chọn giáo viên</option>
                            <option value="CB001">Nguyễn Văn Linh</option>
                            <option value="CB001">Trần Văn Quyết</option>
                            <option value="CB001">Huỳnh Anh Thư</option>
                        </select>
                    </th>
                </tr>
                <tr>
                    <th>12A2</th>
                    <th>
                        <label for="select-teacher"></label>
                        <select name="teacher" id="select-teacher">
                            <option value="">Chọn giáo viên</option>
                            <option value="CB001">Nguyễn Văn Linh</option>
                            <option value="CB001">Trần Văn Quyết</option>
                            <option value="CB001">Huỳnh Anh Thư</option>
                        </select>
                    </th>
                </tr>
                <tr>
                    <th>12A3</th>
                    <th>
                        <label for="select-teacher"></label>
                        <select name="teacher" id="select-teacher">
                            <option value="">Chọn giáo viên</option>
                            <option value="CB001">Nguyễn Văn Linh</option>
                            <option value="CB001">Trần Văn Quyết</option>
                            <option value="CB001">Huỳnh Anh Thư</option>
                        </select>
                    </th>
                </tr>
                <tr>
                    <th>12A4</th>
                    <th>
                        <label for="select-teacher"></label>
                        <select name="teacher" id="select-teacher">
                            <option value="">Chọn giáo viên</option>
                            <option value="CB001">Nguyễn Văn Linh</option>
                            <option value="CB001">Trần Văn Quyết</option>
                            <option value="CB001">Huỳnh Anh Thư</option>
                        </select>
                    </th>
                </tr>
                <tr>
                    <th>12A5</th>
                    <th>
                        <label for="select-teacher"></label>
                        <select name="teacher" id="select-teacher">
                            <option value="">Chọn giáo viên</option>
                            <option value="CB001">Nguyễn Văn Linh</option>
                            <option value="CB001">Trần Văn Quyết</option>
                            <option value="CB001">Huỳnh Anh Thư</option>
                        </select>
                    </th>
                </tr>
                <tr>
                    <th>12A6</th>
                    <th>
                        <label for="select-teacher"></label>
                        <select name="teacher" id="select-teacher">
                            <option value="">Chọn giáo viên</option>
                            <option value="CB001">Nguyễn Văn Linh</option>
                            <option value="CB001">Trần Văn Quyết</option>
                            <option value="CB001">Huỳnh Anh Thư</option>
                        </select>
                    </th>
                </tr>
                <tr>
                    <th>12A7</th>
                    <th>
                        <label for="select-teacher"></label>
                        <select name="teacher" id="select-teacher">
                            <option value="">Chọn giáo viên</option>
                            <option value="CB001">Nguyễn Văn Linh</option>
                            <option value="CB001">Trần Văn Quyết</option>
                            <option value="CB001">Huỳnh Anh Thư</option>
                        </select>
                    </th>
                </tr>
                <tr>
                    <th>12A8</th>
                    <th>
                        <label for="select-teacher"></label>
                        <select name="teacher" id="select-teacher">
                            <option value="">Chọn giáo viên</option>
                            <option value="CB001">Nguyễn Văn Linh</option>
                            <option value="CB001">Trần Văn Quyết</option>
                            <option value="CB001">Huỳnh Anh Thư</option>
                        </select>
                    </th>
                </tr>
                <tr>
                    <th>12A9</th>
                    <th>
                        <label for="select-teacher"></label>
                        <select name="teacher" id="select-teacher">
                            <option value="">Chọn giáo viên</option>
                            <option value="CB001">Nguyễn Văn Linh</option>
                            <option value="CB001">Trần Văn Quyết</option>
                            <option value="CB001">Huỳnh Anh Thư</option>
                        </select>
                    </th>
                </tr>
                <tr>
                    <th>12A10</th>
                    <th>
                        <label for="select-teacher"></label>
                        <select name="teacher" id="select-teacher">
                            <option value="">Chọn giáo viên</option>
                            <option value="CB001">Nguyễn Văn Linh</option>
                            <option value="CB001">Trần Văn Quyết</option>
                            <option value="CB001">Huỳnh Anh Thư</option>
                        </select>
                    </th>
                </tr>
            </table>
    
            <button class="asssigning__btn-save">Cập nhật</button>
        </div>
    </div>
</template>