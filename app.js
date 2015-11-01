var baseColorHex = '#008ab7';
$(function () {
    var colorsToGenerate = [
        // Name, H offset, S offset, L offset
        ['50', 0.55, -4.61, 45.89],
        ['100', 0.82, -3.36, 36.47],
        ['200', 0.00, -4.00, 26.08],
        ['300', -0.36, -4.27, 15.69],
        ['400', 0.15, -4.11, 7.85],
        ['500', 0.00, 0.00, 0.00],
        ['600', 0.73, 1.64, -3.13],
        ['700', 1.04, 5.26, -7.25],
        ['800', 1.86, 8.86, -11.17],
        ['900', 3.75, 17.43, -18.04],
        ['A100', -0.24, 51.64, 29.61],
        ['A200', 0.03, 50.48, 18.24],
        ['A400', 0.13, 50.61, 13.92],
        ['A700', 0.12, 50.98, 11.38]
    ];

    var baseColor = tinycolor(baseColorHex).toHsl();
    baseColor.s = baseColor.s * 100;
    baseColor.l = baseColor.l * 100;
    delete baseColor.a;
    console.log(baseColor);

    var $body = $('body');

    for (var i = 0; i < colorsToGenerate.length; i++) {
        var name = colorsToGenerate[i][0];
        var offsetH = colorsToGenerate[i][1];
        var offsetS = colorsToGenerate[i][2];
        var offsetL = colorsToGenerate[i][3];

        var colorObj = {h: (baseColor.h + offsetH), s: (baseColor.s + offsetS), l: (baseColor.l + offsetL)};
        var newColor = tinycolor(colorObj);
        var hex = newColor.toHexString(false);
        console.log(colorObj);

        var fontColor = newColor.isLight() ? '#000' : '#FFF';
        var elementClass = i == 10 ? ' class="divider"' : '';

        $('<div' + elementClass + ' style="background-color: ' + hex + '; color:' + fontColor + '">' + name + ' - ' + hex + '</div>').appendTo($body);
    }
});