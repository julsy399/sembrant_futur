var wms_layers = [];


        var lyr_streetmap_0 = new ol.layer.Tile({
            'title': 'street map',
            //'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_cultius_1 = new ol.format.GeoJSON();
var features_cultius_1 = format_cultius_1.readFeatures(json_cultius_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_cultius_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_cultius_1.addFeatures(features_cultius_1);
var lyr_cultius_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_cultius_1, 
                style: style_cultius_1,
                popuplayertitle: "cultius",
                interactive: true,
    title: 'cultius<br />\
    <img src="styles/legend/cultius_1_0.png" /> Combinacio de cultius<br />\
    <img src="styles/legend/cultius_1_1.png" /> Cultius arboris i arbustius<br />\
    <img src="styles/legend/cultius_1_2.png" /> Cultius herbacis<br />'
        });

lyr_streetmap_0.setVisible(true);lyr_cultius_1.setVisible(true);
var layersList = [lyr_streetmap_0,lyr_cultius_1];
lyr_cultius_1.set('fieldAliases', {'OBJECTID_1': 'OBJECTID_1', 'OBJECTID': 'OBJECTID', 'ID_POLYGON': 'ID_POLYGON', 'SIOSE_CODE': 'SIOSE_CODE', 'SIOSE_XML': 'SIOSE_XML', 'SUPERF_HA': 'SUPERF_HA', 'CODIIGE': 'CODIIGE', 'HILUCS': 'HILUCS', 'SELLADO': 'SELLADO', 'FCC': 'FCC', 'CODBLQ': 'CODBLQ', 'SHAPE_Leng': 'SHAPE_Leng', 'CODIIGE_1': 'CODIIGE_1', 'Paisatge': 'Paisatge', 'Shape_Le_1': 'Shape_Le_1', 'Shape_Area': 'Shape_Area', });
lyr_cultius_1.set('fieldImages', {'OBJECTID_1': 'TextEdit', 'OBJECTID': 'TextEdit', 'ID_POLYGON': 'TextEdit', 'SIOSE_CODE': 'TextEdit', 'SIOSE_XML': 'TextEdit', 'SUPERF_HA': 'TextEdit', 'CODIIGE': 'TextEdit', 'HILUCS': 'TextEdit', 'SELLADO': 'TextEdit', 'FCC': 'TextEdit', 'CODBLQ': 'TextEdit', 'SHAPE_Leng': 'TextEdit', 'CODIIGE_1': 'TextEdit', 'Paisatge': 'TextEdit', 'Shape_Le_1': 'TextEdit', 'Shape_Area': 'TextEdit', });
lyr_cultius_1.set('fieldLabels', {'OBJECTID_1': 'hidden field', 'OBJECTID': 'hidden field', 'ID_POLYGON': 'hidden field', 'SIOSE_CODE': 'hidden field', 'SIOSE_XML': 'hidden field', 'SUPERF_HA': 'inline label - visible with data', 'CODIIGE': 'hidden field', 'HILUCS': 'hidden field', 'SELLADO': 'hidden field', 'FCC': 'hidden field', 'CODBLQ': 'hidden field', 'SHAPE_Leng': 'hidden field', 'CODIIGE_1': 'hidden field', 'Paisatge': 'inline label - visible with data', 'Shape_Le_1': 'hidden field', 'Shape_Area': 'hidden field', });
lyr_cultius_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});