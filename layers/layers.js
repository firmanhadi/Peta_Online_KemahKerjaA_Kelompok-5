ol.proj.proj4.register(proj4);
//ol.proj.get("EPSG:32749").setExtent([432554.220865, 9195767.367208, 436998.175774, 9197993.552953]);
var wms_layers = [];


        var lyr_GoogleRoads_0 = new ol.layer.Tile({
            'title': 'Google Roads',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=h&x={x}&y={y}&z={z}'
            })
        });

        var lyr_BingSatelite_1 = new ol.layer.Tile({
            'title': 'Bing Satelite',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'http://ecn.t3.tiles.virtualearth.net/tiles/a{q}.jpeg?g=0&dir=dir_n'
            })
        });

        var lyr_OSMStandard_2 = new ol.layer.Tile({
            'title': 'OSM Standard',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' &middot; <a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_KerentananKriminalitas_3 = new ol.format.GeoJSON();
var features_KerentananKriminalitas_3 = format_KerentananKriminalitas_3.readFeatures(json_KerentananKriminalitas_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32749'});
var jsonSource_KerentananKriminalitas_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_KerentananKriminalitas_3.addFeatures(features_KerentananKriminalitas_3);
var lyr_KerentananKriminalitas_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_KerentananKriminalitas_3, 
                style: style_KerentananKriminalitas_3,
                popuplayertitle: "Kerentanan Kriminalitas",
                interactive: true,
    title: 'Kerentanan Kriminalitas<br />\
    <img src="styles/legend/KerentananKriminalitas_3_0.png" /> Area Sawah<br />\
    <img src="styles/legend/KerentananKriminalitas_3_1.png" /> Rendah<br />\
    <img src="styles/legend/KerentananKriminalitas_3_2.png" /> Sedang<br />\
    <img src="styles/legend/KerentananKriminalitas_3_3.png" /> Tinggi<br />'
        });
var format_DaerahRawanKriminalitas_4 = new ol.format.GeoJSON();
var features_DaerahRawanKriminalitas_4 = format_DaerahRawanKriminalitas_4.readFeatures(json_DaerahRawanKriminalitas_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32749'});
var jsonSource_DaerahRawanKriminalitas_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_DaerahRawanKriminalitas_4.addFeatures(features_DaerahRawanKriminalitas_4);
var lyr_DaerahRawanKriminalitas_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_DaerahRawanKriminalitas_4, 
                style: style_DaerahRawanKriminalitas_4,
                popuplayertitle: "Daerah Rawan Kriminalitas",
                interactive: true,
    title: 'Daerah Rawan Kriminalitas<br />\
    <img src="styles/legend/DaerahRawanKriminalitas_4_0.png" /> Sangat Aman<br />\
    <img src="styles/legend/DaerahRawanKriminalitas_4_1.png" /> Aman<br />\
    <img src="styles/legend/DaerahRawanKriminalitas_4_2.png" /> Cukup Aman<br />\
    <img src="styles/legend/DaerahRawanKriminalitas_4_3.png" /> Kurang Aman<br />\
    <img src="styles/legend/DaerahRawanKriminalitas_4_4.png" /> Tidak Aman<br />'
        });
var format_ZonaAmanKriminalitas_5 = new ol.format.GeoJSON();
var features_ZonaAmanKriminalitas_5 = format_ZonaAmanKriminalitas_5.readFeatures(json_ZonaAmanKriminalitas_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32749'});
var jsonSource_ZonaAmanKriminalitas_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ZonaAmanKriminalitas_5.addFeatures(features_ZonaAmanKriminalitas_5);
var lyr_ZonaAmanKriminalitas_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ZonaAmanKriminalitas_5, 
                style: style_ZonaAmanKriminalitas_5,
                popuplayertitle: "Zona Aman Kriminalitas",
                interactive: true,
    title: 'Zona Aman Kriminalitas<br />\
    <img src="styles/legend/ZonaAmanKriminalitas_5_0.png" /> Sangat Tinggi<br />\
    <img src="styles/legend/ZonaAmanKriminalitas_5_1.png" /> Tinggi<br />\
    <img src="styles/legend/ZonaAmanKriminalitas_5_2.png" /> Sedang<br />\
    <img src="styles/legend/ZonaAmanKriminalitas_5_3.png" /> Sangat Rendah<br />\
    <img src="styles/legend/ZonaAmanKriminalitas_5_4.png" /> Rendah<br />'
        });
