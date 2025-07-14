const routes = {
    "/login": renderLogin,
    "/register": renderRegister,
    "/dashboard": renderDashboard
};

function router() {
    const path = location.hash.slice(1) || "/dashboard";
    const user = getUser();

    if (!user && path !== "/login" && path !== "/register") {
        renderNotFound();
    } else if (user && (path === "/login" || path === "/register")) {
        renderDashboard();
    } else {
        (routes[path] || renderNotFound)();
    }

// Mostrar u ocultar logout
    document.getElementById("logout-link").style.display = user ? "inline" : "none";
}

function renderLogin() {
    document.getElementById("app").innerHTML = `
<h2>Iniciar Sesión</h2>
<form id="login-form">
<input type="email" name="email" placeholder="Correo" required><br>
<input type="password" name="password" placeholder="Contraseña" required><br>
<button type="submit">Ingresar</button>
</form>
`;

    document.getElementById("login-form").addEventListener("submit", async (e) => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        const res = await fetch(`http://localhost:3000/users?email=${email}&password=${password}`);
        const users = await res.json();

        if (users.length) {
            localStorage.setItem("user", JSON.stringify(users[0]));
            location.hash = "/dashboard";
        } else {
            alert("Credenciales incorrectas");
        }
    });
}

function renderRegister() {
    document.getElementById("app").innerHTML = `
<h2>Registro</h2>
<form id="register-form">
<input type="email" name="email" placeholder="Correo" required><br>
<input type="password" name="password" placeholder="Contraseña" required><br>
<select name="role">
<option value="visitor">Visitante</option>
<option value="admin">Administrador</option>
</select><br>
<button type="submit">Registrarse</button>
</form>
`;

    document.getElementById("register-form").addEventListener("submit", async (e) => {
        e.preventDefault();
        const user = {
            email: e.target.email.value,
            password: e.target.password.value,
            role: e.target.role.value
        };

        await fetch(`http://localhost:3000/users`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(user)
        });

        alert("Registro exitoso");
        location.hash = "/login";
    });
}

function renderDashboard() {
    const user = getUser();
    document.getElementById("app").innerHTML = `
<h2>Bienvenido, ${user.email}</h2>
<p>Rol: ${user.role}</p>
<div id="eventos"></div>
${user.role === "admin" ? `
<h3>Crear Evento</h3>
<form id="create-event">
<input name="title" placeholder="Título" required><br>
<input name="date" placeholder="Fecha" required><br>
<input name="capacity" type="number" placeholder="Cupo" required><br>
<button type="submit">Crear</button>
</form>
` : ""}
`;

    if (user.role === "admin") {
        document.getElementById("create-event").addEventListener("submit", async (e) => {
            e.preventDefault();
            const newEvent = {
                title: e.target.title.value,
                date: e.target.date.value,
                capacity: parseInt(e.target.capacity.value)
            };

            await fetch("http://localhost:3000/events", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(newEvent)
            });

            alert("Evento creado");
            renderDashboard();
        });
    }

    loadEvents();
}

async function loadEvents() {
    const res = await fetch("http://localhost:3000/events");
    const events = await res.json();
    const container = document.getElementById("eventos");

    if (!events.length) return container.innerHTML = "<p>No hay eventos aún.</p>";

    container.innerHTML = "<h3>Eventos Disponibles</h3>" + events.map(ev => `
<div style="border:1px solid #ccc; padding:1em; margin:1em 0;">
<strong>${ev.title}</strong><br>
Fecha: ${ev.date} | Cupo: ${ev.capacity}
</div>
`).join("");
}

function renderNotFound() {
    document.getElementById("app").innerHTML = `
<h2>404 - Página no encontrada</h2>
<p>La ruta solicitada no está permitida.</p>
`;
}

function getUser() {
    return JSON.parse(localStorage.getItem("user"));
}

document.getElementById("logout-link").addEventListener("click", () => {
    localStorage.removeItem("user");
    location.hash = "/login";
});

window.addEventListener("hashchange", router);
document.addEventListener("DOMContentLoaded", router);



