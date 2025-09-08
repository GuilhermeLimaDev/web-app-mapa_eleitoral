import React, { useState } from "react";
import styles from "./Login.module.css";
import { useNavigate } from "react-router-dom";

const Login = () => {
    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        // Adicione lógica de autenticação aqui
        alert(`Email: ${email}\nSenha: ${senha}`);
        navigate('/dashboard'); // Redireciona para a página do dashboard após o login

    };

    return (
        <div className={styles.container}>
            <form className={styles.form} onSubmit={handleSubmit}>
                <h2 className={styles.title}>Login</h2>
                <label className={styles.label}>
                    Email
                    <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className={styles.input}
                        required
                    />
                </label>
                <label className={styles.label}>
                    Senha
                    <input
                        type="password"
                        value={senha}
                        onChange={(e) => setSenha(e.target.value)}
                        className={styles.input}
                        required
                    />
                </label>
                <button type="submit" className={styles.button}>
                    Entrar
                </button>
            </form>
        </div>
    );
};

export default Login;