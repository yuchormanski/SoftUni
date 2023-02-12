const rgbToHexColor = require('./index.js');
const { expect } = require('chai');

describe('', () => {
    it('', () => {
        expect(rgbToHexColor(1, 2, 3)).to.equal('#010203')
    });
    it('', () => {
        expect(rgbToHexColor(255, 255, 255)).to.equal('#FFFFFF')
    });
    it('', () => {
        expect(rgbToHexColor(0, 0, 0)).to.equal('#000000')
    });
    it('', () => {
        expect(rgbToHexColor('0', 0, 0)).to.equal(undefined)
    });
    it('', () => {
        expect(rgbToHexColor(0, '0', 0)).to.equal(undefined)
    });
    it('', () => {
        expect(rgbToHexColor(0, 0, '0')).to.equal(undefined)
    });
    it('', () => {
        expect(rgbToHexColor(256, 0, 0)).to.equal(undefined)
    });
    it('', () => {
        expect(rgbToHexColor(0, 256, 0)).to.equal(undefined)
    });
    it('', () => {
        expect(rgbToHexColor(0, 0, 256)).to.equal(undefined)
    });
    it('', () => {
        expect(rgbToHexColor(-1, 0, 0)).to.equal(undefined)
    });
    it('', () => {
        expect(rgbToHexColor(0, -1, 0)).to.equal(undefined)
    });
    it('', () => {
        expect(rgbToHexColor(0, 0, -1)).to.equal(undefined)
    });
});