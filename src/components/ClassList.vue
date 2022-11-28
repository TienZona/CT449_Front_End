<template>
    <div id="container__watch" class="container__items container__watch display--none">
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
                    <select name="watch__navbar-item-class" id="watch__navbar-item-class">
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
                <button class="watch__navbar-item-btn navbar-item-btn">Liệt kê</button>
            </div>
        </div>
        <div class="watch__container display--none">
            <h1 class="watch__container-heading"></h1>
            <table class="watch__container-classLists">
            </table>
        </div>
    </div>
</template>