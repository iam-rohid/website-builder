export const tempHtmlDoc = `
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Test Doc</title>
    <style>
      *{
        box-sizing: border-box;
        padding: 0;
        margin: 0;
      }
      html{
        font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
      }
      body{
        padding: 0;
        margin: 0;
      }
      .nav{
        width: 100%;
        height: 56px;
        background: #fff;
        box-shadow: 0 3px 8px rgba(0, 0, 0, .1);
        padding: 0 32px;
        z-index: 20;
      }
      .nav-wrapper{
        display: flex;
        flex-direction: row;
        align-items: center;
        height: 100%;
      }
      .logo{
        font-size: 1.3rem;
        font-weight: 700;
      }
      .menu{
       display: flex; 
       flex-direction: row;
       align-items: center;
       gap: 12px;
       margin-left: auto;
       margin-right: 24px;
      }
      .menu li{
        text-decoration: none;
        list-style: none;
      }
      .login-btn{
        display: flex;
        align-items: center;
        justify-content: center;
        background: rgb(54, 58, 255);
        color: #fff;
        padding: 12px 24px;
        text-decoration: none;
        border-radius: 8px;
      }
      .container{
        width: 100%;
        max-width: 1280px;
        margin-left: auto;
        margin-right: auto;
        padding: 0 2rem;
      }
      button{
        border: none;
        outline: none;
      }
      .hero-section{
        padding: 120px 0;
        text-align: center;
        background: #fff;
      }
      .hero-section h1{
        font-size: 3rem;
      }
      .hero-section .container{
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        gap: 30px;
      }
      .hero-section .cta-btn{
        display: flex;
        align-items: center;
        justify-content: center;
        background: rgb(54, 58, 255);
        color: #fff;
        padding: 18px 32px;
        font-size: 1.3rem;
        margin-top: 3rem;
        text-decoration: none;
        border-radius: 8px;
      }
    </style>
  </head>
  <body>
  <header>
    <nav class="nav">
    <div class="container nav-wrapper">
      <div class="logo">Logo</div>
      <ul class="menu">
        <li>Home</li>
        <li>Services</li>
        <li>Contact</li>
        <li>About Us</li>
      </ul>
      <a href="#" class="login-btn">Log In Button</a>
    </div>
  </nav>
  </header>
    <main>
      <section class="hero-section">
        <div class="container">
        <h1>Lorem ipsum dolor sit amet.</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magnam
          molestias alias ipsum tenetur amet hic.
        </p>
        <button class="cta-btn">Call To Action</button>
        </div>
      </section>
    </main>
  </body>
</html>

`;
