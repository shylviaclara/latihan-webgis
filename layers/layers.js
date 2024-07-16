var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            //'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_BATAS_ADMINISTRASI_AR_1 = new ol.format.GeoJSON();
var features_BATAS_ADMINISTRASI_AR_1 = format_BATAS_ADMINISTRASI_AR_1.readFeatures(json_BATAS_ADMINISTRASI_AR_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BATAS_ADMINISTRASI_AR_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BATAS_ADMINISTRASI_AR_1.addFeatures(features_BATAS_ADMINISTRASI_AR_1);
var lyr_BATAS_ADMINISTRASI_AR_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_BATAS_ADMINISTRASI_AR_1, 
                style: style_BATAS_ADMINISTRASI_AR_1,
                popuplayertitle: "BATAS_ADMINISTRASI_AR",
                interactive: true,
                title: '<img src="styles/legend/BATAS_ADMINISTRASI_AR_1.png" /> BATAS_ADMINISTRASI_AR'
            });
var format_JalanWindujaya_2 = new ol.format.GeoJSON();
var features_JalanWindujaya_2 = format_JalanWindujaya_2.readFeatures(json_JalanWindujaya_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_JalanWindujaya_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_JalanWindujaya_2.addFeatures(features_JalanWindujaya_2);
var lyr_JalanWindujaya_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_JalanWindujaya_2, 
                style: style_JalanWindujaya_2,
                popuplayertitle: "Jalan Windujaya",
                interactive: true,
                title: '<img src="styles/legend/JalanWindujaya_2.png" /> Jalan Windujaya'
            });
var format_SungaiWindujaya_3 = new ol.format.GeoJSON();
var features_SungaiWindujaya_3 = format_SungaiWindujaya_3.readFeatures(json_SungaiWindujaya_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SungaiWindujaya_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SungaiWindujaya_3.addFeatures(features_SungaiWindujaya_3);
var lyr_SungaiWindujaya_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SungaiWindujaya_3, 
                style: style_SungaiWindujaya_3,
                popuplayertitle: "Sungai Windujaya",
                interactive: true,
                title: '<img src="styles/legend/SungaiWindujaya_3.png" /> Sungai Windujaya'
            });
var format_Lapisan2_4 = new ol.format.GeoJSON();
var features_Lapisan2_4 = format_Lapisan2_4.readFeatures(json_Lapisan2_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Lapisan2_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Lapisan2_4.addFeatures(features_Lapisan2_4);
var lyr_Lapisan2_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Lapisan2_4, 
                style: style_Lapisan2_4,
                popuplayertitle: "Lapisan 2",
                interactive: true,
    title: 'Lapisan 2<br />\
    <img src="styles/legend/Lapisan2_4_0.png" /> Titik 1_Kelompok 6_Petani 1<br />\
    <img src="styles/legend/Lapisan2_4_1.png" /> Titik 2_Kelompok 6_Petani 2<br />\
    <img src="styles/legend/Lapisan2_4_2.png" /> Titik 3_Kelompok 6_Petani 3<br />\
    <img src="styles/legend/Lapisan2_4_3.png" /> Titik 4_Kelompok 6_Petani 4<br />\
    <img src="styles/legend/Lapisan2_4_4.png" /> Titik 5_Kelompok 6_Petani 5<br />\
    <img src="styles/legend/Lapisan2_4_5.png" /> Titik 6_Kelompok 6_Petani 6<br />\
    <img src="styles/legend/Lapisan2_4_6.png" /> Titik 7_Kelompok 6_Petani 7<br />\
    <img src="styles/legend/Lapisan2_4_7.png" /> Titik 8_Kelompok 6_Petani 8<br />\
    <img src="styles/legend/Lapisan2_4_8.png" /> Titik 9_Kelompok 6_Petani 9<br />\
    <img src="styles/legend/Lapisan2_4_9.png" /> Titik 10_Kelompok 6_Petani 10<br />'
        });

