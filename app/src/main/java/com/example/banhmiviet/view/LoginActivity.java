package com.example.banhmiviet.view;

import android.content.Intent;
import android.os.Bundle;
import android.text.InputType;
import android.widget.*;
import androidx.appcompat.app.AppCompatActivity;
import com.example.banhmiviet.R;
import com.example.banhmiviet.controller.LoginController;
import com.example.banhmiviet.model.User;

public class LoginActivity extends AppCompatActivity {

    EditText edtUsername, edtPassword;
    Spinner spinnerRole;
    Button btnLogin;
    ImageView imgShowPassword;
    boolean isPasswordVisible = false;

    LoginController controller;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_login);

        // Ánh xạ
        edtUsername = findViewById(R.id.edtUsername);
        edtPassword = findViewById(R.id.edtPassword);
        spinnerRole = findViewById(R.id.spinnerRole);
        btnLogin = findViewById(R.id.btnLogin);
        imgShowPassword = findViewById(R.id.imgShowPassword);

        // Gán dữ liệu cho Spinner
        String[] roles = {"admin", "staff"};
        ArrayAdapter<String> adapter = new ArrayAdapter<>(this, android.R.layout.simple_spinner_item, roles);
        adapter.setDropDownViewResource(android.R.layout.simple_spinner_dropdown_item);
        spinnerRole.setAdapter(adapter);

        // Khởi tạo controller
        controller = new LoginController(this);

        // Xử lý nút đăng nhập
        btnLogin.setOnClickListener(v -> {
            String username = edtUsername.getText().toString().trim();
            String password = edtPassword.getText().toString().trim();
            String role = spinnerRole.getSelectedItem().toString();

            controller.login(username, password, role);
        });

        // Xử lý hiện/ẩn mật khẩu
        imgShowPassword.setOnClickListener(v -> {
            if (isPasswordVisible) {
                edtPassword.setInputType(InputType.TYPE_CLASS_TEXT | InputType.TYPE_TEXT_VARIATION_PASSWORD);
                imgShowPassword.setImageResource(R.drawable.ic_eye_off);
            } else {
                edtPassword.setInputType(InputType.TYPE_CLASS_TEXT | InputType.TYPE_TEXT_VARIATION_VISIBLE_PASSWORD);
                imgShowPassword.setImageResource(R.drawable.ic_eye_on);
            }
            edtPassword.setSelection(edtPassword.getText().length());
            isPasswordVisible = !isPasswordVisible;
        });
    }

    public void showLoginSuccess(User user) {
        Toast.makeText(this, "Đăng nhập thành công", Toast.LENGTH_SHORT).show();
        Intent intent;
        if (user.getRole().equals("admin")) {
            intent = new Intent(this, AdminDashboardActivity.class);
        } else {
            intent = new Intent(this, StaffDashboardActivity.class);
        }
        startActivity(intent);
        finish();
    }

    public void showLoginError() {
        Toast.makeText(this, "Sai thông tin đăng nhập", Toast.LENGTH_SHORT).show();
    }
}