var format_DensitasFasilitasKeamanan_6 = new ol.format.GeoJSON();
var features_DensitasFasilitasKeamanan_6 = format_DensitasFasilitasKeamanan_6.readFeatures(json_DensitasFasilitasKeamanan_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32749'});
var jsonSource_DensitasFasilitasKeamanan_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_DensitasFasilitasKeamanan_6.addFeatures(features_DensitasFasilitasKeamanan_6);
var lyr_DensitasFasilitasKeamanan_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_DensitasFasilitasKeamanan_6, 
                style: style_DensitasFasilitasKeamanan_6,
                popuplayertitle: "Densitas Fasilitas Keamanan",
                interactive: true,
    title: 'Densitas Fasilitas Keamanan<br />\
    <img src="styles/legend/DensitasFasilitasKeamanan_6_0.png" /> Sangat Memadai<br />\
    <img src="styles/legend/DensitasFasilitasKeamanan_6_1.png" /> Memadai<br />\
    <img src="styles/legend/DensitasFasilitasKeamanan_6_2.png" /> Cukup Memadai<br />\
    <img src="styles/legend/DensitasFasilitasKeamanan_6_3.png" /> Kurang Memadai<br />\
    <img src="styles/legend/DensitasFasilitasKeamanan_6_4.png" /> Tidak Memadai<br />'
        });
var format_ServiceArea_7 = new ol.format.GeoJSON();
var features_ServiceArea_7 = format_ServiceArea_7.readFeatures(json_ServiceArea_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32749'});
var jsonSource_ServiceArea_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ServiceArea_7.addFeatures(features_ServiceArea_7);
var lyr_ServiceArea_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ServiceArea_7, 
                style: style_ServiceArea_7,
                popuplayertitle: "Service Area",
                interactive: true,
    title: 'Service Area<br />\
    <img src="styles/legend/ServiceArea_7_0.png" /> 0 - 50<br />\
    <img src="styles/legend/ServiceArea_7_1.png" /> 50 - 100<br />\
    <img src="styles/legend/ServiceArea_7_2.png" /> 100 - 250<br />\
    <img src="styles/legend/ServiceArea_7_3.png" /> 250 - 500<br />'
        });
var format_FasilitasCCTV_8 = new ol.format.GeoJSON();
var features_FasilitasCCTV_8 = format_FasilitasCCTV_8.readFeatures(json_FasilitasCCTV_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32749'});
var jsonSource_FasilitasCCTV_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_FasilitasCCTV_8.addFeatures(features_FasilitasCCTV_8);
var lyr_FasilitasCCTV_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_FasilitasCCTV_8, 
                style: style_FasilitasCCTV_8,
                popuplayertitle: "Fasilitas CCTV",
                interactive: true,
                title: '<img src="styles/legend/FasilitasCCTV_8.png" /> Fasilitas CCTV'
            });
var format_FasilitasPosKamling_9 = new ol.format.GeoJSON();
var features_FasilitasPosKamling_9 = format_FasilitasPosKamling_9.readFeatures(json_FasilitasPosKamling_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32749'});
var jsonSource_FasilitasPosKamling_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_FasilitasPosKamling_9.addFeatures(features_FasilitasPosKamling_9);
var lyr_FasilitasPosKamling_9 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_FasilitasPosKamling_9, 
                style: style_FasilitasPosKamling_9,
                popuplayertitle: "Fasilitas Pos Kamling",
                interactive: true,
                title: '<img src="styles/legend/FasilitasPosKamling_9.png" /> Fasilitas Pos Kamling'
            });

