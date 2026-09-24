import style from "../app/page.module.css";

export function Footer() {
    return (
        <footer className={style.footer}>
            <a
                href="https://vercel.com?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
                target="_blank"
                rel="noopener noreferrer"
            >
                Powered by {" "}
                <img src="/vercel.svg" alt="Vercel Logo" className={style.logo}></img>
            </a>
        </footer>
    );
}