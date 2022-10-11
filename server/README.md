### Khởi tạo một dự án sử dụng MERN Stack:

1. Tạo thư mục server.
2. Tạo và thêm .gitignore.
3. Vào terminal gõ npm init -y.
4. Tạo file index.js.
5. Vào Package.json thêm "type":"module",.

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
