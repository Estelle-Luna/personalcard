document.addEventListener('DOMContentLoaded', function () {
    const avatar = document.getElementById('avatar');
    const avatarUpload = document.getElementById('avatar-upload');
    const nameInput = document.getElementById('name');
    const bioInput = document.getElementById('bio');
    const saveBtn = document.getElementById('save-btn');

    // 头像上传功能
    avatar.addEventListener('click', function () {
        avatarUpload.click();
    });

    avatarUpload.addEventListener('change', function (event) {
        const file = event.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = function (e) {
                avatar.src = e.target.result;
            };
            reader.readAsDataURL(file);
        }
    });

    // 保存功能
    saveBtn.addEventListener('click', function () {
        const name = nameInput.value;
        const bio = bioInput.value;

        if (name || bio) {
            alert('信息已保存！');
            // 这里可以将信息保存到服务器或本地存储
        } else {
            alert('请输入姓名或简介！');
        }
    });
});