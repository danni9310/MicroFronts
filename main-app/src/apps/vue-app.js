import * as singleSpa from "single-spa";
import {matchingPathname, runScript} from "./utils";

const loadVueApp = async () => {
    await runScript('http://localhost:8080/build.js');
    return window.vueApp;
};


export const registerVueApp = () => {
    singleSpa.registerApplication('vue-app', loadVueApp, matchingPathname(['/vue', '/']));
};