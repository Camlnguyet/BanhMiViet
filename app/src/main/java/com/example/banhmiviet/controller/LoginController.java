package com.example.banhmiviet.controller;

import com.example.banhmiviet.model.User;
import com.example.banhmiviet.view.LoginActivity;

public class LoginController {
    private LoginActivity view;

    public LoginController(LoginActivity view) {
        this.view = view;
    }

    public void login(String username, String password, String role) {
        // Đây là ví dụ kiểm tra cứng, bạn có thể thay bằng API hoặc DB
        if (role.equals("admin") && username.equals("admin") && password.equals("admin123")) {
            view.showLoginSuccess(new User(username, password, role));
        } else if (role.equals("staff") && username.equals("nhanvien") && password.equals("123456")) {
            view.showLoginSuccess(new User(username, password, role));
        } else {
            view.showLoginError();
        }
    }
}
