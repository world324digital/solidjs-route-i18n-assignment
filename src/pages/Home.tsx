import type { Component } from 'solid-js';
import {
    Link
} from "@solidjs/router";

import logo from '../logo.svg';
import styles from '../App.module.css';

const Home: Component = () => {
    return (
        <div class={styles.App}>
            <header class={styles.header}>
                <img src={logo} class={styles.logo} alt="logo" />
                <Link href="/about">
                    About EN
                </Link>
                <Link href="/es/about">
                    About ES
                </Link>
                <Link href="/de/about">
                    About DE
                </Link>
            </header>
        </div>
    );
};

export default Home;
