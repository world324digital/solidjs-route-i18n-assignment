import type { Component } from 'solid-js';
import {
    Link,
    useParams
} from "@solidjs/router";
import { useI18n } from "@solid-primitives/i18n";

import styles from '../App.module.css';

const About: Component = () => {
    const [t, { locale }] = useI18n();
    const params = useParams();
    if (params.language != undefined) {
        locale(params.language);
    } else {
        locale("en");
    }

    return (
        <div class={styles.App}>
            <header class={styles.header}>
                <Link href='/'>Home</Link>
                <div style={{"max-width": "50%", "line-height": 1.5}}>
                    <p>{t("about")}</p>
                </div>
            </header>
        </div>
    );
};

export default About;
