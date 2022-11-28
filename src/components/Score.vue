<template>
    <div id="container__score" class="container__items container__score">
        <div class="score__navbar">
            <div class="score__navbar-heading">
                <h1>Cập nhật điểm số</h1>
            </div>
            <div class="score__navbar-list">
                <div class="assigning__navbar-item assigning__navbar-level">
                    <label for="level-class" class="assigning__navbar-item-lable label-level">Khối: </label>
                    <select name="level-class" id="level-class" class="select-class">
                        <option value="12">12</option>
                        <option value="11">11</option>
                        <option value="10">10</option>
                    </select>
                </div>

                <div class="assigning__navbar-item assigning__navbar-level">
                    <label for="level-class" class="assigning__navbar-item-lable label-level">Lớp </label>
                    <select name="level-class" id="level-class" class="select-class">
                        <option value="12A1">12A1</option>
                        <option value="12A2">12A2</option>
                        <option value="12A3">12A3</option>
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
                <div class="teaching__navbar-item">
                    <label for="teaching__navbar-item-level">Học kỳ: </label>
                    <select name="teaching__navbar-item-level" id="teaching__navbar-item-level">
                        <option value="1">1</option>
                        <option value="2">2</option>
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
                <button class="assigning__navbar-btn navbar-item-btn">Liệt kê</button>
            </div>


        </div>
        <div class="score__container">
            <table class="score__table">
                <tr>
                    <th rowspan="2" class="th__heading">STT</th>
                    <th rowspan="2" class="th__heading">Họ và tên</th>
                    <th colspan="3" class="th__heading">Miệng</th>
                    <th colspan="5" class="th__heading">15 Phút</th>
                    <th colspan="3" class="th__heading">1 Tiết</th>
                    <th rowspan="2" class="th__heading">Học Kỳ</th>
                    <th rowspan="2" class="th__heading">Điểm TBHK</th>
                </tr>
                <tr>
                    <th class="th__heading">M1</th>
                    <th class="th__heading">M2</th>
                    <th class="th__heading">M3</th>
                    <th class="th__heading">P1</th>
                    <th class="th__heading">P2</th>
                    <th class="th__heading">P3</th>
                    <th class="th__heading">P4</th>
                    <th class="th__heading">P5</th>
                    <th class="th__heading">T1</th>
                    <th class="th__heading">T2</th>
                    <th class="th__heading">T3</th>
                </tr>
                <tr>
                    <th class="th__heading">1</th>
                    <th class="th__name">Phùng Thị Lan Anh</th>
                    <th><input type="text" class="th__input"></th>
                    <th><input type="text" class="th__input"></th>
                    <th><input type="text" class="th__input"></th>
                    <th><input type="text" class="th__input"></th>
                    <th><input type="text" class="th__input"></th>
                    <th><input type="text" class="th__input"></th>
                    <th><input type="text" class="th__input"></th>
                    <th><input type="text" class="th__input"></th>
                    <th><input type="text" class="th__input"></th>
                    <th><input type="text" class="th__input"></th>
                    <th><input type="text" class="th__input"></th>
                    <th><input type="text" class="th__input"></th>
                    <th><input type="text" class="th__input"></th>
                </tr>
                <tr>
                    <th class="th__heading">2</th>
                    <th class="th__name">Vũ Ngọc Anh</th>
                    <th><input type="text" class="th__input"></th>
                    <th><input type="text" class="th__input"></th>
                    <th><input type="text" class="th__input"></th>
                    <th><input type="text" class="th__input"></th>
                    <th><input type="text" class="th__input"></th>
                    <th><input type="text" class="th__input"></th>
                    <th><input type="text" class="th__input"></th>
                    <th><input type="text" class="th__input"></th>
                    <th><input type="text" class="th__input"></th>
                    <th><input type="text" class="th__input"></th>
                    <th><input type="text" class="th__input"></th>
                    <th><input type="text" class="th__input"></th>
                    <th><input type="text" class="th__input"></th>
                </tr>
                <tr>
                    <th class="th__heading">3</th>
                    <th class="th__name">Dương Minh Đại Cương</th>
                    <th><input type="text" class="th__input"></th>
                    <th><input type="text" class="th__input"></th>
                    <th><input type="text" class="th__input"></th>
                    <th><input type="text" class="th__input"></th>
                    <th><input type="text" class="th__input"></th>
                    <th><input type="text" class="th__input"></th>
                    <th><input type="text" class="th__input"></th>
                    <th><input type="text" class="th__input"></th>
                    <th><input type="text" class="th__input"></th>
                    <th><input type="text" class="th__input"></th>
                    <th><input type="text" class="th__input"></th>
                    <th><input type="text" class="th__input"></th>
                    <th><input type="text" class="th__input"></th>
                </tr>
            </table>
            <button class="asssigning__btn-save">Lưu chỉnh sửa</button>
        </div>

    </div>
</template>