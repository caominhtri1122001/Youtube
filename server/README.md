### Khởi tạo một dự án sử dụng MERN Stack:

1. Tạo thư mục server.
2. Tạo và thêm .gitignore.
3. Vào terminal gõ npm init -y.
4. Tạo file index.js.

### Cách chạy Nodemon:

1. Cài đặt nodemon bằng `npm install nodemon`.
2. Vào package.json và sữa

```
    "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
    },
```

thành

```
    "scripts": {
    "start": "nodemon index.js"
    },
```

3. Chạy dự án bằng npm start.

### Cách kết nối MoongoDB

1. Đăng nhập vào MoongoDB và Tạo Cluster (Nếu đã có Organizations).
2. Vào Database Access tạo dtb user và cho quyền read and write any database.
3. Vào Network Access Add IP Address cho tất cả vô được ở mọi nơi.
4. Về connect Database và click vào Connect your application.
5. Copy connectionString.
6. Tạo file env và lưu connectionString ở đấy (nhớ thay đổi <password> bằng password admin)
7. npm install dotenv
8. require("dotenv").config(); vào đầu index.js
9. Kết nối

```
const connect = () => {
    mongoose.connect(process.env.CONNECTION_STRING);
};
```
