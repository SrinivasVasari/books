import Head from "next/head";
import MainPage from "../components/Layout/Main";
import Nav from "../components/Layout/Nav";

export default function Home() {
  return (
    <>
      <Nav />
      <div className="container">
        <Head>
          <title>Books App</title>
          <meta
            name="viewport"
            content="width=device-width,minimum-scale=1,initial-scale=1"
          />
          <link rel="icon" href="/favicon.ico" />
          <link
            href="https://fonts.googleapis.com/icon?family=Material+Icons"
            rel="stylesheet"
          />
          <link
            rel="stylesheet"
            href="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/css/materialize.min.css"
          />
          <link href="https://fonts.googleapis.com/css2?family=Cinzel+Decorative:wght@700&display=swap" rel="stylesheet" />
          <script src="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/js/materialize.min.js" />
        </Head>
        <main>
          <MainPage />
        </main>
        <style jsx>{`
          .container {
            min-height: 100vh;
            padding: 0 0.5rem;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            background: #fff;
          }

          main {
            width: 100%;
            padding: 2.5rem;
            flex: 1;
            display: flex;
            flex-direction: column;
            justify-content: start;
            align-items: center;
            margin-bottom: 5rem;
          }
          @media (max-width: 767px) {
            main {
              padding: 2rem 0;
            }
          }
        `}</style>

        <style jsx global>{`
          * {
            box-sizing: border-box;
          }
          html,
          body {
            padding: 0;
            margin: 0;
            font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
              Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
              sans-serif;
            background: #f5f5f5;
          }
          nav .nav-wrapper {
            width: 100%;
            background-image: linear-gradient(
              to right,
              rgba(0, 144, 218, 1),
              rgba(164, 206, 78, 1)
            );
          }
          nav i.material-icons {
            font-size: 2.5rem;
          }
          .brand-logo {
            font-family: 'Cinzel Decorative', cursive;
          }
          .main-content {
            width: 100%;
          }
          .customRow {
            margin: 0;
          }
          .books-list {
            display: flex;
            flex-flow: wrap;
            margin-top: 2rem;
          }
          .book {
            border: 1px solid #ccc;
            margin: 0.5rem;
            padding: 1rem;
            border-radius: 5px;
            display: flex;
            flex-wrap: wrap;
            flex-direction: row;
            justify-content: space-between;
            align-items: self-start;
            position: relative;
            width: 12rem;
            height: 14rem;
            box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.14),
              0 3px 1px -2px rgba(0, 0, 0, 0.12), 0 1px 5px 0 rgba(0, 0, 0, 0.2);
          }

          .book .header {
            width: 100%;
          }
          .book h5 {
            margin: 0;
            font-size: 1rem;
            line-height: 1.25rem;
            margin-bottom: 0.25rem;
            font-weight: bold;
          }
          .author {
            color: #aaa;
            font-size: 12px;
          }
          .btn-container {
            margin: 2rem 0 0.5rem;
            position: absolute;
            bottom: 1rem;
          }
          .btn-container a:first-child {
            margin-right: 0.5rem;
          }
          .btn {
            margin-right: 0.5rem;
            color: #fff;
            border: 0;
            border-radius: 50%;
            width: 30px;
            height: 30px;
          }
          .btn-edit {
            background: #03a9f4;
          }
          .btn-delete {
            background: #ff8f00;
          }
          .material-icons {
            font-size: 16px;
          }
          .editBookForm {
            padding: 2rem;
            margin: 2rem 0;
            width: 100%;
            box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.14),
              0 3px 1px -2px rgba(0, 0, 0, 0.12), 0 1px 5px 0 rgba(0, 0, 0, 0.2);
          }
          .editBookForm h4 {
            margin: 0rem 0rem 2rem;
          }
          .bookDetails {
            box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.14),
              0 3px 1px -2px rgba(0, 0, 0, 0.12), 0 1px 5px 0 rgba(0, 0, 0, 0.2);
            padding: 1.5rem;
            margin: 1rem 0.5rem;
          }
          .details {
            border-bottom: 1px solid #ccc;
            padding: 10px 0;
          }
          .details:last-child {
            border: 0;
          }
          .details span:first-child {
            font-size: 16px;
            font-weight: bold;
            margin-right: 1rem;
          }
          @media (max-width: 600px) {
            .container {
              width: 100%;
              overflow: hidden;
            }
            main {
              padding: 2rem 0;
            }
            .books-list {
              justify-content: center;
            }
            .book {
              width: 10rem;
              margin: 1rem 0.5rem;
            }
          }
        `}</style>
      </div>
    </>
  );
}
