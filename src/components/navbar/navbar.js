import React from 'react'

export default function Navbar() {
  return (
    <nav class="navbar navbar-expand-lg bg-body-tertiary">
  <div class="container-fluid">
    <a class="navbar-brand fs-4 fw-bold" href="#">Dunya O Akharat</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">Bayan</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Quran</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Hadees</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Duai</a>
        </li>   
      </ul>
    </div>
  </div>
</nav>
  )
}
