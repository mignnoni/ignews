import { SignInButton } from "../SignInButton";
import styles from "./styles.module.scss"
import Image from "next/image";
import { ActiveLink } from "../ActiveLink";
import Link from "next/link";

export function Header() {

    return (
        <header className={styles.headerContainer}>
            <div className={styles.headerContent}>
                    <Image src="/images/logo.svg" className={styles.logo} alt="ig.news" width={110} height={31}/>
                <nav>
                    <ActiveLink activeClassName={styles.active} href="/">
                        <a>Home</a>
                    </ActiveLink>

                    <ActiveLink activeClassName={styles.active} href="/posts">
                        <a>Posts</a>
                    </ActiveLink>
                </nav>
                
                <SignInButton />
            </div>
        </header>
    );
}

