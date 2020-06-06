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
          <link
            href="https://fonts.googleapis.com/css2?family=Cinzel+Decorative:wght@700&display=swap"
            rel="stylesheet"
          />
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
          .clear {
            clear: both;
            content: "";
            display: table;
          }
          .book-card {
            perspective: 800px;
            -webkit-perspective: 800px;
            -moz-perspective: 800px;
          }
          .book-card-panel {
            float: left;
            height: auto;
            /*margin: 20px;*/
            position: relative;
          }
          .book-card-panel .front {
            float: none;
            position: relative;
            top: 0;
            left: 0;
            width: 250px;
            height: 300px;
            border: 1px solid #ccc;
            background: #fff;
            padding: 25px 20px 30px 20px;
            line-height: 1.2;
            -moz-box-shadow: 0 1px 5px rgba(0, 0, 0, 0.7);
            -webkit-box-shadow: 0 1px 5px rgba(0, 0, 0, 0.7);
            box-shadow: 0 1px 5px rgba(0, 0, 0, 0.7);

            -webkit-transform: rotateX(0deg) rotateY(0deg);
            -webkit-transform-style: preserve-3d;
            -webkit-backface-visibility: hidden;
            -moz-transform: rotateX(0deg) rotateY(0deg);
            -moz-transform-style: preserve-3d;
            -moz-backface-visibility: hidden;

            transform: rotateX(0deg) rotateY(0deg);
            /* -- transition is the magic sauce for animation -- */
            -o-transition: all 0.4s ease-in-out;
            -ms-transition: all 0.4s ease-in-out;
            -moz-transition: all 0.4s ease-in-out;
            -webkit-transition: all 0.4s ease-in-out;
            transition: all 0.4s ease-in-out;
          }
          .front-no-data {
            float: none;
            position: absolute;
            top: 0;
            left: 0;
            width: 250px;
            height: 100%;
            background: #fff;
            padding: 25px 20px 30px 20px;
            line-height: 1.2;
          }
          .book-card-panel.flip .front {
            width: 100%;
            border-color: #eee;
            background: #fff;
            -webkit-transform: rotateY(180deg);
            -moz-transform: rotateY(180deg);
            transform: rotateY(180deg);
            -moz-box-shadow: 0 1px 5px rgba(0, 0, 0, 0.7);
            -webkit-box-shadow: 0 1px 5px rgba(0, 0, 0, 0.7);
            box-shadow: 0 1px 5px rgba(0, 0, 0, 0.7);
          }
          .flip .front {
            width: 100%;
          }
          .book-card-panel .back {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: #fff;

            padding: 25px 20px 30px 20px;
            -webkit-transform: rotateY(-180deg);
            -webkit-transform-style: preserve-3d;
            -webkit-backface-visibility: hidden;
            -moz-transform: rotateY(-180deg);
            -moz-transform-style: preserve-3d;
            -moz-backface-visibility: hidden;
            transform: rotateY(-180deg);
            /* -- transition is the magic sauce for animation -- */
            -o-transition: all 0.4s ease-in-out;
            -ms-transition: all 0.4s ease-in-out;
            -moz-transition: all 0.4s ease-in-out;
            -webkit-transition: all 0.4s ease-in-out;
            transition: all 0.4s ease-in-out;
          }
          .book-card-panel.flip .back {
            background: #fff;
            width: 800px;
            height: auto;
            -webkit-transform: rotateX(0deg) rotateY(0deg);
            -moz-transform: rotateX(0deg) rotateY(0deg);
            transform: rotateX(0deg) rotateY(0deg);

            -moz-box-shadow: 0 1px 5px rgba(0, 0, 0, 0.7);
            -webkit-box-shadow: 0 1px 5px rgba(0, 0, 0, 0.7);

            box-shadow: 0 1px 5px rgba(0, 0, 0, 0.7);
            border-top: #0090da 2px solid;
          }

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
            font-family: "Cinzel Decorative", cursive;
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
          .header {
            padding: 0.75rem 0 0;
            border-top: 1px solid #ccc;
            margin: 2.25rem 0 0;
          }
          h5 {
            font-size: 1.5rem;
            line-height: 130%;
            margin: 0 0 1rem;
            font-weight: 400;
          }
          .author {
            color: #aaa;
            font-size: 18px;
          }
          .btn-container {
            display: flex;
            justify-content: space-between;
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
          .btn-grp {
            display: flex;
            position: fixed;
            bottom: 1.75rem;
          }
          .edit-btn {
            display: flex;
            align-items: center;
          }
          .details-btn {
            position: absolute;
            top: 0.75rem;
            right: 0.75rem;
            transform: scaleX(-1);
            color: #333;
            display: flex;
            flex-direction: column;
            align-items: center;
            cursor: pointer;
          }
          .details-btn:hover {
            color: #03a9f4;
          }
          .details-btn:hover span {
            color: #333;
            text-decoration: underline;
          }
          .details-btn .material-icons {
            font-size: 20px;
          }
          .details-btn .content {
            transform: scaleX(-1);
            display: block;
            text-transform: uppercase;
            font-size: 10px;
            letter-spacing: 0.5px;
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
          .bookList {
            display: flex;
            flex-wrap: wrap;
          }
          .book-card-panel {
            margin: 1rem;
          }
          .d-none .book-card-panel {
            display: none;
          }
          .book-card-panel.clear.flip {
            display: block;
            width: 100%;
            height: 100%;
          }
          @media (max-width: 767px) {
            .book-card-panel.flip .back {
              width: 100%;
            }
          }
          @media (max-width: 600px) {
            .book-card-panel.flip .back {
              width: 100%;
            }
            .container {
              width: 100%;
              overflow: hidden;
            }
            main {
              padding: 2rem 0;
            }
            .books-list {
              justify-content: space-evenly;
            }
          }
        `}</style>
      </div>
    </>
  );
}
