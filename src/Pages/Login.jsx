import React from 'react'
import './Login.css'

export default function Home() {
  return (
    <main class="form-signin w-100 m-auto">
      <form>
        { <img class="mb-4" src="https://static.vecteezy.com/ti/fotos-gratis/t1/1373603-abra-o-livro-foto.jpg" alt="" width="300" height="100" /> }
        <h1 class="h3 mb-3 fw-normal">Please sign in</h1>

        <div class="form-floating">
          <input type="email" class="form-control" id="floatingInput" placeholder="Email" />
          <label for="floatingInput">Email</label>
        </div>
        <div class="form-floating">
          <input type="password" class="form-control" id="floatingPassword" placeholder="Senha" />
          <label for="floatingPassword">Senha</label>
        </div>

        <div class="checkbox mb-3">
          <label>
            <input type="checkbox" value="Lembre me" /> Lembre me
          </label>
        </div>
        <button class="w-100 btn btn-lg btn-primary" type="submit">Entrar</button>
        <p class="mt-5 mb-3 text-muted">&copy; 2017–2022</p>
      </form>
    </main>
  )
}

