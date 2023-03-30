CDN load module
import {html, render } from https://unpkg.com/lit-html?module";



| --boolean attribute rendering -- |
let data = true/false
const myTemplate = (data) => html`<div ?disabled=${data}>Stylish text.</div>`

| -- stylish element -- |
const myTemplate = (data) => html`<div class=${data.cssClass}>Stylish text.</div>`

| -- value property -- |
const myTemplate = (data) => html`<input .value=${data.value}></input>`;

| -- ?? -- |
const myTemplate = (data) => html`<my-list 	.listItems=${data.items}></my-list>`;