lyr_GoogleRoads_0.setVisible(false);lyr_BingSatelite_1.setVisible(false);lyr_OSMStandard_2.setVisible(true);lyr_KerentananKriminalitas_3.setVisible(true);lyr_DaerahRawanKriminalitas_4.setVisible(true);lyr_ZonaAmanKriminalitas_5.setVisible(true);lyr_DensitasFasilitasKeamanan_6.setVisible(true);lyr_ServiceArea_7.setVisible(true);lyr_FasilitasCCTV_8.setVisible(true);lyr_FasilitasPosKamling_9.setVisible(true);
var layersList = [lyr_GoogleRoads_0,lyr_BingSatelite_1,lyr_OSMStandard_2,lyr_KerentananKriminalitas_3,lyr_DaerahRawanKriminalitas_4,lyr_ZonaAmanKriminalitas_5,lyr_DensitasFasilitasKeamanan_6,lyr_ServiceArea_7,lyr_FasilitasCCTV_8,lyr_FasilitasPosKamling_9];
lyr_KerentananKriminalitas_3.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'Id': 'Id', 'RW': 'RW', 'RT': 'RT', 'Shape_Leng': 'Shape_Leng', 'Luas RW': 'Luas RW', 'Skor': 'Skor', 'Kelas': 'Kelas', 'Kerawanan': 'Kerawanan', });
lyr_DaerahRawanKriminalitas_4.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'Id': 'Id', 'RW': 'RW', 'RT': 'RT', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', 'DN': 'DN', 'Keterangan': 'Keterangan', 'Skor': 'Skor', 'Bobot_PRK': 'Bobot_PRK', 'Skor_Bobot': 'Skor_Bobot', });
lyr_ZonaAmanKriminalitas_5.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'Id': 'Id', 'RW': 'RW', 'RT': 'RT', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', 'fid': 'fid', 'DN': 'DN', 'Keterangan': 'Keterangan', 'Skor': 'Skor', 'Bobot_FK': 'Bobot_FK', 'Skor_Bobot': 'Skor_Bobot', 'OBJECTID_2': 'OBJECTID_2', 'Id_2': 'Id_2', 'RW_2': 'RW_2', 'RT_2': 'RT_2', 'Shape_Le_1': 'Shape_Le_1', 'Shape_Ar_1': 'Shape_Ar_1', 'DN_2': 'DN_2', 'Keterang_1': 'Keterang_1', 'Skor_2': 'Skor_2', 'Bobot_PRK': 'Bobot_PRK', 'Skor_Bob_1': 'Skor_Bob_1', 'Total_Nila': 'Total_Nila', 'Kelas': 'Kelas', 'Luas': 'Luas', });
lyr_DensitasFasilitasKeamanan_6.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'Id': 'Id', 'RW': 'RW', 'RT': 'RT', 'Shape_Leng': 'Shape_Leng', 'Luas (m2)': 'Luas (m2)', 'fid': 'fid', 'DN': 'DN', 'Keterangan': 'Keterangan', 'Skor': 'Skor', 'Bobot_FK': 'Bobot_FK', 'Bobot': 'Bobot', });
lyr_ServiceArea_7.set('fieldAliases', {'ObjectID': 'ObjectID', 'FacilityID': 'FacilityID', 'Radius': 'Radius', 'FromBreak': 'FromBreak', 'ToBreak': 'ToBreak', });
lyr_FasilitasCCTV_8.set('fieldAliases', {'Fasilitas': 'Fasilitas', 'Northing': 'Northing', 'Easting': 'Easting', 'Alamat': 'Alamat', 'field_5': 'field_5', 'field_6': 'field_6', 'field_7': 'field_7', 'field_8': 'field_8', 'field_9': 'field_9', });
lyr_FasilitasPosKamling_9.set('fieldAliases', {'Fasilitas': 'Fasilitas', 'Northing': 'Northing', 'Easting': 'Easting', 'Alamat': 'Alamat', 'field_5': 'field_5', 'field_6': 'field_6', 'field_7': 'field_7', 'field_8': 'field_8', 'field_9': 'field_9', });
lyr_KerentananKriminalitas_3.set('fieldImages', {'OBJECTID': 'TextEdit', 'Id': 'TextEdit', 'RW': 'TextEdit', 'RT': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Luas RW': 'TextEdit', 'Skor': 'TextEdit', 'Kelas': 'TextEdit', 'Kerawanan': 'TextEdit', });
lyr_DaerahRawanKriminalitas_4.set('fieldImages', {'OBJECTID': 'TextEdit', 'Id': 'TextEdit', 'RW': 'TextEdit', 'RT': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', 'DN': 'Range', 'Keterangan': 'TextEdit', 'Skor': 'TextEdit', 'Bobot_PRK': 'TextEdit', 'Skor_Bobot': 'TextEdit', });
lyr_ZonaAmanKriminalitas_5.set('fieldImages', {'OBJECTID': 'TextEdit', 'Id': 'TextEdit', 'RW': 'TextEdit', 'RT': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', 'fid': 'TextEdit', 'DN': 'TextEdit', 'Keterangan': 'TextEdit', 'Skor': 'TextEdit', 'Bobot_FK': 'TextEdit', 'Skor_Bobot': 'TextEdit', 'OBJECTID_2': 'TextEdit', 'Id_2': 'TextEdit', 'RW_2': 'TextEdit', 'RT_2': 'TextEdit', 'Shape_Le_1': 'TextEdit', 'Shape_Ar_1': 'TextEdit', 'DN_2': 'Range', 'Keterang_1': 'TextEdit', 'Skor_2': 'TextEdit', 'Bobot_PRK': 'TextEdit', 'Skor_Bob_1': 'TextEdit', 'Total_Nila': 'TextEdit', 'Kelas': 'TextEdit', 'Luas': 'TextEdit', });
lyr_DensitasFasilitasKeamanan_6.set('fieldImages', {'OBJECTID': 'TextEdit', 'Id': 'TextEdit', 'RW': 'TextEdit', 'RT': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Luas (m2)': 'TextEdit', 'fid': 'TextEdit', 'DN': 'TextEdit', 'Keterangan': 'TextEdit', 'Skor': 'TextEdit', 'Bobot_FK': 'TextEdit', 'Bobot': 'TextEdit', });
lyr_ServiceArea_7.set('fieldImages', {'ObjectID': 'TextEdit', 'FacilityID': 'TextEdit', 'Radius': 'TextEdit', 'FromBreak': 'TextEdit', 'ToBreak': 'TextEdit', });
lyr_FasilitasCCTV_8.set('fieldImages', {'Fasilitas': 'TextEdit', 'Northing': 'TextEdit', 'Easting': 'TextEdit', 'Alamat': 'TextEdit', 'field_5': 'TextEdit', 'field_6': 'TextEdit', 'field_7': 'TextEdit', 'field_8': 'TextEdit', 'field_9': 'TextEdit', });
lyr_FasilitasPosKamling_9.set('fieldImages', {'Fasilitas': 'TextEdit', 'Northing': 'TextEdit', 'Easting': 'TextEdit', 'Alamat': 'TextEdit', 'field_5': 'TextEdit', 'field_6': 'TextEdit', 'field_7': 'TextEdit', 'field_8': 'TextEdit', 'field_9': 'TextEdit', });
lyr_KerentananKriminalitas_3.set('fieldLabels', {'OBJECTID': 'hidden field', 'Id': 'hidden field', 'RW': 'inline label - visible with data', 'RT': 'inline label - visible with data', 'Shape_Leng': 'hidden field', 'Luas RW': 'inline label - visible with data', 'Skor': 'hidden field', 'Kelas': 'inline label - visible with data', 'Kerawanan': 'inline label - visible with data', });
lyr_DaerahRawanKriminalitas_4.set('fieldLabels', {'OBJECTID': 'hidden field', 'Id': 'hidden field', 'RW': 'inline label - visible with data', 'RT': 'hidden field', 'Shape_Leng': 'hidden field', 'Shape_Area': 'hidden field', 'DN': 'hidden field', 'Keterangan': 'inline label - visible with data', 'Skor': 'hidden field', 'Bobot_PRK': 'hidden field', 'Skor_Bobot': 'hidden field', });
lyr_ZonaAmanKriminalitas_5.set('fieldLabels', {'OBJECTID': 'hidden field', 'Id': 'hidden field', 'RW': 'inline label - visible with data', 'RT': 'hidden field', 'Shape_Leng': 'hidden field', 'Shape_Area': 'hidden field', 'fid': 'hidden field', 'DN': 'hidden field', 'Keterangan': 'inline label - visible with data', 'Skor': 'hidden field', 'Bobot_FK': 'hidden field', 'Skor_Bobot': 'hidden field', 'OBJECTID_2': 'hidden field', 'Id_2': 'hidden field', 'RW_2': 'hidden field', 'RT_2': 'hidden field', 'Shape_Le_1': 'hidden field', 'Shape_Ar_1': 'hidden field', 'DN_2': 'hidden field', 'Keterang_1': 'hidden field', 'Skor_2': 'hidden field', 'Bobot_PRK': 'hidden field', 'Skor_Bob_1': 'hidden field', 'Total_Nila': 'hidden field', 'Kelas': 'hidden field', 'Luas': 'inline label - visible with data', });
lyr_DensitasFasilitasKeamanan_6.set('fieldLabels', {'OBJECTID': 'hidden field', 'Id': 'hidden field', 'RW': 'inline label - visible with data', 'RT': 'hidden field', 'Shape_Leng': 'hidden field', 'Luas (m2)': 'inline label - visible with data', 'fid': 'hidden field', 'DN': 'hidden field', 'Keterangan': 'inline label - visible with data', 'Skor': 'hidden field', 'Bobot_FK': 'hidden field', 'Bobot': 'hidden field', });
lyr_ServiceArea_7.set('fieldLabels', {'ObjectID': 'hidden field', 'FacilityID': 'hidden field', 'Radius': 'inline label - visible with data', 'FromBreak': 'hidden field', 'ToBreak': 'hidden field', });
lyr_FasilitasCCTV_8.set('fieldLabels', {'Fasilitas': 'inline label - visible with data', 'Northing': 'hidden field', 'Easting': 'hidden field', 'Alamat': 'inline label - visible with data', 'field_5': 'hidden field', 'field_6': 'hidden field', 'field_7': 'hidden field', 'field_8': 'hidden field', 'field_9': 'hidden field', });
lyr_FasilitasPosKamling_9.set('fieldLabels', {'Fasilitas': 'inline label - visible with data', 'Northing': 'hidden field', 'Easting': 'hidden field', 'Alamat': 'inline label - visible with data', 'field_5': 'hidden field', 'field_6': 'hidden field', 'field_7': 'hidden field', 'field_8': 'hidden field', 'field_9': 'hidden field', });
lyr_FasilitasPosKamling_9.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});