<template>
    <div id="container__schedule" class="container__items container__schedule">
        <div class="schedule__navbar">
            <div class="schedule__navbar-heading">
                <h1>Lập thời khóa biểu</h1>
            </div>
            <div class="schedule__navbar-list">
                <div class="schedule__navbar-item schedule__navbar-level">
                    <label for="level-class" class="schedule__navbar-item-lable label-level">Khối: </label>
                    <select name="level-class" id="level-class" class="select-class">
                        <option value="12">12</option>
                        <option value="11">11</option>
                        <option value="10">10</option>
                    </select>
                </div>
                <div class="schedule__navbar-item schedule__navbar-class">
                    <label for="" class="schedule__navbar-item-lable select-class">Lớp: </label>
                    <select name="class" id="class" class="class">
                        <option value="12A1">12A1</option>
                    </select>
                </div>
                <div class="schedule__navbar-item schedule__navbar-level">
                    <label for="level-class" class="schedule__navbar-item-lable label-level">Năm học: </label>
                    <select name="level-class" id="level-class" class="select-class">
                        <option value="21">2020 - 2021</option>
                        <option value="22">2021 - 2022</option>
                        <option value="23">2022 - 2023</option>
                    </select>
                </div>

                <button class="schedule__navbar-btn navbar-item-btn">Liệt kê</button>
            </div>
        </div>
        <div class="schedule__container">
            <!-- <h1 class="schedule__container-class">Lớp:  </h1> -->
            <div class="schedule__header">
                <div class="schedule__navbar-item schedule__navbar-level">
                    <label for="level-class" class="schedule__navbar-item-lable label-level">Chọn môn: </label>
                    <select name="level-class" id="level-class" class="select-class">
                        <option value="1">Toán</option>
                        <option value="2">Lý</option>
                        <option value="3">Hóa</option>
                    </select>
                </div>
            </div>
            <h1 class="schedule__heading">Buổi sáng</h1>
            <table class="table">
                <tr>
                    <th class="table__day">Tiết</th>
                    <th class="table__day">Thứ Hai</th>
                    <th class="table__day">Thứ Ba</th>
                    <th class="table__day">Thứ Tư</th>
                    <th class="table__day">Thứ Năm</th>
                    <th class="table__day">Thứ Sáu</th>
                    <th class="table__day">Thứ Bảy</th>
                    <th class="table__day">Chủ Nhật</th>
                </tr>
                <tr>
                    <th>1</th>
                    <td><input class="table__input" type="text"></td>
                    <td><input class="table__input" type="text"></td>
                    <td><input class="table__input" type="text"></td>
                    <td><input class="table__input" type="text"></td>
                    <td><input class="table__input" type="text"></td>
                    <td><input class="table__input" type="text"></td>
                    <td><input class="table__input" type="text"></td>

                </tr>
                <tr>
                    <th>2</th>
                    <td><input class="table__input" type="text"></td>
                    <td><input class="table__input" type="text"></td>
                    <td><input class="table__input" type="text"></td>
                    <td><input class="table__input" type="text"></td>
                    <td><input class="table__input" type="text"></td>
                    <td><input class="table__input" type="text"></td>
                    <td><input class="table__input" type="text"></td>

                </tr>
                <tr>
                    <th>3</th>
                    <td><input class="table__input" type="text"></td>
                    <td><input class="table__input" type="text"></td>
                    <td><input class="table__input" type="text"></td>
                    <td><input class="table__input" type="text"></td>
                    <td><input class="table__input" type="text"></td>
                    <td><input class="table__input" type="text"></td>
                    <td><input class="table__input" type="text"></td>

                </tr>
                <tr>
                    <th>4</th>
                    <td><input class="table__input" type="text"></td>
                    <td><input class="table__input" type="text"></td>
                    <td><input class="table__input" type="text"></td>
                    <td><input class="table__input" type="text"></td>
                    <td><input class="table__input" type="text"></td>
                    <td><input class="table__input" type="text"></td>
                    <td><input class="table__input" type="text"></td>

                </tr>
                <tr>
                    <th>5</th>
                    <td><input class="table__input" type="text"></td>
                    <td><input class="table__input" type="text"></td>
                    <td><input class="table__input" type="text"></td>
                    <td><input class="table__input" type="text"></td>
                    <td><input class="table__input" type="text"></td>
                    <td><input class="table__input" type="text"></td>
                    <td><input class="table__input" type="text"></td>

                </tr>
            </table>

            <h1 class="schedule__heading">Buổi chiều</h1>
            <table class="table">
                <tr>
                    <th class="table__day">Tiết</th>
                    <th class="table__day">Thứ Hai</th>
                    <th class="table__day">Thứ Ba</th>
                    <th class="table__day">Thứ Tư</th>
                    <th class="table__day">Thứ Năm</th>
                    <th class="table__day">Thứ Sáu</th>
                    <th class="table__day">Thứ Bảy</th>
                    <th class="table__day">Chủ Nhật</th>
                </tr>
                <tr>
                    <th>1</th>
                    <td><input class="table__input" type="text"></td>
                    <td><input class="table__input" type="text"></td>
                    <td><input class="table__input" type="text"></td>
                    <td><input class="table__input" type="text"></td>
                    <td><input class="table__input" type="text"></td>
                    <td><input class="table__input" type="text"></td>
                    <td><input class="table__input" type="text"></td>

                </tr>
                <tr>
                    <th>2</th>
                    <td><input class="table__input" type="text"></td>
                    <td><input class="table__input" type="text"></td>
                    <td><input class="table__input" type="text"></td>
                    <td><input class="table__input" type="text"></td>
                    <td><input class="table__input" type="text"></td>
                    <td><input class="table__input" type="text"></td>
                    <td><input class="table__input" type="text"></td>

                </tr>
                <tr>
                    <th>3</th>
                    <td><input class="table__input" type="text"></td>
                    <td><input class="table__input" type="text"></td>
                    <td><input class="table__input" type="text"></td>
                    <td><input class="table__input" type="text"></td>
                    <td><input class="table__input" type="text"></td>
                    <td><input class="table__input" type="text"></td>
                    <td><input class="table__input" type="text"></td>

                </tr>
                <tr>
                    <th>4</th>
                    <td><input class="table__input" type="text"></td>
                    <td><input class="table__input" type="text"></td>
                    <td><input class="table__input" type="text"></td>
                    <td><input class="table__input" type="text"></td>
                    <td><input class="table__input" type="text"></td>
                    <td><input class="table__input" type="text"></td>
                    <td><input class="table__input" type="text"></td>

                </tr>
                <tr>
                    <th>5</th>
                    <td><input class="table__input" type="text"></td>
                    <td><input class="table__input" type="text"></td>
                    <td><input class="table__input" type="text"></td>
                    <td><input class="table__input" type="text"></td>
                    <td><input class="table__input" type="text"></td>
                    <td><input class="table__input" type="text"></td>
                    <td><input class="table__input" type="text"></td>

                </tr>
            </table>
            <button class="asssigning__btn-save">Lưu cập nhật</button>
        </div>
        <div class="schedule__modal display--none">
            <form action="" class="update__form">
                <div class="form__header">
                    <h1 class="form__header-name">Xếp Thời Khóa Biểu</h1>
                </div>
                <h1 style="text-align: center; ">Môn: Toán</h1>
                <div style="display: flex; flex-direction: column; align-items: center;">
                    <h2 style="text-align: center;">Buổi sáng</h2>
                    <table class="table">
                        <tr>
                            <th class="table__day">Tiết</th>
                            <th class="table__day">Thứ 2</th>
                            <th class="table__day">Thứ 3</th>
                            <th class="table__day">Thứ 4</th>
                            <th class="table__day">Thứ 5</th>
                            <th class="table__day">Thứ 6</th>
                            <th class="table__day">Thứ 7</th>
                        </tr>
                        <tr>
                            <td>1</td>
                            <td><input type="checkbox"></td>
                            <td><input type="checkbox"></td>
                            <td><input type="checkbox"></td>
                            <td><input type="checkbox"></td>
                            <td><input type="checkbox"></td>
                            <td><input type="checkbox"></td>
                        </tr>
                        <tr>
                            <td>2</td>
                            <td><input type="checkbox"></td>
                            <td><input type="checkbox"></td>
                            <td><input type="checkbox"></td>
                            <td><input type="checkbox"></td>
                            <td><input type="checkbox"></td>
                            <td><input type="checkbox"></td>
                        </tr>
                        <tr>
                            <td>3</td>
                            <td><input type="checkbox"></td>
                            <td><input type="checkbox"></td>
                            <td><input type="checkbox"></td>
                            <td><input type="checkbox"></td>
                            <td><input type="checkbox"></td>
                            <td><input type="checkbox"></td>
                        </tr>
                        <tr>
                            <td>4</td>
                            <td><input type="checkbox"></td>
                            <td><input type="checkbox"></td>
                            <td><input type="checkbox"></td>
                            <td><input type="checkbox"></td>
                            <td><input type="checkbox"></td>
                            <td><input type="checkbox"></td>
                        </tr>
                        <tr>
                            <td>5</td>
                            <td><input type="checkbox"></td>
                            <td><input type="checkbox"></td>
                            <td><input type="checkbox"></td>
                            <td><input type="checkbox"></td>
                            <td><input type="checkbox"></td>
                            <td><input type="checkbox"></td>
                        </tr>
                    </table>
                </div>
                <div style="display: flex; flex-direction: column; align-items: center;">
                    <h2 style="text-align: center;">Buổi chiều</h2>
                    <table class="table">
                        <tr>
                            <th class="table__day">Tiết</th>
                            <th class="table__day">Thứ 2</th>
                            <th class="table__day">Thứ 3</th>
                            <th class="table__day">Thứ 4</th>
                            <th class="table__day">Thứ 5</th>
                            <th class="table__day">Thứ 6</th>
                            <th class="table__day">Thứ 7</th>
                        </tr>
                        <tr>
                            <td>1</td>
                            <td><input type="checkbox"></td>
                            <td><input type="checkbox"></td>
                            <td><input type="checkbox"></td>
                            <td><input type="checkbox"></td>
                            <td><input type="checkbox"></td>
                            <td><input type="checkbox"></td>
                        </tr>
                        <tr>
                            <td>2</td>
                            <td><input type="checkbox"></td>
                            <td><input type="checkbox"></td>
                            <td><input type="checkbox"></td>
                            <td><input type="checkbox"></td>
                            <td><input type="checkbox"></td>
                            <td><input type="checkbox"></td>
                        </tr>
                        <tr>
                            <td>3</td>
                            <td><input type="checkbox"></td>
                            <td><input type="checkbox"></td>
                            <td><input type="checkbox"></td>
                            <td><input type="checkbox"></td>
                            <td><input type="checkbox"></td>
                            <td><input type="checkbox"></td>
                        </tr>
                        <tr>
                            <td>4</td>
                            <td><input type="checkbox"></td>
                            <td><input type="checkbox"></td>
                            <td><input type="checkbox"></td>
                            <td><input type="checkbox"></td>
                            <td><input type="checkbox"></td>
                            <td><input type="checkbox"></td>
                        </tr>
                        <tr>
                            <td>5</td>
                            <td><input type="checkbox"></td>
                            <td><input type="checkbox"></td>
                            <td><input type="checkbox"></td>
                            <td><input type="checkbox"></td>
                            <td><input type="checkbox"></td>
                            <td><input type="checkbox"></td>
                        </tr>
                    </table>
                </div>
                <div class="form__footer">
                    <button class="exit">Hủy</button>
                    <button class="submit">Lưu</button>
                </div>
            </form>
        </div>
    </div>
</template>