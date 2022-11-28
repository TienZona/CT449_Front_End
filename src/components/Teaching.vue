<template>
    <div id="container__teaching" class="container__items container__teaching">
        <div class="teaching__navbar">
            <div class="teaching__navbar-heading">
                <h1>Lịch giảng dạy</h1>
            </div>
            <div class="teaching__navbar-list">
                <div class="teaching__navbar-item">
                    <label for="teaching__navbar-item-level">Học kỳ: </label>
                    <select name="teaching__navbar-item-level" id="teaching__navbar-item-level">
                        <option value="1">1</option>
                        <option value="2">2</option>
                    </select>
                </div>
                <div class="teaching__navbar-item">
                    <label for="teaching__navbar-item-class">Năm học: </label>
                    <select name="teaching__navbar-item-class" id="teaching__navbar-item-class">
                        <option value="1">2020 - 2021</option>
                        <option value="2">2021 - 2022</option>
                        <option value="3">2022 - 2023</option>
                    </select>
                </div>
                <button class="watch__navbar-item-btn navbar-item-btn">Liệt kê</button>
            </div>
        </div>
        <div class="teaching__container">
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
                    <td>12A1</td>
                    <td>12A2</td>
                    <td>12A3</td>
                    <td>12A4</td>
                    <td>12A5</td>
                    <td></td>
                    <td></td>

                </tr>
                <tr>
                    <th>2</th>
                    <td>12A1</td>
                    <td>12A2</td>
                    <td>12A3</td>
                    <td>12A4</td>
                    <td>12A5</td>
                    <td></td>
                    <td></td>

                </tr>
                <tr>
                    <th>3</th>
                    <td>11A6</td>
                    <td>11A7</td>
                    <td>11A8</td>
                    <td>11A9</td>
                    <td>11A10</td>
                    <td></td>
                    <td></td>

                </tr>
                <tr>
                    <th>4</th>
                    <td>11A6</td>
                    <td>11A7</td>
                    <td>11A8</td>
                    <td>11A9</td>
                    <td>11A10</td>
                    <td></td>
                    <td></td>

                </tr>
                <tr>
                    <th>5</th>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>

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
                    <td>12A6</td>
                    <td>12A7</td>
                    <td>12A8</td>
                    <td>12A9</td>
                    <td>12A10</td>
                    <td></td>
                    <td></td>

                </tr>
                <tr>
                    <th>2</th>
                    <td>12A6</td>
                    <td>12A7</td>
                    <td>12A8</td>
                    <td>12A9</td>
                    <td>12A10</td>
                    <td></td>
                    <td></td>

                </tr>
                <tr>
                    <th>3</th>
                    <td>11A1</td>
                    <td>11A2</td>
                    <td>11A3</td>
                    <td>11A4</td>
                    <td>11A5</td>
                    <td></td>
                    <td></td>

                </tr>
                <tr>
                    <th>4</th>
                    <td>11A1</td>
                    <td>11A2</td>
                    <td>11A3</td>
                    <td>11A4</td>
                    <td>11A5</td>
                    <td></td>
                    <td></td>

                </tr>
                <tr>
                    <th>5</th>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>

                </tr>
            </table>
        </div>
    </div>
</template>