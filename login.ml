<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Login - TCC Terceirô</title>
    <style>
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
        }
        
        body {
            background: linear-gradient(135deg, #6a11cb 0%, #2575fc 100%);
            height: 100vh;
            display: flex;
            justify-content: center;
            align-items: center;
            padding: 20px;
        }
        
        .login-container {
            background-color: white;
            border-radius: 10px;
            box-shadow: 0 10px 25px rgba(0, 0, 0, 0.2);
            width: 100%;
            max-width: 400px;
            padding: 40px;
            position: relative;
        }
        
        .login-form h2 {
            text-align: center;
            margin-bottom: 30px;
            color: #333;
        }
        
        .form-group {
            margin-bottom: 20px;
        }
        
        .form-group label {
            display: block;
            margin-bottom: 5px;
            color: #555;
            font-weight: 500;
        }
        
        .form-group input {
            width: 100%;
            padding: 12px 15px;
            border: 1px solid #ddd;
            border-radius: 5px;
            font-size: 16px;
            transition: border-color 0.3s;
        }
        
        .form-group input:focus {
            border-color: #2575fc;
            outline: none;
        }
        
        .btn {
            width: 100%;
            padding: 12px;
            background-color: #2575fc;
            color: white;
            border: none;
            border-radius: 5px;
            font-size: 16px;
            cursor: pointer;
            transition: background-color 0.3s;
            margin-top: 10px;
        }
        
        .btn:hover {
            background-color: #1c64e0;
        }
        
        .btn-secondary {
            background-color: #6c757d;
        }
        
        .btn-secondary:hover {
            background-color: #5a6268;
        }
        
        .signup-link {
            text-align: center;
            margin-top: 20px;
            color: #666;
        }
        
        .signup-link a {
            color: #2575fc;
            text-decoration: none;
            cursor: pointer;
        }
        
        .error-message {
            color: #e74c3c;
            font-size: 14px;
            margin-top: 5px;
            display: none;
            text-align: center;
        }
        
        .success-message {
            color: #27ae60;
            font-size: 14px;
            margin-top: 5px;
            display: none;
            text-align: center;
        }
        
        .user-info {
            display: none;
            text-align: center;
        }
        
        .user-info h2 {
            color: #2575fc;
            margin-bottom: 20px;
        }
        
        .user-details {
            background-color: #f8f9fa;
            padding: 15px;
            border-radius: 5px;
            margin-bottom: 20px;
        }
        
        .hidden {
            display: none;
        }
        
        .logo {
            text-align: center;
            margin-bottom: 20px;
        }
        
        .logo h1 {
            color: #2575fc;
            font-size: 24px;
        }
    </style>
</head>
<body>
    <div class="login-container">
        <div class="logo">
            <h1>TCC Terceirô</h1>
        </div>
        
        <div id="loginForm" class="login-form">
            <h2>Login</h2>
            <div class="form-group">
                <label for="username">Usuário</label>
                <input type="text" id="username" name="username" required placeholder="Digite seu usuário">
            </div>
            <div class="form-group">
                <label for="password">Senha</label>
                <input type="password" id="password" name="password" required placeholder="Digite sua senha">
            </div>
            <button type="button" class="btn" onclick="login()">Entrar</button>
            <div class="error-message" id="errorMessage">Usuário ou senha incorretos!</div>
            <div class="signup-link">
                Não tem uma conta? <a onclick="showRegisterForm()">Cadastre-se</a>
            </div>
        </div>

        <div id="registerForm" class="login-form hidden">
            <h2>Criar Conta</h2>
            <div class="form-group">
                <label for="newUsername">Usuário</label>
                <input type="text" id="newUsername" name="newUsername" required placeholder="Escolha um usuário">
            </div>
            <div class="form-group">
                <label for="newPassword">Senha</label>
                <input type="password" id="newPassword" name="newPassword" required placeholder="Crie uma senha">
            </div>
            <div class="form-group">
                <label for="confirmPassword">Confirmar Senha</label>
                <input type="password" id="confirmPassword" name="confirmPassword" required placeholder="Repita a senha">
            </div>
            <button type="button" class="btn" onclick="register()">Criar Conta</button>
            <div class="error-message" id="registerErrorMessage"></div>
            <div class="success-message" id="registerSuccessMessage">Conta criada com sucesso!</div>
            <div class="signup-link">
                Já tem uma conta? <a onclick="showLoginForm()">Faça login</a>
            </div>
        </div>
        
        <div id="userInfo" class="user-info">
            <h2>Login realizado com sucesso!</h2>
            <div class="user-details">
                <p>Bem-vindo, <span id="userDisplayName"></span>!</p>
            </div>
            <button class="btn btn-secondary" onclick="logout()">Sair</button>
        </div>
    </div>

    <script>
        // Verificar se já está logado ao carregar a página
        document.addEventListener('DOMContentLoaded', function() {
            const currentUser = JSON.parse(localStorage.getItem('currentUser'));
            if (currentUser) {
                showUserInfo(currentUser);
            }
        });
        
        // Mostrar formulário de registro
        function showRegisterForm() {
            document.getElementById('loginForm').classList.add('hidden');
            document.getElementById('registerForm').classList.remove('hidden');
            document.getElementById('userInfo').classList.add('hidden');
            clearMessages();
        }
        
        // Mostrar formulário de login
        function showLoginForm() {
            document.getElementById('registerForm').classList.add('hidden');
            document.getElementById('loginForm').classList.remove('hidden');
            document.getElementById('userInfo').classList.add('hidden');
            clearMessages();
        }
        
        // Mostrar informações do usuário
        function showUserInfo(user) {
            document.getElementById('loginForm').classList.add('hidden');
            document.getElementById('registerForm').classList.add('hidden');
            document.getElementById('userInfo').classList.remove('hidden');
            document.getElementById('userDisplayName').textContent = user.username;
        }
        
        // Limpar mensagens
        function clearMessages() {
            document.getElementById('errorMessage').style.display = 'none';
            document.getElementById('registerErrorMessage').style.display = 'none';
            document.getElementById('registerSuccessMessage').style.display = 'none';
        }
        
        // Registrar novo usuário
        function register() {
            const newUsername = document.getElementById('newUsername').value;
            const newPassword = document.getElementById('newPassword').value;
            const confirmPassword = document.getElementById('confirmPassword').value;
            
            const errorMessage = document.getElementById('registerErrorMessage');
            const successMessage = document.getElementById('registerSuccessMessage');
            
            // Validações
            if (newPassword !== confirmPassword) {
                errorMessage.textContent = 'As senhas não coincidem!';
                errorMessage.style.display = 'block';
                successMessage.style.display = 'none';
                return;
            }
            
            if (newPassword.length < 4) {
                errorMessage.textContent = 'A senha deve ter pelo menos 4 caracteres!';
                errorMessage.style.display = 'block';
                successMessage.style.display = 'none';
                return;
            }
            
            // Verificar se já existem usuários cadastrados
            let users = JSON.parse(localStorage.getItem('users')) || [];
            
            // Verificar se o usuário já existe
            if (users.some(user => user.username === newUsername)) {
                errorMessage.textContent = 'Este usuário já existe!';
                errorMessage.style.display = 'block';
                successMessage.style.display = 'none';
                return;
            }
            
            // Adicionar novo usuário
            users.push({
                username: newUsername,
                password: newPassword
            });
            
            localStorage.setItem('users', JSON.stringify(users));
            
            successMessage.style.display = 'block';
            errorMessage.style.display = 'none';
            
            // Limpar formulário
            document.getElementById('newUsername').value = '';
            document.getElementById('newPassword').value = '';
            document.getElementById('confirmPassword').value = '';
            
            // Mostrar formulário de login após 2 segundos
            setTimeout(() => {
                showLoginForm();
            }, 2000);
        }
        
        // Realizar login
        function login() {
            const username = document.getElementById('username').value;
            const password = document.getElementById('password').value;
            
            const errorMessage = document.getElementById('errorMessage');
            
            // Obter usuários do localStorage
            const users = JSON.parse(localStorage.getItem('users')) || [];
            
            // Verificar credenciais
            const user = users.find(user => user.username === username && user.password === password);
            
            if (user) {
                // Login bem-sucedido
                errorMessage.style.display = 'none';
                
                // Salvar sessão do usuário
                localStorage.setItem('currentUser', JSON.stringify(user));
                
                // Mostrar informações do usuário
                showUserInfo(user);
            } else {
                // Login falhou
                errorMessage.style.display = 'block';
            }
        }
        
        // Realizar logout
        function logout() {
            // Remover usuário atual do localStorage
            localStorage.removeItem('currentUser');
            
            // Mostrar formulário de login
            showLoginForm();
            
            // Limpar campos
            document.getElementById('username').value = '';
            document.getElementById('password').value = '';
        }
    </script>
</body>
</html>