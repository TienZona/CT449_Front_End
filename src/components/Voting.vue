<template>
    <div id="container__voting" class="container__items container__voting ">
        <div class="voting__navbar">
            <div class="voting__navbar-heading">
                <h1>Đánh giá hạnh kiểm</h1>
            </div>
            <div class="teaching__navbar-list">
                <div class="teaching__navbar-item">
                    <label for="teaching__navbar-item-level">Học kỳ: </label>
                    <select name="teaching__navbar-item-level" id="teaching__navbar-item-level">
                        <option value="1">1</option>
                        <option value="2">2</option>
                    </select>
                </div>
                <div class="teaching__navbar-item assigning__navbar-level">
                    <label for="level-class" class="teaching__navbar-item-lable label-level">Năm học: </label>
                    <select name="level-class" id="level-class" class="select-class">
                        <option value="1">2020 - 2021</option>
                        <option value="2">2021 - 2022</option>
                        <option value="3">2022 - 2023</option>
                    </select>
                </div>
                <button class="teaching__navbar-item-btn update__navbar-item-btn navbar-item-btn">Liệt kê</button>
            </div>
        </div>
        <div class="voting__container">
            <div class="teaching__navbar-item">
                <h1>Lớp 12A1</h1>
            </div>
            <table class="voting__table watch__container-classLists">
                <tbody>
                    <tr>
                        <th>STT</th>
                        <th>Họ và tên</th>
                        <th>Ngày sinh</th>
                        <th>Giới tính</th>
                        <th>Hạnh kiểm</th>
                    </tr>
                </tbody>
                <tbody>
                    <tr>
                        <th class="classLists__number">1</th>
                        <td class="classLists__name">Phùng Thị Lan Anh</td>
                        <td class="classLists__birthDate">31/1/2002</td>
                        <td class="classLists__gender">Nữ</td>
                        <td class="classLists__rank">
                            <label for="voting__select"></label>
                            <select name="voting__select" id="voting__select">
                                <option value="">Loại</option>
                                <option value="1">Giỏi</option>
                                <option value="2">Khá</option>
                                <option value="3">Trung bình</option>
                                <option value="4">Yếu</option>
                                <option value="5">Kém</option>
                            </select>
                        </td>
                    </tr>
                </tbody>
                <tbody>
                    <tr>
                        <th class="classLists__number">2</th>
                        <td class="classLists__name">Vũ Ngọc Anh</td>
                        <td class="classLists__birthDate">21/12/2002</td>
                        <td class="classLists__gender">Nữ</td>
                        <td class="classLists__rank">
                            <label for="voting__select"></label>
                            <select name="voting__select" id="voting__select">
                                <option value="">Loại</option>
                                <option value="1">Giỏi</option>
                                <option value="2">Khá</option>
                                <option value="3">Trung bình</option>
                                <option value="4">Yếu</option>
                                <option value="5">Kém</option>
                            </select>
                        </td>
                    </tr>
                </tbody>
                <tbody>
                    <tr>
                        <th class="classLists__number">3</th>
                        <td class="classLists__name">Dương Minh Đại Cương</td>
                        <td class="classLists__birthDate">3/8/2002</td>
                        <td class="classLists__gender">Nam</td>
                        <td class="classLists__rank">
                            <label for="voting__select"></label>
                            <select name="voting__select" id="voting__select">
                                <option value="">Loại</option>
                                <option value="1">Giỏi</option>
                                <option value="2">Khá</option>
                                <option value="3">Trung bình</option>
                                <option value="4">Yếu</option>
                                <option value="5">Kém</option>
                            </select>
                        </td>
                    </tr>
                </tbody>
            </table>
            <button class="asssigning__btn-save">Lưu đánh giá</button>
        </div>
    </div>
</template>