lyr_OpenStreetMap_0.setVisible(true);lyr_BATAS_ADMINISTRASI_AR_1.setVisible(true);lyr_JalanWindujaya_2.setVisible(true);lyr_SungaiWindujaya_3.setVisible(true);lyr_Lapisan2_4.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_BATAS_ADMINISTRASI_AR_1,lyr_JalanWindujaya_2,lyr_SungaiWindujaya_3,lyr_Lapisan2_4];
lyr_BATAS_ADMINISTRASI_AR_1.set('fieldAliases', {'KABUPATEN': 'KABUPATEN', 'KECAMATAN': 'KECAMATAN', 'DESA': 'DESA', 'SUMBER': 'SUMBER', 'Luas': 'Luas', });
lyr_JalanWindujaya_2.set('fieldAliases', {'fid': 'fid', 'NAMRJL': 'NAMRJL', 'KONRJL': 'KONRJL', 'MATRJL': 'MATRJL', 'FGSRJL': 'FGSRJL', 'UTKRJL': 'UTKRJL', 'TOLRJL': 'TOLRJL', 'WLYRJL': 'WLYRJL', 'AUTRJL': 'AUTRJL', 'KLSRJL': 'KLSRJL', 'SPCRJL': 'SPCRJL', 'JPARJL': 'JPARJL', 'ARHRJL': 'ARHRJL', 'STARJL': 'STARJL', 'KLLRJL': 'KLLRJL', 'MEDRJL': 'MEDRJL', 'LOCRJL': 'LOCRJL', 'JARRJL': 'JARRJL', 'FCODE': 'FCODE', 'REMARK': 'REMARK', 'SRS_ID': 'SRS_ID', 'LCODE': 'LCODE', 'METADATA': 'METADATA', 'SHAPE_Leng': 'SHAPE_Leng', });
lyr_SungaiWindujaya_3.set('fieldAliases', {'fid': 'fid', 'NAMOBJ': 'NAMOBJ', 'TIPSNG': 'TIPSNG', 'KLSSNG': 'KLSSNG', 'FCODE': 'FCODE', 'REMARK': 'REMARK', 'SRS_ID': 'SRS_ID', 'LCODE': 'LCODE', 'METADATA': 'METADATA', 'NAMWS': 'NAMWS', 'NAMDAS': 'NAMDAS', 'STATUS': 'STATUS', 'WMAX': 'WMAX', 'DBTMAX': 'DBTMAX', 'SLPRT': 'SLPRT', 'SHAPE_Leng': 'SHAPE_Leng', });
lyr_Lapisan2_4.set('fieldAliases', {'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', 'pdfmaps_photos': 'pdfmaps_photos', 'Photo Name': 'Photo Name', 'Photo Date': 'Photo Date', 'Photo Timestamp': 'Photo Timestamp', 'Photo Location': 'Photo Location', 'Photo Altitude': 'Photo Altitude', 'Photo Orientation': 'Photo Orientation', 'Device Type': 'Device Type', });
lyr_BATAS_ADMINISTRASI_AR_1.set('fieldImages', {'KABUPATEN': 'TextEdit', 'KECAMATAN': 'TextEdit', 'DESA': 'TextEdit', 'SUMBER': 'TextEdit', 'Luas': 'TextEdit', });
lyr_JalanWindujaya_2.set('fieldImages', {'fid': 'TextEdit', 'NAMRJL': 'TextEdit', 'KONRJL': 'TextEdit', 'MATRJL': 'TextEdit', 'FGSRJL': 'TextEdit', 'UTKRJL': 'TextEdit', 'TOLRJL': 'TextEdit', 'WLYRJL': 'TextEdit', 'AUTRJL': 'TextEdit', 'KLSRJL': 'TextEdit', 'SPCRJL': 'TextEdit', 'JPARJL': 'TextEdit', 'ARHRJL': 'TextEdit', 'STARJL': 'TextEdit', 'KLLRJL': 'TextEdit', 'MEDRJL': 'TextEdit', 'LOCRJL': 'TextEdit', 'JARRJL': 'TextEdit', 'FCODE': 'TextEdit', 'REMARK': 'TextEdit', 'SRS_ID': 'TextEdit', 'LCODE': 'TextEdit', 'METADATA': 'TextEdit', 'SHAPE_Leng': 'TextEdit', });
lyr_SungaiWindujaya_3.set('fieldImages', {'fid': 'TextEdit', 'NAMOBJ': 'TextEdit', 'TIPSNG': 'TextEdit', 'KLSSNG': 'TextEdit', 'FCODE': 'TextEdit', 'REMARK': 'TextEdit', 'SRS_ID': 'TextEdit', 'LCODE': 'TextEdit', 'METADATA': 'TextEdit', 'NAMWS': 'TextEdit', 'NAMDAS': 'TextEdit', 'STATUS': 'TextEdit', 'WMAX': 'TextEdit', 'DBTMAX': 'TextEdit', 'SLPRT': 'TextEdit', 'SHAPE_Leng': 'TextEdit', });
lyr_Lapisan2_4.set('fieldImages', {'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', 'pdfmaps_photos': 'TextEdit', 'Photo Name': 'TextEdit', 'Photo Date': 'TextEdit', 'Photo Timestamp': 'TextEdit', 'Photo Location': 'TextEdit', 'Photo Altitude': 'TextEdit', 'Photo Orientation': 'TextEdit', 'Device Type': 'TextEdit', });
lyr_BATAS_ADMINISTRASI_AR_1.set('fieldLabels', {'KABUPATEN': 'no label', 'KECAMATAN': 'no label', 'DESA': 'inline label - always visible', 'SUMBER': 'no label', 'Luas': 'no label', });
lyr_JalanWindujaya_2.set('fieldLabels', {'fid': 'no label', 'NAMRJL': 'no label', 'KONRJL': 'no label', 'MATRJL': 'no label', 'FGSRJL': 'no label', 'UTKRJL': 'no label', 'TOLRJL': 'no label', 'WLYRJL': 'no label', 'AUTRJL': 'no label', 'KLSRJL': 'no label', 'SPCRJL': 'no label', 'JPARJL': 'no label', 'ARHRJL': 'no label', 'STARJL': 'no label', 'KLLRJL': 'no label', 'MEDRJL': 'no label', 'LOCRJL': 'no label', 'JARRJL': 'no label', 'FCODE': 'no label', 'REMARK': 'inline label - always visible', 'SRS_ID': 'no label', 'LCODE': 'no label', 'METADATA': 'no label', 'SHAPE_Leng': 'no label', });
lyr_SungaiWindujaya_3.set('fieldLabels', {'fid': 'no label', 'NAMOBJ': 'no label', 'TIPSNG': 'no label', 'KLSSNG': 'no label', 'FCODE': 'no label', 'REMARK': 'inline label - always visible', 'SRS_ID': 'no label', 'LCODE': 'no label', 'METADATA': 'no label', 'NAMWS': 'no label', 'NAMDAS': 'no label', 'STATUS': 'no label', 'WMAX': 'no label', 'DBTMAX': 'no label', 'SLPRT': 'no label', 'SHAPE_Leng': 'no label', });
lyr_Lapisan2_4.set('fieldLabels', {'Name': 'inline label - always visible', 'description': 'inline label - always visible', 'timestamp': 'inline label - always visible', 'begin': 'inline label - always visible', 'end': 'inline label - always visible', 'altitudeMode': 'inline label - always visible', 'tessellate': 'inline label - always visible', 'extrude': 'inline label - always visible', 'visibility': 'inline label - always visible', 'drawOrder': 'inline label - always visible', 'icon': 'inline label - always visible', 'pdfmaps_photos': 'inline label - always visible', 'Photo Name': 'inline label - always visible', 'Photo Date': 'inline label - always visible', 'Photo Timestamp': 'inline label - always visible', 'Photo Location': 'inline label - always visible', 'Photo Altitude': 'inline label - always visible', 'Photo Orientation': 'inline label - always visible', 'Device Type': 'inline label - always visible', });
lyr_Lapisan2_4.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});