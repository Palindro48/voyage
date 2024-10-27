var wms_layers = [];


        var lyr_aa_GoogleSatellite_0 = new ol.layer.Tile({
            'title': 'aa_Google Satellite',
            //'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });

        var lyr_aa_OpenStreetMap_1 = new ol.layer.Tile({
            'title': 'aa_OpenStreetMap',
            //'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_parcours_multi_segment_2 = new ol.format.GeoJSON();
var features_parcours_multi_segment_2 = format_parcours_multi_segment_2.readFeatures(json_parcours_multi_segment_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_parcours_multi_segment_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_parcours_multi_segment_2.addFeatures(features_parcours_multi_segment_2);
var lyr_parcours_multi_segment_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_parcours_multi_segment_2, 
                style: style_parcours_multi_segment_2,
                popuplayertitle: "parcours_multi_segment",
                interactive: true,
                title: '<img src="styles/legend/parcours_multi_segment_2.png" /> parcours_multi_segment'
            });
var format_poi_3 = new ol.format.GeoJSON();
var features_poi_3 = format_poi_3.readFeatures(json_poi_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_poi_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_poi_3.addFeatures(features_poi_3);
var lyr_poi_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_poi_3, 
                style: style_poi_3,
                popuplayertitle: "poi",
                interactive: true,
                title: '<img src="styles/legend/poi_3.png" /> poi'
            });

lyr_aa_GoogleSatellite_0.setVisible(true);lyr_aa_OpenStreetMap_1.setVisible(true);lyr_parcours_multi_segment_2.setVisible(true);lyr_poi_3.setVisible(true);
var layersList = [lyr_aa_GoogleSatellite_0,lyr_aa_OpenStreetMap_1,lyr_parcours_multi_segment_2,lyr_poi_3];
lyr_parcours_multi_segment_2.set('fieldAliases', {'fid': 'fid', 'dist': 'dist', });
lyr_poi_3.set('fieldAliases', {'fid': 'fid', 'Lieu': 'Lieu', 'Commentaire': 'Commentaire', 'nb_nuits': 'nb_nuits', });
lyr_parcours_multi_segment_2.set('fieldImages', {'fid': '', 'dist': '', });
lyr_poi_3.set('fieldImages', {'fid': '', 'Lieu': '', 'Commentaire': '', 'nb_nuits': '', });
lyr_parcours_multi_segment_2.set('fieldLabels', {'fid': 'no label', 'dist': 'inline label - visible with data', });
lyr_poi_3.set('fieldLabels', {'fid': 'no label', 'Lieu': 'inline label - always visible', 'Commentaire': 'no label', 'nb_nuits': 'no label', });
lyr_poi_3.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});